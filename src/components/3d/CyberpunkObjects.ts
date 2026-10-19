import * as THREE from "three";

export interface CyberpunkEnvironment {
  group: THREE.Group;
  update: (
    delta: number,
    elapsed: number,
    mouseNormX: number,
    mouseNormY: number,
    camera?: THREE.PerspectiveCamera
  ) => void;
  dispose: () => void;
}

// Procedural high-res neon canvas texture generator
function createNeonCanvas(
  title: string,
  subtitle: string,
  colorHex: string,
  glowHex: string,
  width = 512,
  height = 256
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = "#030408";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = glowHex;
  ctx.lineWidth = 6;
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 18;
  ctx.strokeRect(14, 14, width - 28, height - 28);

  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, width - 44, height - 44);

  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${Math.floor(height * 0.28)}px "Courier New", monospace, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 24;
  ctx.fillText(title, width / 2, height * 0.42);

  if (subtitle) {
    ctx.fillStyle = colorHex;
    ctx.font = `600 ${Math.floor(height * 0.14)}px monospace, sans-serif`;
    ctx.shadowBlur = 14;
    ctx.fillText(subtitle, width / 2, height * 0.74);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// Procedural glowing particle dot texture (Vertex3D bubble texture)
function createBubbleSpriteTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
  grad.addColorStop(0.35, "rgba(255, 255, 255, 0.85)");
  grad.addColorStop(0.7, "rgba(255, 255, 255, 0.25)");
  grad.addColorStop(1, "rgba(255, 255, 255, 0.0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Procedural holographic 3D card canvas texture generator
function createHologramCardCanvas(
  indexStr: string,
  title: string,
  subtitle: string,
  tag: string,
  colorHex: string,
  accentHex: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = "rgba(4, 7, 16, 0.95)";
  ctx.fillRect(0, 0, 640, 400);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
  ctx.lineWidth = 1;
  for (let x = 30; x < 610; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 20);
    ctx.lineTo(x, 380);
    ctx.stroke();
  }
  for (let y = 30; y < 370; y += 30) {
    ctx.beginPath();
    ctx.moveTo(20, y);
    ctx.lineTo(620, y);
    ctx.stroke();
  }

  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 4;
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 16;
  ctx.strokeRect(16, 16, 608, 368);

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.shadowBlur = 8;
  const bLen = 24;
  ctx.beginPath();
  ctx.moveTo(12, 12 + bLen); ctx.lineTo(12, 12); ctx.lineTo(12 + bLen, 12);
  ctx.moveTo(628 - bLen, 12); ctx.lineTo(628, 12); ctx.lineTo(628, 12 + bLen);
  ctx.moveTo(12, 388 - bLen); ctx.lineTo(12, 388); ctx.lineTo(12 + bLen, 388);
  ctx.moveTo(628 - bLen, 388); ctx.lineTo(628, 388); ctx.lineTo(628, 388 - bLen);
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.fillStyle = colorHex;
  ctx.font = 'bold 22px "Courier New", monospace';
  ctx.textAlign = "left";
  ctx.fillText(`// STATION ${indexStr}`, 36, 56);

  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  ctx.fillRect(450, 36, 150, 28);
  ctx.fillStyle = "#ffffff";
  ctx.font = 'bold 14px "Courier New", monospace';
  ctx.textAlign = "center";
  ctx.fillText(tag, 525, 55);

  ctx.fillStyle = "#ffffff";
  ctx.font = 'bold 36px "Courier New", monospace, sans-serif';
  ctx.textAlign = "left";
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 16;
  ctx.fillText(title, 36, 120);

  ctx.fillStyle = accentHex;
  ctx.font = '600 20px "Courier New", monospace';
  ctx.shadowBlur = 8;
  ctx.fillText(subtitle, 36, 160);

  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(36, 220);
  for (let i = 0; i < 560; i += 20) {
    const py = 220 + Math.sin(i * 0.08) * 18 + (i % 40 === 0 ? 12 : -6);
    ctx.lineTo(36 + i, py);
  }
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.font = '13px "Courier New", monospace';
  ctx.fillText(`SYS_NODE: [READY]   BUFFER: 0x${indexStr}AA   STATUS: ACTIVE`, 36, 335);

  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(36, 350, 560, 6);
  ctx.fillStyle = colorHex;
  ctx.fillRect(36, 350, 380, 6);

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// Skyscraper facade texture with random lit cyber windows
function createBuildingFacadeTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = "#080b14";
  ctx.fillRect(0, 0, 512, 1024);

  const cols = 16;
  const rows = 40;
  const winW = 18;
  const winH = 14;
  const gapX = 14;
  const gapY = 12;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 12 + c * (winW + gapX);
      const y = 14 + r * (winH + gapY);
      const rand = Math.random();

      if (rand > 0.78) {
        ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
        ctx.fillRect(x, y, winW, winH);
      } else if (rand > 0.65) {
        ctx.fillStyle = "rgba(255, 183, 3, 0.8)";
        ctx.fillRect(x, y, winW, winH);
      } else if (rand > 0.58) {
        ctx.fillStyle = "rgba(255, 0, 128, 0.75)";
        ctx.fillRect(x, y, winW, winH);
      } else {
        ctx.fillStyle = "rgba(16, 22, 38, 0.6)";
        ctx.fillRect(x, y, winW, winH);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 3);
  return texture;
}

export function createCyberpunkEnvironment(): CyberpunkEnvironment {
  const group = new THREE.Group();
  const disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];

  // ==========================================
  // 1. EXTENDED REFLECTIVE WET GROUND
  // ==========================================
  const groundGeo = new THREE.PlaneGeometry(60, 120, 1, 1);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x040509,
    roughness: 0.18,
    metalness: 0.85,
    envMapIntensity: 1.6,
  });
  const groundMesh = new THREE.Mesh(groundGeo, groundMat);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.position.set(0, 0, -22);
  group.add(groundMesh);
  disposables.push(groundGeo, groundMat);

  const puddleGeo = new THREE.PlaneGeometry(14, 80);
  const puddleMat = new THREE.MeshBasicMaterial({
    color: 0x060b18,
    transparent: true,
    opacity: 0.7,
  });
  const puddleMesh = new THREE.Mesh(puddleGeo, puddleMat);
  puddleMesh.rotation.x = -Math.PI / 2;
  puddleMesh.position.set(0, 0.02, -20);
  group.add(puddleMesh);
  disposables.push(puddleGeo, puddleMat);

  // ==========================================
  // 2. EXTENDED FLANKING SKYSCRAPERS
  // ==========================================
  const facadeTex = createBuildingFacadeTexture();
  disposables.push(facadeTex);

  const buildingMat = new THREE.MeshStandardMaterial({
    map: facadeTex,
    color: 0x24283b,
    roughness: 0.7,
    metalness: 0.3,
  });
  disposables.push(buildingMat);

  const leftBuildingGeo = new THREE.BoxGeometry(10, 40, 85);
  const leftBuilding = new THREE.Mesh(leftBuildingGeo, buildingMat);
  leftBuilding.position.set(-10, 20, -22);
  group.add(leftBuilding);
  disposables.push(leftBuildingGeo);

  const rightBuildingGeo = new THREE.BoxGeometry(10, 40, 85);
  const rightBuilding = new THREE.Mesh(rightBuildingGeo, buildingMat);
  rightBuilding.position.set(10, 20, -22);
  group.add(rightBuilding);
  disposables.push(rightBuildingGeo);

  const backBuildingGeo = new THREE.BoxGeometry(36, 60, 8);
  const backBuildingMat = new THREE.MeshStandardMaterial({
    map: facadeTex,
    color: 0x0d1222,
    roughness: 0.85,
  });
  const backBuilding = new THREE.Mesh(backBuildingGeo, backBuildingMat);
  backBuilding.position.set(0, 30, -62);
  group.add(backBuilding);
  disposables.push(backBuildingGeo, backBuildingMat);

  // ==========================================
  // 3. 8 HOLOGRAPHIC 3D CARDS (SCROLL STATIONS)
  // ==========================================
  interface HologramCardInstance {
    group: THREE.Group;
    initialY: number;
    bobSpeed: number;
    bobOffset: number;
  }
  const hologramCards: HologramCardInstance[] = [];

  const cardConfigs = [
    { index: "00", title: "RAVI PATEL", subtitle: "GAME DEV & GRAPHICS ENGINEER", tag: "OVERVIEW", color: "#00f0ff", accent: "#38bdf8", pos: new THREE.Vector3(-2.6, 2.8, 3.5), rotY: 0.22 },
    { index: "01", title: "ARCHITECTURE", subtitle: "UNITY • UNREAL ENGINE 5 • THREE.JS", tag: "EXPERIENCE", color: "#a855f7", accent: "#c084fc", pos: new THREE.Vector3(2.6, 2.9, -1.5), rotY: -0.22 },
    { index: "02", title: "SMARTSCOPY", subtitle: "REAL-TIME SURGICAL AR ENGINE", tag: "FLAGSHIP", color: "#00f0ff", accent: "#22d3ee", pos: new THREE.Vector3(-2.6, 3.0, -6.5), rotY: 0.22 },
    { index: "03", title: "MIMADIM PLUS", subtitle: "PARAMETRIC CAD GENERATOR", tag: "ENGINEERING", color: "#ffb700", accent: "#fbbf24", pos: new THREE.Vector3(2.6, 3.1, -11.5), rotY: -0.22 },
    { index: "04", title: "NO PAIN HEALS", subtitle: "CLINICAL REHAB SENSOR MATRIX", tag: "MED-TECH", color: "#10b981", accent: "#34d399", pos: new THREE.Vector3(-2.6, 3.2, -16.5), rotY: 0.22 },
    { index: "05", title: "MOTION AI", subtitle: "COMPUTER VISION TELEMETRY", tag: "EDGE AI", color: "#ff007f", accent: "#f43f5e", pos: new THREE.Vector3(2.6, 3.3, -21.5), rotY: -0.22 },
    { index: "06", title: "CORE SYSTEMS", subtitle: "GLSL • WEBGPU • C++ ARCHITECTURE", tag: "SKILLS", color: "#38bdf8", accent: "#7dd3fc", pos: new THREE.Vector3(-2.6, 3.4, -26.5), rotY: 0.22 },
    { index: "07", title: "TRANSMISSION", subtitle: "INITIATE DIRECT COMMS LINK", tag: "CONNECT", color: "#ff007f", accent: "#00f0ff", pos: new THREE.Vector3(0.0, 3.6, -31.5), rotY: 0.0 },
  ];

  cardConfigs.forEach((cfg, idx) => {
    const cardGroup = new THREE.Group();
    cardGroup.position.copy(cfg.pos);
    cardGroup.rotation.y = cfg.rotY;

    const cardTex = createHologramCardCanvas(cfg.index, cfg.title, cfg.subtitle, cfg.tag, cfg.color, cfg.accent);
    disposables.push(cardTex);

    const faceGeo = new THREE.PlaneGeometry(3.2, 2.0);
    const faceMat = new THREE.MeshBasicMaterial({ map: cardTex, transparent: true, opacity: 0.94, toneMapped: false });
    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    cardGroup.add(faceMesh);
    disposables.push(faceGeo, faceMat);

    const glassGeo = new THREE.BoxGeometry(3.22, 2.02, 0.08);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x04060e,
      roughness: 0.2,
      metalness: 0.85,
      transparent: true,
      opacity: 0.88,
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.z = -0.05;
    cardGroup.add(glassMesh);
    disposables.push(glassGeo, glassMat);

    const wireGeo = new THREE.EdgesGeometry(glassGeo);
    const wireMat = new THREE.LineBasicMaterial({ color: new THREE.Color(cfg.color), linewidth: 2 });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    wireMesh.position.z = -0.05;
    cardGroup.add(wireMesh);
    disposables.push(wireGeo, wireMat);

    group.add(cardGroup);

    hologramCards.push({
      group: cardGroup,
      initialY: cfg.pos.y,
      bobSpeed: 1.2 + idx * 0.15,
      bobOffset: idx * 0.85,
    });
  });

  // ==========================================
  // 4. VIBRANT WALL NEON SIGNS
  // ==========================================
  interface NeonSignInstance {
    mesh: THREE.Mesh;
    flickerRate: number;
  }
  const neonSigns: NeonSignInstance[] = [];

  const wallSigns = [
    { title: "ネオ東京", sub: "SYS-01", color: "#ff007f", glow: "#9b0050", pos: new THREE.Vector3(-4.8, 7.5, 0.0), rot: Math.PI / 2, flicker: 11 },
    { title: "SHINJUKU", sub: "ARCADE", color: "#ffb700", glow: "#b45309", pos: new THREE.Vector3(4.8, 6.5, -4.0), rot: -Math.PI / 2, flicker: 0 },
    { title: "MATRIX", sub: "GRAPHICS", color: "#10b981", glow: "#065f46", pos: new THREE.Vector3(-4.8, 5.8, -14.0), rot: Math.PI / 2, flicker: 0 },
    { title: "CYBER CITY", sub: "WEBGPU", color: "#ff007f", glow: "#be185d", pos: new THREE.Vector3(4.8, 8.2, -19.0), rot: -Math.PI / 2, flicker: 9 },
    { title: "SMSY-GEN", sub: "CREATIVE", color: "#00f0ff", glow: "#0284c7", pos: new THREE.Vector3(-4.8, 6.2, -25.0), rot: Math.PI / 2, flicker: 0 },
    { title: "OVERCLOCK", sub: "REALTIME", color: "#ffb700", glow: "#b45309", pos: new THREE.Vector3(4.8, 7.5, -30.0), rot: -Math.PI / 2, flicker: 14 },
  ];

  wallSigns.forEach((cfg) => {
    const tex = createNeonCanvas(cfg.title, cfg.sub, cfg.color, cfg.glow, 384, 192);
    disposables.push(tex);

    const geo = new THREE.PlaneGeometry(3.0, 1.4);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(cfg.pos);
    mesh.rotation.y = cfg.rot;
    group.add(mesh);
    disposables.push(geo, mat);

    neonSigns.push({ mesh, flickerRate: cfg.flicker });
  });

  // ==========================================
  // 5. OVERHEAD POWER CABLES
  // ==========================================
  const cableMat = new THREE.LineBasicMaterial({ color: 0x141a2c, linewidth: 1 });
  disposables.push(cableMat);

  const cableZPositions = [4, -2, -8, -14, -20, -26, -32, -38];
  cableZPositions.forEach((z) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.9, 9.0 + Math.random() * 2, z),
      new THREE.Vector3(0, 6.5 + Math.random() * 1.5, z + 0.5),
      new THREE.Vector3(4.9, 9.0 + Math.random() * 2, z),
    ]);
    const pts = curve.getPoints(28);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, cableMat);
    group.add(line);
    disposables.push(geo);
  });

  // ==========================================
  // 6. EXTENDED SLANTED CYBER RAIN
  // ==========================================
  const RAIN_COUNT = 1000;
  const rainGeo = new THREE.BufferGeometry();
  const rainPositions = new Float32Array(RAIN_COUNT * 6);

  for (let i = 0; i < RAIN_COUNT; i++) {
    const x = (Math.random() - 0.5) * 16;
    const y = Math.random() * 22;
    const z = (Math.random() - 0.5) * 65 - 15;
    const len = 0.5 + Math.random() * 0.45;
    const slantX = 0.08;

    rainPositions[i * 6 + 0] = x;
    rainPositions[i * 6 + 1] = y;
    rainPositions[i * 6 + 2] = z;

    rainPositions[i * 6 + 3] = x + slantX;
    rainPositions[i * 6 + 4] = y - len;
    rainPositions[i * 6 + 5] = z;
  }
  rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPositions, 3));

  const rainMat = new THREE.LineBasicMaterial({
    color: 0x4cc9f0,
    transparent: true,
    opacity: 0.35,
  });
  const rainLines = new THREE.LineSegments(rainGeo, rainMat);
  group.add(rainLines);
  disposables.push(rainGeo, rainMat);

  // =========================================================================
  // 7. VERTEX3D EXACT 3D INTERACTIVE PARTICLE FORCE FIELD (`LogoBubbles.js`)
  // =========================================================================
  const BUBBLE_COUNT = 1800;
  const bubbleSpriteTex = createBubbleSpriteTexture();
  disposables.push(bubbleSpriteTex);

  const bubbleGeo = new THREE.BufferGeometry();
  const basePos = new Float32Array(BUBBLE_COUNT * 3);
  const curPos = new Float32Array(BUBBLE_COUNT * 3);
  const velocities = new Float32Array(BUBBLE_COUNT * 3);
  const bubbleColors = new Float32Array(BUBBLE_COUNT * 3);

  for (let i = 0; i < BUBBLE_COUNT; i++) {
    // Distribute throughout the 3D street corridor around cards
    const x = (Math.random() - 0.5) * 9.0;
    const y = 0.8 + Math.random() * 6.5;
    const z = 7.0 - Math.random() * 42.0; // spans Z = +7 to -35

    basePos[i * 3 + 0] = x;
    basePos[i * 3 + 1] = y;
    basePos[i * 3 + 2] = z;

    curPos[i * 3 + 0] = x;
    curPos[i * 3 + 1] = y;
    curPos[i * 3 + 2] = z;

    velocities[i * 3 + 0] = 0;
    velocities[i * 3 + 1] = 0;
    velocities[i * 3 + 2] = 0;

    // Glowing Cyber Palette (Cyan, Hot Pink, Amber Gold)
    const randColor = Math.random();
    if (randColor > 0.55) {
      // Electric Cyan
      bubbleColors[i * 3 + 0] = 0.0;
      bubbleColors[i * 3 + 1] = 0.95;
      bubbleColors[i * 3 + 2] = 1.0;
    } else if (randColor > 0.22) {
      // Hot Magenta / Pink
      bubbleColors[i * 3 + 0] = 1.0;
      bubbleColors[i * 3 + 1] = 0.05;
      bubbleColors[i * 3 + 2] = 0.65;
    } else {
      // Neon Gold / Amber
      bubbleColors[i * 3 + 0] = 1.0;
      bubbleColors[i * 3 + 1] = 0.72;
      bubbleColors[i * 3 + 2] = 0.0;
    }
  }

  bubbleGeo.setAttribute("position", new THREE.BufferAttribute(curPos, 3));
  bubbleGeo.setAttribute("color", new THREE.BufferAttribute(bubbleColors, 3));

  const bubbleMat = new THREE.PointsMaterial({
    size: 0.22,
    map: bubbleSpriteTex,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const bubblePoints = new THREE.Points(bubbleGeo, bubbleMat);
  group.add(bubblePoints);
  disposables.push(bubbleGeo, bubbleMat);

  // 3D Mouse Raycast State
  const target3DMouse = new THREE.Vector3(0, 3, 0);
  const smooth3DMouse = new THREE.Vector3(0, 3, 0);
  const raycaster = new THREE.Raycaster();
  const screenVec = new THREE.Vector2(0, 0);
  const planeTarget = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Intersection plane

  // ==========================================
  // UPDATE LOOP (Particle Physics & Scene Motion)
  // ==========================================
  const update = (
    delta: number,
    elapsed: number,
    mouseNormX: number,
    mouseNormY: number,
    camera?: THREE.PerspectiveCamera
  ) => {
    // 1. Raycast mouse into 3D world space (Vertex3D ScreenToWorld logic)
    if (camera) {
      screenVec.set(mouseNormX, mouseNormY);
      raycaster.setFromCamera(screenVec, camera);

      // Intersect ray with plane at active card depth (~ camera.position.z - 5)
      planeTarget.constant = -(camera.position.z - 5.5);
      const intersection = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(planeTarget, intersection)) {
        target3DMouse.copy(intersection);
      }
    }

    // Smooth 3D mouse tracking with inertia (Vertex3D 0.18 ease)
    smooth3DMouse.lerp(target3DMouse, 0.18);

    // 2. Vertex3D Force-Field Repulsion & Elastic Spring Physics (`LogoBubbles.js`)
    const posAttr = bubbleGeo.attributes.position as THREE.BufferAttribute;
    const positions = posAttr.array as Float32Array;

    const INTERACTION_RADIUS = 3.2;
    const RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
    const PUSH_SPEED = 18.0 * delta;
    const RETURN_SPEED = 4.5 * delta;
    const DAMPING = 0.86;

    const mX = smooth3DMouse.x;
    const mY = smooth3DMouse.y;
    const mZ = smooth3DMouse.z;

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const idx = i * 3;
      const bX = basePos[idx + 0];
      const bY = basePos[idx + 1];
      const bZ = basePos[idx + 2];

      let cX = positions[idx + 0];
      let cY = positions[idx + 1];
      let cZ = positions[idx + 2];

      let vX = velocities[idx + 0];
      let vY = velocities[idx + 1];
      let vZ = velocities[idx + 2];

      // Distance from smoothed 3D cursor to particle
      const dX = cX - mX;
      const dY = cY - mY;
      const dZ = cZ - mZ;
      const distSq = dX * dX + dY * dY + dZ * dZ;

      // Physical 3D Repulsion Force
      if (distSq < RADIUS_SQ) {
        const dist = Math.sqrt(distSq) || 0.001;
        const force = (1.0 - dist / INTERACTION_RADIUS) * PUSH_SPEED;
        vX += (dX / dist) * force;
        vY += (dY / dist) * force;
        vZ += (dZ / dist) * force;
      }

      // Elastic Spring Return to Base Position
      vX += (bX - cX) * RETURN_SPEED;
      vY += (bY - cY) * RETURN_SPEED;
      vZ += (bZ - cZ) * RETURN_SPEED;

      // Friction / Inertial Damping
      vX *= DAMPING;
      vY *= DAMPING;
      vZ *= DAMPING;

      // Subtle ambient harmonic float
      const ambientFloat = Math.sin(elapsed * 1.8 + i * 0.3) * 0.0015;

      cX += vX + ambientFloat;
      cY += vY + ambientFloat;
      cZ += vZ;

      positions[idx + 0] = cX;
      positions[idx + 1] = cY;
      positions[idx + 2] = cZ;

      velocities[idx + 0] = vX;
      velocities[idx + 1] = vY;
      velocities[idx + 2] = vZ;
    }
    posAttr.needsUpdate = true;

    // 3. Levitation bobbing on 3D holographic cards
    hologramCards.forEach((card) => {
      card.group.position.y =
        card.initialY + Math.sin(elapsed * card.bobSpeed + card.bobOffset) * 0.07;
    });

    // 4. Falling cyber rain
    const rainPosAttr = rainGeo.attributes.position as THREE.BufferAttribute;
    const rPositions = rainPosAttr.array as Float32Array;
    const rainSpeed = 26.0 * delta;

    for (let i = 0; i < RAIN_COUNT; i++) {
      rPositions[i * 6 + 1] -= rainSpeed;
      rPositions[i * 6 + 4] -= rainSpeed;

      if (rPositions[i * 6 + 1] < 0) {
        const resetY = 20 + Math.random() * 4;
        const len = 0.5 + Math.random() * 0.45;
        rPositions[i * 6 + 1] = resetY;
        rPositions[i * 6 + 4] = resetY - len;
      }
    }
    rainPosAttr.needsUpdate = true;

    // 5. Intermittent neon sign flicker
    neonSigns.forEach((sign) => {
      if (sign.flickerRate > 0) {
        const noise = Math.sin(elapsed * sign.flickerRate) * Math.cos(elapsed * 2.3);
        const mat = sign.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = noise > 0.82 ? 0.35 : 1.0;
      }
    });
  };

  const dispose = () => {
    disposables.forEach((item) => {
      if ("dispose" in item && typeof item.dispose === "function") {
        item.dispose();
      }
    });
    group.clear();
  };

  return {
    group,
    update,
    dispose,
  };
}
