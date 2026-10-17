import * as THREE from "three";

/**
 * Creates dynamic canvas textures for holographic displays & code monitors.
 */
function createCodeMonitorTexture(title: string, lines: string[]): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 288;
  const ctx = canvas.getContext("2d")!;

  // Background
  ctx.fillStyle = "#090d16";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border & header
  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 4;
  ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);

  ctx.fillStyle = "#1e293b";
  ctx.fillRect(4, 4, canvas.width - 8, 36);

  ctx.fillStyle = "#22d3ee";
  ctx.font = "bold 16px monospace";
  ctx.fillText(`● ● ●  ${title}`, 16, 28);

  // Code lines
  ctx.font = "14px monospace";
  lines.forEach((line, i) => {
    ctx.fillStyle = line.startsWith("//") ? "#64748b" : line.includes("UE5") || line.includes("SmartScopy") ? "#38bdf8" : line.includes("return") || line.includes("void") ? "#c084fc" : "#e2e8f0";
    ctx.fillText(line, 20, 68 + i * 24);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Creates grid texture for the cyber floor.
 */
function createFloorGridTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#06070a";
  ctx.fillRect(0, 0, 256, 256);

  ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 256; i += 32) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 256);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(256, i);
    ctx.stroke();
  }

  // Corner dots
  ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
  for (let x = 0; x <= 256; x += 32) {
    for (let y = 0; y <= 256; y += 32) {
      ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  return texture;
}

export interface StudioEnvironment {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

export function createStudioEnvironment(): StudioEnvironment {
  const root = new THREE.Group();

  // Animatable references
  let medicalHologram: THREE.Group | null = null;
  let architecturalMatrix: THREE.Group | null = null;
  let xrHeadsetLed: THREE.Mesh | null = null;
  let particlesMesh: THREE.Points | null = null;
  let serverLedMeshes: THREE.Mesh[] = [];

  // ==========================================
  // 1. Room Architecture & Floor
  // ==========================================
  const floorGeo = new THREE.PlaneGeometry(32, 32);
  const floorMat = new THREE.MeshStandardMaterial({
    map: createFloorGridTexture(),
    roughness: 0.2,
    metalness: 0.85,
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  root.add(floor);

  // Ceiling with subtle dark metal
  const ceilingGeo = new THREE.PlaneGeometry(32, 32);
  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0x07080d,
    roughness: 0.9,
    metalness: 0.2,
  });
  const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = 5;
  root.add(ceiling);

  // Back Wall with Cyber City Window View
  const backWallGeo = new THREE.PlaneGeometry(32, 5);
  const backWallMat = new THREE.MeshStandardMaterial({
    color: 0x090b14,
    roughness: 0.8,
  });
  const backWall = new THREE.Mesh(backWallGeo, backWallMat);
  backWall.position.set(0, 2.5, -8);
  root.add(backWall);

  // Window frame cut-out
  const windowFrameGeo = new THREE.BoxGeometry(16, 3.2, 0.1);
  const windowFrameMat = new THREE.MeshStandardMaterial({
    color: 0x111625,
    metalness: 0.8,
    roughness: 0.3,
  });
  const windowFrame = new THREE.Mesh(windowFrameGeo, windowFrameMat);
  windowFrame.position.set(0, 2.5, -7.95);
  root.add(windowFrame);

  // Glowing city skyline backdrop behind window
  const cityBackdropGeo = new THREE.PlaneGeometry(24, 6);
  const cityBackdropMat = new THREE.MeshBasicMaterial({
    color: 0x050c1e,
  });
  const cityBackdrop = new THREE.Mesh(cityBackdropGeo, cityBackdropMat);
  cityBackdrop.position.set(0, 2.8, -10);
  root.add(cityBackdrop);

  // City skyline silhouette towers
  for (let i = 0; i < 28; i++) {
    const height = 1.2 + Math.random() * 3.5;
    const width = 0.4 + Math.random() * 0.8;
    const towerGeo = new THREE.BoxGeometry(width, height, 0.2);
    const towerMat = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? 0x0b1736 : 0x070e24,
    });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(-8 + i * 0.6, height / 2, -9.8);
    root.add(tower);

    // City lights on towers
    if (Math.random() > 0.4) {
      const beaconGeo = new THREE.SphereGeometry(0.04, 4, 4);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x22d3ee : 0xf43f5e,
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(tower.position.x, height + 0.05, -9.75);
      root.add(beacon);
    }
  }

  // ==========================================
  // 2. Station 1: Dev Command Center (Hero)
  // ==========================================
  const deskGroup = new THREE.Group();
  deskGroup.position.set(0, 0, 0);

  // Desk top
  const deskGeo = new THREE.BoxGeometry(2.4, 0.08, 1.1);
  const deskMat = new THREE.MeshStandardMaterial({
    color: 0x111420,
    roughness: 0.4,
    metalness: 0.7,
  });
  const desk = new THREE.Mesh(deskGeo, deskMat);
  desk.position.set(0, 0.76, 0);
  deskGroup.add(desk);

  // Desk legs
  const legGeo = new THREE.BoxGeometry(0.06, 0.76, 0.9);
  const legMat = new THREE.MeshStandardMaterial({ color: 0x0a0c14, metalness: 0.9, roughness: 0.2 });
  const legLeft = new THREE.Mesh(legGeo, legMat);
  legLeft.position.set(-1.1, 0.38, 0);
  const legRight = new THREE.Mesh(legGeo, legMat);
  legRight.position.set(1.1, 0.38, 0);
  deskGroup.add(legLeft, legRight);

  // Center Monitor (Unreal Engine C++ & Shaders)
  const screenGeo = new THREE.BoxGeometry(0.88, 0.52, 0.02);
  const centerScreenTex = createCodeMonitorTexture("UnrealEngine5 / SpatialCore.cpp", [
    "// Low-Latency Spatial Engine",
    "UCLASS() class ASpatialRig : public AActor {",
    "  void Tick(float DeltaTime) override;",
    "  FVector HeadsetPose = XRDevice->GetPose();",
    "  return RenderStereoPass(HeadsetPose);",
    "};"
  ]);
  const centerScreenMat = new THREE.MeshBasicMaterial({ map: centerScreenTex });
  const centerScreen = new THREE.Mesh(screenGeo, centerScreenMat);
  centerScreen.position.set(0, 1.18, -0.2);
  deskGroup.add(centerScreen);

  // Left Monitor (CAD & MimadimPlus)
  const leftScreenTex = createCodeMonitorTexture("MimadimPlus / MeshGen.cpp", [
    "// Procedural Tile & DXF Clipper",
    "void GenerateProceduralFloor() {",
    "  PolygonClipper.Clip(DXFPoints);",
    "  TriangulateMesh(FlooringMesh);",
    "}"
  ]);
  const leftScreenMat = new THREE.MeshBasicMaterial({ map: leftScreenTex });
  const leftScreen = new THREE.Mesh(screenGeo, leftScreenMat);
  leftScreen.position.set(-0.9, 1.18, -0.05);
  leftScreen.rotation.y = Math.PI / 8;
  deskGroup.add(leftScreen);

  // Right Monitor (SmartScopy & Vision AI)
  const rightScreenTex = createCodeMonitorTexture("SmartScopy / DirectShowPipeline.cs", [
    "// Zero-Latency OT Surgical Stream",
    "void OnDirectShowFrame(byte[] buffer) {",
    "  YoloDetector.InferFrame(buffer);",
    "  HoloLensStreamer.TransmitE2EE();",
    "}"
  ]);
  const rightScreenMat = new THREE.MeshBasicMaterial({ map: rightScreenTex });
  const rightScreen = new THREE.Mesh(screenGeo, rightScreenMat);
  rightScreen.position.set(0.9, 1.18, -0.05);
  rightScreen.rotation.y = -Math.PI / 8;
  deskGroup.add(rightScreen);

  // Spatial XR Headset on Desk (HoloLens 2 / XREAL style)
  const headsetGroup = new THREE.Group();
  headsetGroup.position.set(0.4, 0.83, 0.15);
  headsetGroup.rotation.y = -Math.PI / 6;

  const visorGeo = new THREE.BoxGeometry(0.24, 0.08, 0.12);
  const visorMat = new THREE.MeshStandardMaterial({
    color: 0x05070c,
    roughness: 0.1,
    metalness: 0.95,
  });
  const visor = new THREE.Mesh(visorGeo, visorMat);
  headsetGroup.add(visor);

  // Visor glass reflective band
  const visorGlassGeo = new THREE.BoxGeometry(0.25, 0.06, 0.02);
  const visorGlassMat = new THREE.MeshPhysicalMaterial({
    color: 0x22d3ee,
    roughness: 0.1,
    transmission: 0.8,
    transparent: true,
  });
  const visorGlass = new THREE.Mesh(visorGlassGeo, visorGlassMat);
  visorGlass.position.z = 0.06;
  headsetGroup.add(visorGlass);

  // Pulsing status LED on headset
  const ledGeo = new THREE.SphereGeometry(0.015, 8, 8);
  const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
  xrHeadsetLed = new THREE.Mesh(ledGeo, ledMat);
  xrHeadsetLed.position.set(0.1, 0.02, 0.065);
  headsetGroup.add(xrHeadsetLed);

  deskGroup.add(headsetGroup);
  root.add(deskGroup);

  // ==========================================
  // 3. Station 2: CAD Matrix (About / MimadimPlus)
  // ==========================================
  architecturalMatrix = new THREE.Group();
  architecturalMatrix.position.set(3.2, 1.1, -1.2);

  // Floating wireframe building / room cube
  const wireCubeGeo = new THREE.BoxGeometry(1.6, 1.1, 1.6);
  const wireCubeMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
  });
  const wireCube = new THREE.Mesh(wireCubeGeo, wireCubeMat);
  architecturalMatrix.add(wireCube);

  // Inner floor tile mesh
  const innerFloorGeo = new THREE.PlaneGeometry(1.5, 1.5, 6, 6);
  const innerFloorMat = new THREE.MeshBasicMaterial({
    color: 0x818cf8,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  });
  const innerFloor = new THREE.Mesh(innerFloorGeo, innerFloorMat);
  innerFloor.rotation.x = -Math.PI / 2;
  innerFloor.position.y = -0.54;
  architecturalMatrix.add(innerFloor);

  // Glowing center pivot coordinate widget
  const axesHelper = new THREE.AxesHelper(0.4);
  architecturalMatrix.add(axesHelper);

  // Drafting pedestal base below
  const pedestalGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.6, 16);
  const pedestalMat = new THREE.MeshStandardMaterial({
    color: 0x111626,
    metalness: 0.8,
    roughness: 0.3,
  });
  const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
  pedestal.position.set(3.2, 0.3, -1.2);
  root.add(pedestal);
  root.add(architecturalMatrix);

  // ==========================================
  // 4. Station 3: Medical XR & Arcade Bay (Projects)
  // ==========================================
  const projectsBay = new THREE.Group();
  projectsBay.position.set(-3.5, 0, -2.8);

  // Medical Cart Base
  const cartGeo = new THREE.BoxGeometry(1.2, 0.85, 0.8);
  const cartMat = new THREE.MeshStandardMaterial({
    color: 0x141a29,
    roughness: 0.3,
    metalness: 0.7,
  });
  const cart = new THREE.Mesh(cartGeo, cartMat);
  cart.position.set(0, 0.42, 0);
  projectsBay.add(cart);

  // Articulated surgical arm
  const armPoleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 12);
  const armMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
  const armPole = new THREE.Mesh(armPoleGeo, armMat);
  armPole.position.set(0.45, 1.15, 0);
  projectsBay.add(armPole);

  // Volumetric Floating Medical Hologram (3D Bone / Skull representation)
  medicalHologram = new THREE.Group();
  medicalHologram.position.set(0, 1.45, 0);

  // Icosahedron anatomical sphere + wireframe rings
  const holoCoreGeo = new THREE.IcosahedronGeometry(0.38, 2);
  const holoCoreMat = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    wireframe: true,
    transparent: true,
    opacity: 0.85,
  });
  const holoCore = new THREE.Mesh(holoCoreGeo, holoCoreMat);
  medicalHologram.add(holoCore);

  const ringGeo = new THREE.TorusGeometry(0.55, 0.015, 16, 48);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.6 });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 3;
  medicalHologram.add(ring1);

  const ring2 = new THREE.Mesh(ringGeo, ringMat);
  ring2.rotation.y = Math.PI / 4;
  medicalHologram.add(ring2);

  projectsBay.add(medicalHologram);

  // Arcade Kiosk Cabinet (NoPainHeals)
  const arcadeGroup = new THREE.Group();
  arcadeGroup.position.set(1.7, 0, 0.6);

  const cabinetGeo = new THREE.BoxGeometry(0.8, 1.65, 0.75);
  const cabinetMat = new THREE.MeshStandardMaterial({
    color: 0x0d111a,
    metalness: 0.6,
    roughness: 0.4,
  });
  const cabinet = new THREE.Mesh(cabinetGeo, cabinetMat);
  cabinet.position.set(0, 0.82, 0);
  arcadeGroup.add(cabinet);

  // Arcade screen
  const arcadeScreenGeo = new THREE.PlaneGeometry(0.55, 0.45);
  const arcadeScreenMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    wireframe: true,
  });
  const arcadeScreen = new THREE.Mesh(arcadeScreenGeo, arcadeScreenMat);
  arcadeScreen.position.set(0, 1.15, 0.38);
  arcadeGroup.add(arcadeScreen);

  // Floor Projection Circle (NoPainHeals floor rehabilitation projection)
  const projectionGeo = new THREE.RingGeometry(0.4, 0.9, 32);
  const projectionMat = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.45,
  });
  const projection = new THREE.Mesh(projectionGeo, projectionMat);
  projection.rotation.x = -Math.PI / 2;
  projection.position.set(0, 0.02, 1.3);
  arcadeGroup.add(projection);

  projectsBay.add(arcadeGroup);
  root.add(projectsBay);

  // ==========================================
  // 5. Station 4: Server Core & Telemetry (Skills/Services)
  // ==========================================
  const serverGroup = new THREE.Group();
  serverGroup.position.set(-1.8, 0, -6.2);

  for (let s = 0; s < 3; s++) {
    const rackGeo = new THREE.BoxGeometry(0.9, 2.6, 0.8);
    const rackMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      metalness: 0.85,
      roughness: 0.25,
    });
    const rack = new THREE.Mesh(rackGeo, rackMat);
    rack.position.set(s * 1.05, 1.3, 0);
    serverGroup.add(rack);

    // Status LED arrays
    for (let row = 0; row < 12; row++) {
      const ledGeo = new THREE.BoxGeometry(0.03, 0.02, 0.01);
      const ledMat = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.3 ? 0x22d3ee : 0x10b981,
      });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(s * 1.05 - 0.32, 0.4 + row * 0.16, 0.41);
      serverGroup.add(led);
      serverLedMeshes.push(led);
    }
  }
  root.add(serverGroup);

  // ==========================================
  // 6. Ambient Cyber Dust Particles
  // ==========================================
  const particleCount = 280;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 16;
    particlePositions[i + 1] = Math.random() * 4.5;
    particlePositions[i + 2] = (Math.random() - 0.5) * 16;
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x22d3ee,
    size: 0.04,
    transparent: true,
    opacity: 0.6,
  });
  particlesMesh = new THREE.Points(particleGeo, particleMat);
  root.add(particlesMesh);

  // ==========================================
  // Update Animation Loop
  // ==========================================
  const update = (_delta: number, elapsed: number) => {
    // 1. Rotate medical hologram
    if (medicalHologram) {
      medicalHologram.rotation.y = elapsed * 0.6;
      medicalHologram.position.y = 1.45 + Math.sin(elapsed * 2.0) * 0.04;
    }

    // 2. Rotate architectural CAD matrix
    if (architecturalMatrix) {
      architecturalMatrix.rotation.y = -elapsed * 0.35;
      architecturalMatrix.position.y = 1.1 + Math.cos(elapsed * 1.5) * 0.03;
    }

    // 3. Pulse XR headset LED
    if (xrHeadsetLed) {
      const pulse = 0.5 + Math.sin(elapsed * 4.0) * 0.5;
      (xrHeadsetLed.material as THREE.MeshBasicMaterial).color.setRGB(0.06 * pulse, 0.72 * pulse, 0.5 * pulse);
    }

    // 4. Subtle blink on server LEDs
    if (serverLedMeshes.length > 0 && Math.random() > 0.88) {
      const randomLed = serverLedMeshes[Math.floor(Math.random() * serverLedMeshes.length)];
      (randomLed.material as THREE.MeshBasicMaterial).color.setHex(Math.random() > 0.5 ? 0x22d3ee : 0x10b981);
    }

    // 5. Drift dust particles
    if (particlesMesh) {
      particlesMesh.rotation.y = elapsed * 0.02;
    }
  };

  return { group: root, update };
}
