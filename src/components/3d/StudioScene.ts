import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { CinematicPostPass } from "./CinematicPostPass";
import { StudioSceneOptions } from "./types";
import { createMetropolisEnvironment, MetropolisEnvironment } from "./MetropolisObjects";
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
  private environment: MetropolisEnvironment | null = null;

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
    this.scene.fog = new THREE.FogExp2(0x060812, 0.038);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0.0, 14.0, 18.0);

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

      // 3. Lighting Rig (Hybrid Twilight)
      this.setupLighting();

      // 4. Procedural Neo-Brutalist Metropolis Environment
      this.environment = createMetropolisEnvironment();
      this.scene.add(this.environment.group);

      // 5. Post-processing Bloom & Cinematic Lens
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
    // 1. Twilight Ambient Fill
    const ambientLight = new THREE.AmbientLight(0x0b1120, 1.1);
    this.scene.add(ambientLight);

    // 2. Key Sun Light (Warm 3500K Golden Sunbeam Source)
    const sunLight = new THREE.DirectionalLight(0xf59e0b, 2.2);
    sunLight.position.set(8, 16, 10);
    this.scene.add(sunLight);

    // 3. Cyan Rim Accent Light (Metropolis Blueprint Edges)
    const cyanRim = new THREE.DirectionalLight(0x22d3ee, 1.8);
    cyanRim.position.set(-6, 8, -4);
    this.scene.add(cyanRim);

    // 4. Amber Ground Bounce Accent
    const amberAccent = new THREE.PointLight(0xfbbf24, 1.4, 25);
    amberAccent.position.set(6, 4, -8);
    this.scene.add(amberAccent);
  }

  private setupPostProcessing(width: number, height: number): void {
    if (!this.renderer) return;

    try {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      // 1. UnrealBloomPass for emissive monitors & holograms
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        0.5,   // strength
        0.35,  // radius
        0.75   // threshold
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

      // Update Neo-Brutalist Metropolis Environment (god rays, motes, and blueprints)
      if (this.environment) {
        this.environment.update(delta, elapsedTime, this.mouseNormX, this.mouseNormY);
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
