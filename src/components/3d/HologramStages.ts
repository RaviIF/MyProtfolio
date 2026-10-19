import * as THREE from "three";
import { ShaderViewportMode, StageUpdateParams } from "./types";

/**
 * Creates dynamic canvas texture for monospace technical text callouts.
 */
function createTelemetryTexture(text: string, subtext: string, color = "#22d3ee"): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 384;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(6, 9, 16, 0.85)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

  // Corner brackets
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 8, 8);
  ctx.fillRect(canvas.width - 8, 0, 8, 8);
  ctx.fillRect(0, canvas.height - 8, 8, 8);
  ctx.fillRect(canvas.width - 8, canvas.height - 8, 8, 8);

  ctx.font = "bold 20px monospace";
  ctx.fillStyle = color;
  ctx.fillText(text, 16, 44);

  ctx.font = "14px monospace";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText(subtext, 16, 82);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Custom GLSL Shader for SmartScopy Surgical Laser Scan Cross-Section Slicing
 */
const SmartScopyLaserShader = {
  uniforms: {
    uScanHeight: { value: 0.0 }, // World Y cutting plane
    uLaserColor: { value: new THREE.Color(0x22d3ee) },
    uBoneColor: { value: new THREE.Color(0xd8f8ff) },
    uFresnelColor: { value: new THREE.Color(0x06b6d4) },
    uTime: { value: 0 },
    uOpacity: { value: 1.0 },
    uViewportMode: { value: 0 }, // 0: Lit, 1: Wireframe, 2: X-Ray
  },
  vertexShader: /* glsl */ `
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uScanHeight;
    uniform vec3 uLaserColor;
    uniform vec3 uBoneColor;
    uniform vec3 uFresnelColor;
    uniform float uTime;
    uniform float uOpacity;
    uniform int uViewportMode;

    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      // Normal visualization for X-Ray / Normals mode
      if (uViewportMode == 2) {
        vec3 normColor = vNormal * 0.5 + 0.5;
        gl_FragColor = vec4(normColor, uOpacity * 0.9);
        return;
      }

      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.8);

      float distToCut = vWorldPosition.y - uScanHeight;
      float laserBand = smoothstep(0.06, 0.0, abs(distToCut));

      vec3 finalColor;
      float alpha = uOpacity;

      if (distToCut > 0.0) {
        // Above cut plane: Holographic Wireframe Grid
        float grid = sin(vWorldPosition.x * 35.0) * sin(vWorldPosition.z * 35.0);
        float lattice = step(0.65, grid);
        finalColor = mix(vec3(0.02, 0.1, 0.18), uFresnelColor, lattice * 0.7 + fresnel * 0.8);
        alpha *= 0.35 + lattice * 0.45;
      } else {
        // Below cut plane: Solid Bone Structure with Medical Hologram Fresnel
        vec3 base = uBoneColor * (0.35 + 0.65 * max(0.0, dot(vNormal, vec3(0.3, 0.8, 0.5))));
        finalColor = mix(base, uFresnelColor, fresnel * 0.7);
        alpha *= 0.88;
      }

      // Add high-intensity surgical laser cross-section line
      if (laserBand > 0.0) {
        finalColor += uLaserColor * laserBand * 3.2;
        alpha = max(alpha, laserBand * uOpacity);
      }

      gl_FragColor = vec4(finalColor, alpha);
    }
  `,
};

export class HologramStages {
  public group: THREE.Group;

  // 4 Flagship Stage Groups
  private stageSmartScopy: THREE.Group;
  private stageMimadim: THREE.Group;
  private stageNoPainHeals: THREE.Group;
  private stageMotionAI: THREE.Group;

  // SmartScopy references
  private laserMaterial: THREE.ShaderMaterial;
  private skullMesh: THREE.Group;
  private laserDisc: THREE.Mesh;

  // Mimadim references
  private cadWalls: THREE.Mesh[];
  private targetWallHeight = 1.0;
  private currentWallHeight = 0.0;

  // NoPainHeals references
  private floorMaterial: THREE.ShaderMaterial;
  private kioskCabinet: THREE.Group;

  // Motion AI references
  private skeletonRig: THREE.Group;
  private headJoint: THREE.Mesh;
  private handJoint: THREE.Mesh;
  private trackingHUD: THREE.Mesh;

  // Morph Lerping State
  private currentStageWeights = {
    smartscopy: 0,
    mimadim: 0,
    nopainheals: 0,
    visionAi: 0,
  };

  private currentViewportMode: ShaderViewportMode = "lit";

