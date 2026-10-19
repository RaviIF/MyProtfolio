import * as THREE from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export interface FluidTrailPoint {
  x: number; // UV x (0 to 1)
  y: number; // UV y (0 to 1)
  vx: number; // velocity x
  vy: number; // velocity y
  age: number; // seconds
}

const MAX_TRAIL = 16;

export const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uAspect: { value: 1.0 },
    uActiveTrailCount: { value: 0 },
    uTrailPos: { value: new Array(MAX_TRAIL).fill(null).map(() => new THREE.Vector2(0.5, 0.5)) },
    uTrailVel: { value: new Array(MAX_TRAIL).fill(null).map(() => new THREE.Vector2(0.0, 0.0)) },
    uTrailAge: { value: new Float32Array(MAX_TRAIL) },
  },

  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uAspect;
    uniform int uActiveTrailCount;
    uniform vec2 uTrailPos[${MAX_TRAIL}];
    uniform vec2 uTrailVel[${MAX_TRAIL}];
    uniform float uTrailAge[${MAX_TRAIL}];

    varying vec2 vUv;

    void main() {
      vec2 fluidOffset = vec2(0.0);
      float fluidMagnitude = 0.0;

      // 1. Vertex3D-Style Directional Fluid Velocity Drag (Silky smoke / liquid wake, NO circular rings)
      for (int i = 0; i < ${MAX_TRAIL}; i++) {
        if (i >= uActiveTrailCount) break;

        vec2 diff = vUv - uTrailPos[i];
        diff.x *= uAspect; // aspect ratio correction
        float dist = length(diff);
        float age = uTrailAge[i];

        if (age < 0.75 && dist < 0.45) {
          // Smooth gaussian spatial envelope + swift exponential time relaxation
          float spatial = exp(-dist * 13.5);
          float temporal = exp(-age * 4.2);
          float weight = spatial * temporal;

          // Push pixels directly along mouse movement vector
          fluidOffset += uTrailVel[i] * (weight * 0.048);
          fluidMagnitude += weight;
        }
      }

      vec2 centerDiff = vUv - vec2(0.5);
      float distCenter = length(centerDiff);
      vec2 radialDir = distCenter > 0.0001 ? normalize(centerDiff) : vec2(0.0);

      // 2. Directional Prismatic Chromatic Dispersion (Aligned along fluid drag vector)
      vec2 chromOffset = fluidOffset * 0.55 + radialDir * (distCenter * distCenter * 0.0035);

      vec2 uvR = clamp(vUv + fluidOffset + chromOffset, 0.0, 1.0);
      vec2 uvG = clamp(vUv + fluidOffset, 0.0, 1.0);
      vec2 uvB = clamp(vUv + fluidOffset - chromOffset, 0.0, 1.0);

      vec4 colR = texture2D(tDiffuse, uvR);
      vec4 colG = texture2D(tDiffuse, uvG);
      vec4 colB = texture2D(tDiffuse, uvB);
      vec3 color = vec3(colR.r, colG.g, colB.b);

      // 3. Subtle Liquid Refraction Specular Sheen
      float dragPower = length(fluidOffset);
      color += vec3(0.14, 0.42, 0.65) * clamp(dragPower * 7.5, 0.0, 0.5);

      // 4. Stepped 24 FPS Film Grain
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(vUv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.035;

      // 5. Cinematic Vignette
      float vignette = smoothstep(1.25, 0.42, distCenter);
      color *= (0.76 + 0.24 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export class CinematicPostPass {
  public pass: ShaderPass;
  private trail: FluidTrailPoint[] = [];
  private lastSpawnTime = 0;
  private lastX = -1;
  private lastY = -1;

  constructor(width: number, height: number) {
    this.pass = new ShaderPass(CinematicShader);
    this.updateSize(width, height);
  }

  public updateSize(width: number, height: number): void {
    const aspect = height > 0 ? width / height : 1.0;
    this.pass.uniforms.uAspect.value = aspect;
  }

  public addCursorMovement(normX: number, normY: number, now: number): void {
    if (this.lastX < 0) {
      this.lastX = normX;
      this.lastY = normY;
      this.lastSpawnTime = now;
      return;
    }

    const dt = Math.max(0.001, now - this.lastSpawnTime);
    const dx = normX - this.lastX;
    const dy = normY - this.lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Track fluid impulses with minimum movement
    if (dist > 0.002 && dt > 0.016) {
      // Clamped velocity vector
      const vx = Math.max(-1.5, Math.min(1.5, (dx / dt) * 0.18));
      const vy = Math.max(-1.5, Math.min(1.5, (dy / dt) * 0.18));

      this.spawnTrailPoint(normX, normY, vx, vy);
      this.lastSpawnTime = now;
      this.lastX = normX;
      this.lastY = normY;
    }
  }

  public spawnTrailPoint(x: number, y: number, vx: number, vy: number): void {
    if (this.trail.length >= MAX_TRAIL) {
      this.trail.shift();
    }
    this.trail.push({
      x,
      y,
      vx,
      vy,
      age: 0,
    });
  }

  // Backwards compatibility hook for clicks
  public spawnRipple(x: number, y: number, intensity = 1.0): void {
    this.spawnTrailPoint(x, y, 0.0, intensity * 0.4);
  }

  public update(delta: number, elapsed: number): void {
    this.pass.uniforms.uTime.value = elapsed;

    // Age trail points and filter expired
    for (let i = 0; i < this.trail.length; i++) {
      this.trail[i].age += delta;
    }
    this.trail = this.trail.filter((p) => p.age < 0.75);

    // Update shader uniforms
    const count = Math.min(this.trail.length, MAX_TRAIL);
    this.pass.uniforms.uActiveTrailCount.value = count;

    for (let i = 0; i < count; i++) {
      const p = this.trail[i];
      (this.pass.uniforms.uTrailPos.value as THREE.Vector2[])[i].set(p.x, p.y);
      (this.pass.uniforms.uTrailVel.value as THREE.Vector2[])[i].set(p.vx, p.vy);
      (this.pass.uniforms.uTrailAge.value as Float32Array)[i] = p.age;
    }
  }
}
