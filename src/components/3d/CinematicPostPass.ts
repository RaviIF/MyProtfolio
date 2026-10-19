import * as THREE from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
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

    varying vec2 vUv;

    void main() {
      vec4 sceneColor = texture2D(tDiffuse, vUv);
      vec3 color = sceneColor.rgb;

      vec2 centerDiff = vUv - vec2(0.5);
      float distCenter = length(centerDiff);

      // 1. Subtle 24 FPS Film Grain (Tactile cinema texture, zero banding)
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(vUv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.028;

      // 2. Cinematic Vignette (Darkened perimeter focusing eye on 3D depth and content)
      float vignette = smoothstep(1.3, 0.45, distCenter);
      color *= (0.78 + 0.22 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export class CinematicPostPass {
  public pass: ShaderPass;

  constructor(width: number, height: number) {
    this.pass = new ShaderPass(CinematicShader);
    this.updateSize(width, height);
  }

  public updateSize(_width: number, _height: number): void {
    // No-op for aspect since 2D warping is replaced by 3D particle physics
  }

  public addCursorMovement(_normX: number, _normY: number, _now: number): void {
    // Handled in 3D world space by CyberpunkObjects InteractiveParticleField
  }

  public spawnRipple(_x: number, _y: number, _intensity = 1.0): void {
    // Handled in 3D world space
  }

  public update(_delta: number, elapsed: number): void {
    this.pass.uniforms.uTime.value = elapsed;
  }
}