  constructor() {
    this.group = new THREE.Group();

    // 1. Build Stage 02: SmartScopy (Medical XR & Laser Scan)
    const smartScopyResult = this.createSmartScopyStage();
    this.stageSmartScopy = smartScopyResult.group;
    this.laserMaterial = smartScopyResult.material;
    this.skullMesh = smartScopyResult.skull;
    this.laserDisc = smartScopyResult.laserDisc;
    this.group.add(this.stageSmartScopy);

    // 2. Build Stage 03: MimadimPlus (CAD-to-3D Extrusion)
    const mimadimResult = this.createMimadimStage();
    this.stageMimadim = mimadimResult.group;
    this.cadWalls = mimadimResult.walls;
    this.group.add(this.stageMimadim);

    // 3. Build Stage 04: NoPainHeals (Sensor Floor & Kiosk)
    const noPainResult = this.createNoPainHealsStage();
    this.stageNoPainHeals = noPainResult.group;
    this.floorMaterial = noPainResult.floorMaterial;
    this.kioskCabinet = noPainResult.kiosk;
    this.group.add(this.stageNoPainHeals);

    // 4. Build Stage 05: Motion AI & Vision Games (3D Skeletal Rig)
    const motionResult = this.createMotionAIStage();
    this.stageMotionAI = motionResult.group;
    this.skeletonRig = motionResult.rig;
    this.headJoint = motionResult.head;
    this.handJoint = motionResult.hand;
    this.trackingHUD = motionResult.hud;
    this.group.add(this.stageMotionAI);
  }

