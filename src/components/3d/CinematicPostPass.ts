import * as THREE from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export interface RipplePoint {
  x: number; // UV x (0 to 1)
  y: number; // UV y (0 to 1)
  age: number; // seconds
  intensity: number; // 0 to 1
}

const MAX_RIPPLES = 8;

export const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uAspect: { value: 1.0 },
    uActiveRippleCount: { value: 0 },
    uRipples: { value: new Array(MAX_RIPPLES).fill(null).map(() => new THREE.Vector2(0.5, 0.5)) },
    uRippleAges: { value: new Float32Array(MAX_RIPPLES) },
    uRippleIntensities: { value: new Float32Array(MAX_RIPPLES) },
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
    uniform int uActiveRippleCount;
    uniform vec2 uRipples[${MAX_RIPPLES}];
    uniform float uRippleAges[${MAX_RIPPLES}];
    uniform float uRippleIntensities[${MAX_RIPPLES}];

    varying vec2 vUv;

    void main() {
      vec2 rippleOffset = vec2(0.0);

      // 1. Fluid Mouse Ripple Simulation (Vertex3D style)
      for (int i = 0; i < ${MAX_RIPPLES}; i++) {
        if (i >= uActiveRippleCount) break;

        vec2 diff = vUv - uRipples[i];
        diff.x *= uAspect; // circular wave correction
        float dist = length(diff);
        float age = uRippleAges[i];

        if (age < 0.95 && dist < 0.5) {
          // Thin, high-frequency harmonic wave (delicate water ripple)
          float wave = sin(dist * 68.0 - age * 12.5);
          // Tight spatial falloff + clean exponential decay
          float envelope = exp(-dist * 8.5) * exp(-age * 2.8);
          vec2 dir = dist > 0.0001 ? normalize(diff) : vec2(0.0);
          dir.x /= uAspect; // revert aspect scaling for UV displacement
          rippleOffset += dir * (wave * envelope * uRippleIntensities[i] * 0.016);
        }
      }

      vec2 centerDiff = vUv - vec2(0.5);
      float distCenter = length(centerDiff);
      vec2 radialDir = distCenter > 0.0001 ? normalize(centerDiff) : vec2(0.0);

      // 2. Optical Lens Chromatic Aberration (Radial + Subtle Prismatic Wave Edge)
      vec2 chromOffset = radialDir * (distCenter * distCenter * 0.004) + rippleOffset * 0.22;

      vec2 uvR = clamp(vUv + rippleOffset + chromOffset, 0.0, 1.0);
      vec2 uvG = clamp(vUv + rippleOffset, 0.0, 1.0);
      vec2 uvB = clamp(vUv + rippleOffset - chromOffset, 0.0, 1.0);

      vec4 colR = texture2D(tDiffuse, uvR);
      vec4 colG = texture2D(tDiffuse, uvG);
      vec4 colB = texture2D(tDiffuse, uvB);
      vec3 color = vec3(colR.r, colG.g, colB.b);

      // 3. Delicate Optical Refraction Sheen on Thin Wave Crests
      float rippleMag = length(rippleOffset);
      color += vec3(0.08, 0.22, 0.32) * (rippleMag * 4.2);

      // 4. Stepped 24 FPS Film Grain (Eliminates banding, adds velvety tactile texture)
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(vUv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.036;

      // 5. Cinematic Vignette (Darkened perimeter focusing eye on portfolio content)
      float vignette = smoothstep(1.25, 0.42, distCenter);
      color *= (0.76 + 0.24 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export class CinematicPostPass {
  public pass: ShaderPass;
  private ripples: RipplePoint[] = [];
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
    // normX: 0..1 (from left to right)
    // normY: 0..1 (from bottom to top in WebGL UV)
    if (this.lastX < 0) {
      this.lastX = normX;
      this.lastY = normY;
      return;
    }

    const dx = normX - this.lastX;
    const dy = normY - this.lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Only spawn when moving with enough velocity and at least 45ms throttle
    if (dist > 0.008 && now - this.lastSpawnTime > 0.045) {
      const speed = Math.min(1.0, dist * 12.0);
      this.spawnRipple(normX, normY, 0.4 + speed * 0.6);
      this.lastSpawnTime = now;
      this.lastX = normX;
      this.lastY = normY;
    }
  }

  public spawnRipple(x: number, y: number, intensity = 0.8): void {
    if (this.ripples.length >= MAX_RIPPLES) {
      this.ripples.shift(); // remove oldest
    }
    this.ripples.push({
      x,
      y,
      age: 0,
      intensity: Math.min(1.0, intensity),
    });
  }

  public update(delta: number, elapsed: number): void {
    this.pass.uniforms.uTime.value = elapsed;

    // Age ripples and filter expired
    for (let i = 0; i < this.ripples.length; i++) {
      this.ripples[i].age += delta;
    }
    this.ripples = this.ripples.filter((r) => r.age < 0.95);

    // Update shader uniforms
    const count = Math.min(this.ripples.length, MAX_RIPPLES);
    this.pass.uniforms.uActiveRippleCount.value = count;

    for (let i = 0; i < count; i++) {
      const r = this.ripples[i];
      (this.pass.uniforms.uRipples.value as THREE.Vector2[])[i].set(r.x, r.y);
      (this.pass.uniforms.uRippleAges.value as Float32Array)[i] = r.age;
      (this.pass.uniforms.uRippleIntensities.value as Float32Array)[i] = r.intensity;
    }
  }
}
