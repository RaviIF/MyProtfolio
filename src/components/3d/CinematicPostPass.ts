import * as THREE from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0.0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uAspect: { value: 1.0 },
    uStrength: { value: 0.0 },
    uFrequency: { value: 5.5 },
    uSpeed: { value: 3.2 },
    uRadius: { value: 0.48 },
    uClickRipple: { value: new THREE.Vector4(0.5, 0.5, 0.0, 0.0) },
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
    uniform vec2 uMouse;
    uniform float uAspect;
    uniform float uStrength;
    uniform float uFrequency;
    uniform float uSpeed;
    uniform float uRadius;
    uniform vec4 uClickRipple; // xy: position, z: age, w: intensity

    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 totalWarp = vec2(0.0);

      // ==============================================================
      // 1. VERTEX3D EXACT CHROMATIC S-CURVE JELLY RIPPLE
      // ==============================================================
      if (uStrength > 0.0004) {
        vec2 dir = uv - uMouse;
        dir.x *= uAspect;
        float dist = length(dir);

        // Broad wave (frequency ~5.5 creates the broad S-curve bend across scene)
        float wave = sin(dist * uFrequency - uTime * uSpeed);

        // Diagonal swirl twist (creates the characteristic lateral S-shear)
        float twist = cos(dist * 9.0 - uTime * 2.2) * 0.55;

        // Smooth falloff mask around cursor wake
        float mask = 1.0 - smoothstep(0.0, uRadius, dist);

        // Direction vectors with perpendicular twist
        vec2 normDir = dir / max(dist, 0.001);
        vec2 twistVec = vec2(-normDir.y, normDir.x) * twist;

        // Fluid displacement
        vec2 warp = (normDir + twistVec) * wave * uStrength * mask;
        warp.x /= max(uAspect, 0.001); // restore UV coordinates

        totalWarp += warp;
      }

      // ==============================================================
      // 2. EXPANDING CLICK IMPULSE RIPPLE
      // ==============================================================
      if (uClickRipple.w > 0.005) {
        vec2 cDir = uv - uClickRipple.xy;
        cDir.x *= uAspect;
        float cDist = length(cDir);
        float ringRadius = uClickRipple.z * 0.75;
        float ringDist = abs(cDist - ringRadius);
        float ringMask = exp(-ringDist * 12.0) * exp(-cDist * 2.2) * uClickRipple.w;
        float ringWave = sin((cDist - ringRadius) * 24.0) * ringMask;
        vec2 cNormDir = cDir / max(cDist, 0.001);
        vec2 cWarp = cNormDir * ringWave * 0.025;
        cWarp.x /= max(uAspect, 0.001);
        totalWarp += cWarp;
      }

      // ==============================================================
      // 3. CHROMATIC DISPERSION (RGB SPLIT FOR "WET" REFRACTION)
      // ==============================================================
      float totalIntensity = length(totalWarp);
      float wetMask = smoothstep(0.0, 0.015, totalIntensity);

      vec2 offsetR = totalWarp;
      vec2 offsetG = totalWarp * 1.75 + vec2(0.0035 * wetMask, 0.0);
      vec2 offsetB = totalWarp * 2.70 + vec2(0.0, 0.0035 * wetMask);

      float r = texture2D(tDiffuse, clamp(uv + offsetR, 0.0, 1.0)).r;
      float g = texture2D(tDiffuse, clamp(uv + offsetG, 0.0, 1.0)).g;
      float b = texture2D(tDiffuse, clamp(uv + offsetB, 0.0, 1.0)).b;
      vec3 color = vec3(r, g, b);

      // ==============================================================
      // 4. SUBTLE 24 FPS FILM GRAIN
      // ==============================================================
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(uv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.022;

      // ==============================================================
      // 5. CINEMATIC VIGNETTE
      // ==============================================================
      vec2 centerDiff = uv - vec2(0.5);
      float distCenter = length(centerDiff);
      float vignette = smoothstep(1.3, 0.45, distCenter);
      color *= (0.82 + 0.18 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export class CinematicPostPass {
  public pass: ShaderPass;
  private targetMouse = new THREE.Vector2(0.5, 0.5);
  private simMouse = new THREE.Vector2(0.5, 0.5);
  private prevMouse = new THREE.Vector2(0.5, 0.5);
  private currentStrength = 0.0;
  private targetStrength = 0.0;
  private clickRipple = new THREE.Vector4(0.5, 0.5, 0.0, 0.0);

  constructor(width: number, height: number) {
    this.pass = new ShaderPass(CinematicShader);
    this.updateSize(width, height);
  }

  public updateSize(width: number, height: number): void {
    const aspect = width / Math.max(1, height);
    if (this.pass.uniforms.uAspect) {
      this.pass.uniforms.uAspect.value = aspect;
    }
  }

  public addCursorMovement(normX: number, normY: number, _now: number): void {
    const dx = normX - this.prevMouse.x;
    const dy = normY - this.prevMouse.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    this.targetMouse.set(normX, normY);
    this.prevMouse.set(normX, normY);

    if (speed > 0.0004) {
      // Ramp up strength proportional to cursor speed
      const boost = Math.min(0.042, 0.016 + speed * 0.45);
      this.targetStrength = Math.max(this.targetStrength, boost);
    }
  }

  public spawnRipple(x: number, y: number, intensity = 1.0): void {
    this.clickRipple.set(x, y, 0.0, intensity);
    this.targetStrength = Math.max(this.targetStrength, 0.045);
    this.currentStrength = Math.max(this.currentStrength, 0.035);
  }

  public update(delta: number, elapsed: number): void {
    this.pass.uniforms.uTime.value = elapsed;

    // Fluid inertia mouse tracking (0.07 ease lag leaves a long, silky trailing wake)
    this.simMouse.lerp(this.targetMouse, 0.07);
    this.pass.uniforms.uMouse.value.copy(this.simMouse);

    // Extended fluid decay (smooth ~2.5-3.0 second linger before calming)
    this.currentStrength = THREE.MathUtils.lerp(this.currentStrength, this.targetStrength, 0.09);
    this.targetStrength *= Math.exp(-delta * 0.95);
    this.pass.uniforms.uStrength.value = this.currentStrength;

    // Update click ripple expansion and slow fade
    if (this.clickRipple.w > 0.001) {
      this.clickRipple.z += delta * 0.75; // expand gracefully
      this.clickRipple.w *= Math.exp(-delta * 0.95); // linger
      this.pass.uniforms.uClickRipple.value.copy(this.clickRipple);
    }
  }
}