  // =========================================================================
  // STAGE 1: SMARTSCOPY SURGICAL XR (Live Anatomical Laser Scan)
  // =========================================================================
  private createSmartScopyStage() {
    const group = new THREE.Group();
    group.position.set(-2.2, 0.4, -2.5);

    const material = new THREE.ShaderMaterial({
      vertexShader: SmartScopyLaserShader.vertexShader,
      fragmentShader: SmartScopyLaserShader.fragmentShader,
      uniforms: THREE.UniformsUtils.clone(SmartScopyLaserShader.uniforms),
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const skull = new THREE.Group();

    // Cranium vault
    const craniumGeo = new THREE.SphereGeometry(0.55, 32, 24);
    craniumGeo.scale(1.0, 1.15, 1.25);
    const craniumMesh = new THREE.Mesh(craniumGeo, material);
    craniumMesh.position.y = 1.2;
    skull.add(craniumMesh);

    // Facial bone structure
    const faceGeo = new THREE.ConeGeometry(0.42, 0.58, 24);
    faceGeo.scale(0.85, 1.0, 0.9);
    const faceMesh = new THREE.Mesh(faceGeo, material);
    faceMesh.rotation.x = Math.PI;
    faceMesh.position.set(0, 0.88, 0.22);
    skull.add(faceMesh);

    // Mandible jaw
    const jawGeo = new THREE.TorusGeometry(0.28, 0.08, 16, 24, Math.PI);
    const jawMesh = new THREE.Mesh(jawGeo, material);
    jawMesh.rotation.x = Math.PI / 2;
    jawMesh.position.set(0, 0.55, 0.22);
    skull.add(jawMesh);

    // Cervical vertebrae column segments
    for (let c = 0; c < 5; c++) {
      const vertGeo = new THREE.CylinderGeometry(0.12 - c * 0.01, 0.14 - c * 0.01, 0.08, 16);
      const vertMesh = new THREE.Mesh(vertGeo, material);
      vertMesh.position.set(0, 0.42 - c * 0.1, -0.05);
      skull.add(vertMesh);
    }

    group.add(skull);

    // Horizontal Surgical Cutting Disc (glow plane indicator)
    const discGeo = new THREE.RingGeometry(0.05, 0.95, 32);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const laserDisc = new THREE.Mesh(discGeo, discMat);
    laserDisc.rotation.x = -Math.PI / 2;
    laserDisc.position.y = 1.0;
    group.add(laserDisc);

    // Telemetry label
    const labelTex = createTelemetryTexture("SMARTSCOPY // XR SCAN", "SUB-100MS OT PIPELINE", "#22d3ee");
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, side: THREE.DoubleSide });
    const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.4), labelMat);
    labelMesh.position.set(0, 2.1, 0);
    group.add(labelMesh);

    return { group, material, skull, laserDisc };
  }

  // =========================================================================
  // STAGE 2: MIMADIMPLUS (Procedural CAD-to-3D Extrusion)
  // =========================================================================
  private createMimadimStage() {
    const group = new THREE.Group();
    group.position.set(2.4, 0.1, -0.8);

    // Blueprint floor with dimension grid
    const floorGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const floorMat = new THREE.MeshBasicMaterial({
      color: 0x0a1224,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    group.add(floorMesh);

    // Blueprint cyan wire lines
    const gridHelper = new THREE.GridHelper(3.6, 12, 0x38bdf8, 0x1e3a8a);
    gridHelper.position.y = 0.01;
    group.add(gridHelper);

    // Procedural CAD wall blocks
    const walls: THREE.Mesh[] = [];
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x0e1a33,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      metalness: 0.7,
      roughness: 0.3,
      transparent: true,
      opacity: 0.85,
    });

    const wallConfigs = [
      { w: 3.2, h: 1.0, d: 0.08, x: 0, z: -1.5 },     // North wall
      { w: 3.2, h: 1.0, d: 0.08, x: 0, z: 1.5 },      // South wall
      { w: 0.08, h: 1.0, d: 3.0, x: -1.55, z: 0 },    // West wall
      { w: 0.08, h: 1.0, d: 3.0, x: 1.55, z: 0 },     // East wall
      { w: 1.8, h: 1.0, d: 0.08, x: -0.6, z: 0 },     // Interior partition
      { w: 0.08, h: 1.0, d: 1.4, x: 0.3, z: 0.7 },    // Room divider
    ];

    wallConfigs.forEach((cfg) => {
      const geo = new THREE.BoxGeometry(cfg.w, cfg.h, cfg.d);
      // Anchor geometry at bottom so scaling Y extrudes upwards
      geo.translate(0, cfg.h / 2, 0);
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.set(cfg.x, 0, cfg.z);
      mesh.scale.set(1, 0.01, 1); // starts flat
      walls.push(mesh);
      group.add(mesh);
    });

    // Telemetry label
    const labelTex = createTelemetryTexture("MIMADIMPLUS // CAD ENGINE", "PROCEDURAL DXF-TO-3D", "#38bdf8");
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, side: THREE.DoubleSide });
    const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.4), labelMat);
    labelMesh.position.set(0, 1.8, 0);
    group.add(labelMesh);

    return { group, walls };
  }

  // =========================================================================
  // STAGE 3: NOPAINHEALS (Interactive Floor Sensors & Rehabilitation Kiosk)
  // =========================================================================
  private createNoPainHealsStage() {
    const group = new THREE.Group();
    group.position.set(-1.6, 0.05, 1.8);

    // Interactive Floor Shader with concentric pressure wave rings
    const floorShader = {
      uniforms: {
        uCenter: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
        uIntensity: { value: 0.0 },
        uColor: { value: new THREE.Color(0x10b981) },
        uOpacity: { value: 1.0 },
        uViewportMode: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec2 uCenter;
        uniform float uTime;
        uniform float uIntensity;
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform int uViewportMode;
        varying vec2 vUv;

        void main() {
          if (uViewportMode == 2) {
            gl_FragColor = vec4(0.1, 0.8, 0.5, uOpacity * 0.8);
            return;
          }

          float dist = distance(vUv, uCenter);
          // Concentric sensor shockwave rings
          float wave = sin(dist * 38.0 - uTime * 6.0) * 0.5 + 0.5;
          float ringFalloff = exp(-dist * 4.2);
          float sensorGrid = step(0.92, fract(vUv.x * 24.0)) + step(0.92, fract(vUv.y * 24.0));

          vec3 baseColor = vec3(0.04, 0.09, 0.12);
          vec3 activeColor = uColor * (wave * ringFalloff * (0.8 + uIntensity * 1.5) + sensorGrid * 0.25);
          float alpha = (0.35 + ringFalloff * 0.55 + sensorGrid * 0.2) * uOpacity;

          gl_FragColor = vec4(baseColor + activeColor, alpha);
        }
      `,
    };

    const floorMaterial = new THREE.ShaderMaterial({
      vertexShader: floorShader.vertexShader,
      fragmentShader: floorShader.fragmentShader,
      uniforms: THREE.UniformsUtils.clone(floorShader.uniforms),
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const floorGeo = new THREE.PlaneGeometry(3.2, 3.2, 32, 32);
    const floorMesh = new THREE.Mesh(floorGeo, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2;
    group.add(floorMesh);

    // Kiosk Cabinet Geometry
    const kiosk = new THREE.Group();
    const kioskBodyGeo = new THREE.BoxGeometry(0.7, 1.8, 0.5);
    const kioskBodyMat = new THREE.MeshStandardMaterial({ color: 0x0a101d, metalness: 0.8, roughness: 0.2 });
    const kioskBody = new THREE.Mesh(kioskBodyGeo, kioskBodyMat);
    kioskBody.position.set(0, 0.9, -1.2);
    kiosk.add(kioskBody);

    // Kiosk Screen
    const screenGeo = new THREE.PlaneGeometry(0.55, 0.42);
    const screenTex = createTelemetryTexture("NOPAINHEALS", "12+ FLOOR GAMES // E2EE", "#10b981");
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTex, side: THREE.DoubleSide });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.25, -0.94);
    kiosk.add(screenMesh);

    group.add(kiosk);

    return { group, floorMaterial, kiosk };
  }

  // =========================================================================
  // STAGE 4: MOTION AI & COMPUTER VISION (3D Biomechanical Rig)
  // =========================================================================
  private createMotionAIStage() {
    const group = new THREE.Group();
    group.position.set(1.8, 0.5, 2.2);

    const rig = new THREE.Group();
    const jointMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0xa855f7,
      emissiveIntensity: 0.7,
      metalness: 0.5,
      roughness: 0.2,
    });

    const boneMat = new THREE.LineBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.75 });

    // Head Joint
    const headGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const head = new THREE.Mesh(headGeo, jointMat);
    head.position.set(0, 1.6, 0);
    rig.add(head);

    // Torso & Spine joints
    const spinePositions = [
      new THREE.Vector3(0, 1.35, 0), // neck
      new THREE.Vector3(0, 1.1, 0),  // mid spine
      new THREE.Vector3(0, 0.8, 0),  // pelvis
    ];

    spinePositions.forEach((pos) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), jointMat);
      mesh.position.copy(pos);
      rig.add(mesh);
    });

    // Arms
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), jointMat);
    hand.position.set(0.65, 1.1, 0.2);
    rig.add(hand);

    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), jointMat);
    leftHand.position.set(-0.65, 1.0, 0);
    rig.add(leftHand);

    // Bones (Lines)
    const points = [
      new THREE.Vector3(0, 1.6, 0),
      new THREE.Vector3(0, 1.35, 0),
      new THREE.Vector3(0, 0.8, 0),
      new THREE.Vector3(0.65, 1.1, 0.2),
      new THREE.Vector3(0, 1.35, 0),
      new THREE.Vector3(-0.65, 1.0, 0),
    ];
    const boneGeo = new THREE.BufferGeometry().setFromPoints(points);
    const boneLines = new THREE.LineSegments(boneGeo, boneMat);
    rig.add(boneLines);

    group.add(rig);

    // Orbiting 3D HUD Bounding Box
    const hudGeo = new THREE.BoxGeometry(1.6, 1.9, 0.8);
    const hudEdges = new THREE.EdgesGeometry(hudGeo);
    const hudMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.45 });
    const hud = new THREE.LineSegments(hudEdges, hudMat) as unknown as THREE.Mesh;
    hud.position.set(0, 1.0, 0);
    group.add(hud);

    // Telemetry badge
    const labelTex = createTelemetryTexture("YOLOv8 // POSE TRACKING", "DIRECTSHOW 60FPS // 12MS", "#c084fc");
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, side: THREE.DoubleSide });
    const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.4), labelMat);
    labelMesh.position.set(0, 2.2, 0);
    group.add(labelMesh);

    return { group, rig, head, hand, hud };
  }

  // =========================================================================
  // UPDATE LOOP & STAGE MORPHING CONTROLLER
  // =========================================================================
  public update(params: StageUpdateParams): void {
    const { activeStationId, delta, elapsed, mouseNormX, mouseNormY, cursorU, cursorV } = params;

    // Target weights for each stage based on active station
    const targetWeights = {
      smartscopy: activeStationId === "smartscopy" ? 1 : 0,
      mimadim: activeStationId === "mimadim" ? 1 : 0,
      nopainheals: activeStationId === "nopainheals" ? 1 : 0,
      visionAi: activeStationId === "vision-ai" ? 1 : 0,
    };

    // Lerp weights for smooth cross-fading
    const lerpSpeed = Math.min(1.0, delta * 4.5);
    this.currentStageWeights.smartscopy += (targetWeights.smartscopy - this.currentStageWeights.smartscopy) * lerpSpeed;
    this.currentStageWeights.mimadim += (targetWeights.mimadim - this.currentStageWeights.mimadim) * lerpSpeed;
    this.currentStageWeights.nopainheals += (targetWeights.nopainheals - this.currentStageWeights.nopainheals) * lerpSpeed;
    this.currentStageWeights.visionAi += (targetWeights.visionAi - this.currentStageWeights.visionAi) * lerpSpeed;

    // 1. Update SmartScopy (Laser slicing follows cursor Y)
    const wSmart = this.currentStageWeights.smartscopy;
    this.stageSmartScopy.visible = wSmart > 0.01;
    if (this.stageSmartScopy.visible) {
      const scale = 0.85 + wSmart * 0.15;
      this.stageSmartScopy.scale.setScalar(scale);

      // Map cursorV (0 to 1) to skull height range (0.4 to 1.6 in world Y)
      const targetScanY = 0.4 + cursorV * 1.35;
      this.laserMaterial.uniforms.uScanHeight.value = targetScanY;
      this.laserMaterial.uniforms.uTime.value = elapsed;
      this.laserMaterial.uniforms.uOpacity.value = wSmart;
      this.laserDisc.position.y = targetScanY;
      this.laserDisc.rotation.z = elapsed * 0.5;

      this.skullMesh.rotation.y = elapsed * 0.4 + mouseNormX * 0.35;
    }

    // 2. Update MimadimPlus (Extrude walls upwards on active)
    const wMim = this.currentStageWeights.mimadim;
    this.stageMimadim.visible = wMim > 0.01;
    if (this.stageMimadim.visible) {
      const scale = 0.85 + wMim * 0.15;
      this.stageMimadim.scale.setScalar(scale);

      this.currentWallHeight += (this.targetWallHeight * wMim - this.currentWallHeight) * lerpSpeed;
      const wallH = Math.max(0.01, this.currentWallHeight);
      this.cadWalls.forEach((w) => {
        w.scale.y = wallH;
      });

      this.stageMimadim.rotation.y = -elapsed * 0.15 + mouseNormX * 0.2;
    }

    // 3. Update NoPainHeals (Interactive sensor floor wave rings)
    const wNoPain = this.currentStageWeights.nopainheals;
    this.stageNoPainHeals.visible = wNoPain > 0.01;
    if (this.stageNoPainHeals.visible) {
      const scale = 0.85 + wNoPain * 0.15;
      this.stageNoPainHeals.scale.setScalar(scale);

      this.floorMaterial.uniforms.uTime.value = elapsed;
      this.floorMaterial.uniforms.uOpacity.value = wNoPain;
      this.floorMaterial.uniforms.uCenter.value.set(cursorU, cursorV);
      this.floorMaterial.uniforms.uIntensity.value = Math.abs(mouseNormX) + Math.abs(mouseNormY);

      if (this.kioskCabinet) {
        this.kioskCabinet.rotation.y = Math.sin(elapsed * 1.2) * 0.08 + mouseNormX * 0.15;
      }
    }

    // 4. Update Motion AI (Pose rig follows cursor)
    const wVision = this.currentStageWeights.visionAi;
    this.stageMotionAI.visible = wVision > 0.01;
    if (this.stageMotionAI.visible) {
      const scale = 0.85 + wVision * 0.15;
      this.stageMotionAI.scale.setScalar(scale);

      // Head and hand track cursor
      if (this.headJoint) {
        this.headJoint.rotation.y = mouseNormX * 0.65;
        this.headJoint.rotation.x = -mouseNormY * 0.45;
      }
      if (this.handJoint) {
        this.handJoint.position.x = 0.65 + mouseNormX * 0.35;
        this.handJoint.position.y = 1.1 + mouseNormY * 0.35;
      }
      if (this.trackingHUD) {
        this.trackingHUD.rotation.y = elapsed * 0.3;
      }
    }
  }

  // =========================================================================
  // VIEWPORT BUFFER MODE SWITCHER (LIT / WIREFRAME / X-RAY)
  // =========================================================================
  public setViewportMode(mode: ShaderViewportMode): void {
    this.currentViewportMode = mode;
    const modeInt = mode === "lit" ? 0 : mode === "wireframe" ? 1 : 2;

    this.laserMaterial.uniforms.uViewportMode.value = modeInt;
    this.floorMaterial.uniforms.uViewportMode.value = modeInt;

    // Traverse all meshes and update wireframe flag
    const isWire = mode === "wireframe";
    this.group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => {
            if ("wireframe" in m) (m as THREE.MeshStandardMaterial).wireframe = isWire;
          });
        } else if (obj.material && "wireframe" in obj.material) {
          (obj.material as THREE.MeshStandardMaterial).wireframe = isWire;
        }
      }
    });
  }

  public dispose(): void {
    this.group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else if (obj.material) {
          obj.material.dispose();
        }
      }
    });
    this.group.clear();
  }
}
