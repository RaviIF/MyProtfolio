import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { StudioSceneOptions } from "./types";
import { createStudioEnvironment, StudioEnvironment } from "./StudioObjects";
import { CameraController } from "./CameraController";

export class StudioScene {
  private container: HTMLElement | null = null;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public cameraController: CameraController;
  public renderer: THREE.WebGLRenderer | null = null;
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private environment: StudioEnvironment | null = null;

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
    this.scene.fog = new THREE.FogExp2(0x07080d, 0.05);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0, 1.4, 3.2);

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
      this.renderer.toneMappingExposure = 1.15;
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

      // 3. Lighting Rig
      this.setupLighting();

      // 4. Studio Environment & Stations
      this.environment = createStudioEnvironment();
      this.scene.add(this.environment.group);

      // 5. Post-processing Bloom
      this.setupPostProcessing(width, height);

      // 6. Notify loaded
      if (options?.onLoaded) {
        options.onLoaded();
      }

      // 6. Start Loop
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
    // Ambient fill
    const ambientLight = new THREE.AmbientLight(0x0c1328, 0.9);
    this.scene.add(ambientLight);

    // Directional Key Light (cool tech cyan/white)
    const keyLight = new THREE.DirectionalLight(0xd8f8ff, 1.4);
    keyLight.position.set(5, 8, 4);
    this.scene.add(keyLight);

    // Cyan station accent
    const cyanPoint = new THREE.PointLight(0x22d3ee, 2.8, 16);
    cyanPoint.position.set(-1.5, 2.2, 0.5);
    this.scene.add(cyanPoint);

    // Indigo / Violet accent
    const violetPoint = new THREE.PointLight(0x818cf8, 2.5, 16);
    violetPoint.position.set(2.2, 2.5, -1.0);
    this.scene.add(violetPoint);

    // Surgical medical emerald accent
    const medicalPoint = new THREE.PointLight(0x10b981, 1.8, 12);
    medicalPoint.position.set(-2.2, 1.8, -2.5);
    this.scene.add(medicalPoint);
  }

  private setupPostProcessing(width: number, height: number): void {
    if (!this.renderer) return;

    try {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      // UnrealBloomPass for emissive monitors & holograms
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        0.5,   // strength
        0.35,  // radius
        0.75   // threshold
      );
      this.composer.addPass(this.bloomPass);
    } catch (e) {
      console.warn("Postprocessing bloom unsupported, using standard renderer.", e);
      this.composer = null;
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

      // Update 3D environment props (rotating holograms, pulsing LEDs, dust)
      if (this.environment) {
        this.environment.update(delta, elapsedTime);
      }

      // Trigger custom tick hooks (e.g. camera, floating holograms)
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

  public setScrollProgress(progress: number): void {
    this.scrollProgress = progress;
  }

  public setMouseOffset(normalizedX: number, normalizedY: number): void {
    this.cameraController.setMouseOffset(normalizedX, normalizedY);
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

    this.environment = null;
    this.scene.clear();
  }
}
