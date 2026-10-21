import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { CinematicPostPass } from "./CinematicPostPass";
import { StudioSceneOptions } from "./types";
import { createCyberpunkEnvironment, CyberpunkEnvironment } from "./CyberpunkObjects";
import { CameraController } from "./CameraController";

export class StudioScene {
  private container: HTMLElement | null = null;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public cameraController: CameraController;
  public renderer: THREE.WebGLRenderer | null = null;
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private cinematicPass: CinematicPostPass | null = null;
  private environment: CyberpunkEnvironment | null = null;

  public activeStationId = "home";
  private cursorU = 0.5;
  private cursorV = 0.5;
  private mouseNormX = 0;
  private mouseNormY = 0;

  private animationFrameId: number | null = null;
  private isDestroyed = false;
  private isIdle = false;
  private scrollProgress = 0;
  private lastTime = 0;
  private clock: THREE.Clock;

  // External update hooks
  public onTick?: (delta: number, elapsedTime: number) => void;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x04060d, 0.035);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0.2, 2.7, 7.8);

    this.cameraController = new CameraController(this.camera);
    this.clock = new THREE.Clock();
  }

  public init(container: HTMLElement, options?: StudioSceneOptions): boolean {
    this.container = container;
    this.isDestroyed = false;

    try {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      // 1. Renderer Setup
      this.renderer = new THREE.WebGLRenderer({
        powerPreference: "high-performance",
        antialias: true,
        alpha: true,
        stencil: false,
        depth: true,
      });

      this.renderer.setSize(width, height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      this.renderer.setPixelRatio(dpr);
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.2;
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;

      // Ensure canvas fills container
      this.renderer.domElement.style.width = "100%";
      this.renderer.domElement.style.height = "100%";
      this.renderer.domElement.style.display = "block";
      this.renderer.domElement.style.position = "absolute";
      this.renderer.domElement.style.top = "0";
      this.renderer.domElement.style.left = "0";

      container.appendChild(this.renderer.domElement);

      // 2. Camera Setup
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      // 3. Lighting Rig (Cyberpunk Neon Alley)
      this.setupLighting();

      // 4. Procedural Cyberpunk Neon Environment (Samsy style)
      this.environment = createCyberpunkEnvironment();
      this.scene.add(this.environment.group);

      // 5. Post-processing Bloom & Cinematic Fluid Pass
      this.setupPostProcessing(width, height);

      // 6. Notify loaded
      if (options?.onLoaded) {
        options.onLoaded();
      }

      // 7. Start Loop
      this.startRenderLoop();
      return true;
    } catch (err) {
      console.warn("StudioScene: WebGL initialization failed, fallback enabled.", err);
      if (options?.onError && err instanceof Error) {
        options.onError(err);
      }
      return false;
    }
  }

  private setupLighting(): void {
    // 1. Dark Cyber Indigo Ambient Fill
    const ambientLight = new THREE.AmbientLight(0x070b18, 0.85);
    this.scene.add(ambientLight);

    // 2. Magenta Neon Key Light (Left Building Face)
    const magentaLight = new THREE.PointLight(0xff007f, 2.6, 25);
    magentaLight.position.set(-4.5, 4.5, 0.0);
    this.scene.add(magentaLight);

    // 3. Cyan Neon Key Light (Right Building Face)
    const cyanLight = new THREE.PointLight(0x00f0ff, 2.8, 25);
    cyanLight.position.set(4.5, 5.0, -4.0);
    this.scene.add(cyanLight);

    // 4. Amber Ground Bounce
    const amberLight = new THREE.PointLight(0xffb700, 1.6, 20);
    amberLight.position.set(0.0, 1.0, 2.0);
    this.scene.add(amberLight);

    // 5. Deep Violet Backlight
    const violetLight = new THREE.PointLight(0x7c3aed, 2.2, 35);
    violetLight.position.set(0.0, 7.0, -25.0);
    this.scene.add(violetLight);
  }

  private setupPostProcessing(width: number, height: number): void {
    if (!this.renderer) return;

    try {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      // 1. UnrealBloomPass for glowing neon signs and street reflections
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        0.75,  // strength
        0.42,  // radius
        0.70   // threshold
      );
      this.composer.addPass(this.bloomPass);

      // 2. Vertex3D-Style Cinematic Pass: Fluid mouse ripple + chromatic aberration + 24fps film grain + lens vignette
      this.cinematicPass = new CinematicPostPass(width, height);
      this.composer.addPass(this.cinematicPass.pass);
    } catch (e) {
      console.warn("Postprocessing bloom unsupported, using standard renderer.", e);
      this.composer = null;
      this.cinematicPass = null;
    }
  }

  public resize(): void {
    if (!this.container || !this.renderer) return;

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    if (this.composer) {
      this.composer.setSize(width, height);
    }
    if (this.cinematicPass) {
      this.cinematicPass.updateSize(width, height);
    }
  }

  public setIdle(isIdle: boolean): void {
    this.isIdle = isIdle;
  }

  private startRenderLoop(): void {
    const animate = (time: number) => {
      if (this.isDestroyed) return;

      this.animationFrameId = requestAnimationFrame(animate);

      // Battery saver throttling: throttle to ~15fps when idle
      if (this.isIdle) {
        if (time - this.lastTime < 66) { // ~15fps
          return;
        }
      }
      this.lastTime = time;

      const delta = this.clock.getDelta();
      const elapsedTime = this.clock.getElapsedTime();

      // Update camera along scroll spline + mouse parallax
      this.cameraController.update(this.scrollProgress, delta);

      // Update Cyberpunk Environment (3D interactive particle force field, motes, and neon flicker)
      if (this.environment) {
        this.environment.update(delta, elapsedTime, this.mouseNormX, this.mouseNormY, this.camera);
      }

      // Update fluid ripple simulation, grain, and chromatic aberration
      if (this.cinematicPass) {
        this.cinematicPass.update(delta, elapsedTime);
      }

      // Trigger custom tick hooks
      if (this.onTick) {
        this.onTick(delta, elapsedTime);
      }

      // Render frame
      if (this.composer) {
        this.composer.render();
      } else if (this.renderer) {
        this.renderer.render(this.scene, this.camera);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  public setActiveStation(stationId: string): void {
    this.activeStationId = stationId;
  }

  public setScrollProgress(progress: number): void {
    this.scrollProgress = progress;
  }

  public setMouseOffset(normalizedX: number, normalizedY: number): void {
    this.mouseNormX = normalizedX;
    this.mouseNormY = normalizedY;
    this.cameraController.setMouseOffset(normalizedX, normalizedY);
  }

  public onCursorMove(uvX: number, uvY: number, now: number): void {
    this.cursorU = uvX;
    this.cursorV = uvY;
    if (this.cinematicPass) {
      this.cinematicPass.addCursorMovement(uvX, uvY, now);
    }
  }

  public onCursorClick(uvX: number, uvY: number): void {
    if (this.cinematicPass) {
      this.cinematicPass.spawnRipple(uvX, uvY, 1.0);
    }
  }

  public destroy(): void {
    this.isDestroyed = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      this.renderer.dispose();
      this.renderer = null;
    }

    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }

    if (this.environment) {
      this.environment.dispose();
      this.environment = null;
    }

    // Traverse and clean geometries / materials
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((mat) => mat.dispose());
        } else if (obj.material) {
          obj.material.dispose();
        }
      }
    });

    this.scene.clear();
  }
}
