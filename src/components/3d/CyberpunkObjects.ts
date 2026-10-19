import * as THREE from "three";

export interface CyberpunkEnvironment {
  group: THREE.Group;
  update: (delta: number, elapsed: number, mouseNormX: number, mouseNormY: number) => void;
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

  // Dark backing panel
  ctx.fillStyle = "#030408";
  ctx.fillRect(0, 0, width, height);

  // Outer neon frame
  ctx.strokeStyle = glowHex;
  ctx.lineWidth = 6;
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 18;
  ctx.strokeRect(14, 14, width - 28, height - 28);

  // Inner subtle border
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, width - 44, height - 44);

  // Main neon title text
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${Math.floor(height * 0.28)}px "Courier New", monospace, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 24;
  ctx.fillText(title, width / 2, height * 0.42);

  // Subtitle / Japanese kana
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

  // 1. Semi-transparent dark tinted glass backing
  ctx.fillStyle = "rgba(4, 7, 16, 0.95)";
  ctx.fillRect(0, 0, 640, 400);

  // 2. Cyber grid background lines
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

  // 3. Glowing neon card border
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 4;
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 16;
  ctx.strokeRect(16, 16, 608, 368);

  // 4. Tech corner brackets
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.shadowBlur = 8;
  const bLen = 24;
  // Top-left
  ctx.beginPath();
  ctx.moveTo(12, 12 + bLen);
  ctx.lineTo(12, 12);
  ctx.lineTo(12 + bLen, 12);
  ctx.stroke();
  // Top-right
  ctx.beginPath();
  ctx.moveTo(628 - bLen, 12);
  ctx.lineTo(628, 12);
  ctx.lineTo(628, 12 + bLen);
  ctx.stroke();
  // Bottom-left
  ctx.beginPath();
  ctx.moveTo(12, 388 - bLen);
  ctx.lineTo(12, 388);
  ctx.lineTo(12 + bLen, 388);
  ctx.stroke();
  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(628 - bLen, 388);
  ctx.lineTo(628, 388);
  ctx.lineTo(628, 388 - bLen);
  ctx.stroke();

  // 5. Header: Station Index Code + Tag Pill
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

  // 6. Project Title
  ctx.fillStyle = "#ffffff";
  ctx.font = 'bold 36px "Courier New", monospace, sans-serif';
  ctx.textAlign = "left";
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 16;
  ctx.fillText(title, 36, 120);

  // 7. Subtitle / Architecture Highlight
  ctx.fillStyle = accentHex;
  ctx.font = '600 20px "Courier New", monospace';
  ctx.shadowBlur = 8;
  ctx.fillText(subtitle, 36, 160);

  // 8. Cyber Graphic / Telemetry waveform
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(36, 220);
  for (let i = 0; i < 560; i += 20) {
    const py = 220 + Math.sin(i * 0.08) * 18 + (i % 40 === 0 ? 12 : -6);
    ctx.lineTo(36 + i, py);
  }
  ctx.stroke();

  // 9. Status Bar & Coordinates
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.font = '13px "Courier New", monospace';
  ctx.fillText(`SYS_NODE: [READY]   BUFFER: 0x${indexStr}AA   STATUS: ACTIVE`, 36, 335);

  // Progress Bar Line
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

  // Wet reflective puddle lane down center
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

  // Left building flank (spans Z = +15 to -60)
  const leftBuildingGeo = new THREE.BoxGeometry(10, 40, 85);
  const leftBuilding = new THREE.Mesh(leftBuildingGeo, buildingMat);
  leftBuilding.position.set(-10, 20, -22);
  group.add(leftBuilding);
  disposables.push(leftBuildingGeo);

  // Right building flank (spans Z = +15 to -60)
  const rightBuildingGeo = new THREE.BoxGeometry(10, 40, 85);
  const rightBuilding = new THREE.Mesh(rightBuildingGeo, buildingMat);
  rightBuilding.position.set(10, 20, -22);
  group.add(rightBuilding);
  disposables.push(rightBuildingGeo);

  // Deep end skyline building
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
    {
      index: "00",
      title: "RAVI PATEL",
      subtitle: "GAME DEV & GRAPHICS ENGINEER",
      tag: "OVERVIEW",
      color: "#00f0ff",
      accent: "#38bdf8",
      pos: new THREE.Vector3(-2.6, 2.8, 3.5),
      rotY: 0.22,
    },
    {
      index: "01",
      title: "ARCHITECTURE",
      subtitle: "UNITY • UNREAL ENGINE 5 • THREE.JS",
      tag: "EXPERIENCE",
      color: "#a855f7",
      accent: "#c084fc",
      pos: new THREE.Vector3(2.6, 2.9, -1.5),
      rotY: -0.22,
    },
    {
      index: "02",
      title: "SMARTSCOPY",
      subtitle: "REAL-TIME SURGICAL AR ENGINE",
      tag: "FLAGSHIP",
      color: "#00f0ff",
      accent: "#22d3ee",
      pos: new THREE.Vector3(-2.6, 3.0, -6.5),
      rotY: 0.22,
    },
    {
      index: "03",
      title: "MIMADIM PLUS",
      subtitle: "PARAMETRIC CAD GENERATOR",
      tag: "ENGINEERING",
      color: "#ffb700",
      accent: "#fbbf24",
      pos: new THREE.Vector3(2.6, 3.1, -11.5),
      rotY: -0.22,
    },
    {
      index: "04",
      title: "NO PAIN HEALS",
      subtitle: "CLINICAL REHAB SENSOR MATRIX",
      tag: "MED-TECH",
      color: "#10b981",
      accent: "#34d399",
      pos: new THREE.Vector3(-2.6, 3.2, -16.5),
      rotY: 0.22,
    },
    {
      index: "05",
      title: "MOTION AI",
      subtitle: "COMPUTER VISION TELEMETRY",
      tag: "EDGE AI",
      color: "#ff007f",
      accent: "#f43f5e",
      pos: new THREE.Vector3(2.6, 3.3, -21.5),
      rotY: -0.22,
    },
    {
      index: "06",
      title: "CORE SYSTEMS",
      subtitle: "GLSL • WEBGPU • C++ ARCHITECTURE",
      tag: "SKILLS",
      color: "#38bdf8",
      accent: "#7dd3fc",
      pos: new THREE.Vector3(-2.6, 3.4, -26.5),
      rotY: 0.22,
    },
    {
      index: "07",
      title: "TRANSMISSION",
      subtitle: "INITIATE DIRECT COMMS LINK",
      tag: "CONNECT",
      color: "#ff007f",
      accent: "#00f0ff",
      pos: new THREE.Vector3(0.0, 3.6, -31.5),
      rotY: 0.0,
    },
  ];

  cardConfigs.forEach((cfg, idx) => {
    const cardGroup = new THREE.Group();
    cardGroup.position.copy(cfg.pos);
    cardGroup.rotation.y = cfg.rotY;

    const cardTex = createHologramCardCanvas(
      cfg.index,
      cfg.title,
      cfg.subtitle,
      cfg.tag,
      cfg.color,
      cfg.accent
    );
    disposables.push(cardTex);

    // Front display face
    const faceGeo = new THREE.PlaneGeometry(3.2, 2.0);
    const faceMat = new THREE.MeshBasicMaterial({
      map: cardTex,
      transparent: true,
      opacity: 0.94,
      toneMapped: false,
    });
    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    cardGroup.add(faceMesh);
    disposables.push(faceGeo, faceMat);

    // Tinted dark glass backing
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

    // Outer neon glowing wireframe edge
    const wireGeo = new THREE.EdgesGeometry(glassGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(cfg.color),
      linewidth: 2,
    });
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
  // 4. VIBRANT WALL NEON SIGNS (Background Depth)
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
  // 6. EXTENDED SLANTED CYBER RAIN (Full Alley Depth)
  // ==========================================
  const RAIN_COUNT = 1200;
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

  // ==========================================
  // 7. FLOATING NEON MIST
  // ==========================================
  const MIST_COUNT = 200;
  const mistGeo = new THREE.BufferGeometry();
  const mistPos = new Float32Array(MIST_COUNT * 3);
  const mistColors = new Float32Array(MIST_COUNT * 3);

  for (let i = 0; i < MIST_COUNT; i++) {
    mistPos[i * 3 + 0] = (Math.random() - 0.5) * 11;
    mistPos[i * 3 + 1] = 0.5 + Math.random() * 14;
    mistPos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 15;

    if (i % 2 === 0) {
      mistColors[i * 3 + 0] = 1.0;
      mistColors[i * 3 + 1] = 0.0;
      mistColors[i * 3 + 2] = 0.5;
    } else {
      mistColors[i * 3 + 0] = 0.0;
      mistColors[i * 3 + 1] = 0.95;
      mistColors[i * 3 + 2] = 1.0;
    }
  }
  mistGeo.setAttribute("position", new THREE.BufferAttribute(mistPos, 3));
  mistGeo.setAttribute("color", new THREE.BufferAttribute(mistColors, 3));

  const mistMat = new THREE.PointsMaterial({
    size: 0.18,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
  });
  const mistPoints = new THREE.Points(mistGeo, mistMat);
  group.add(mistPoints);
  disposables.push(mistGeo, mistMat);

  // ==========================================
  // UPDATE LOOP
  // ==========================================
  const update = (delta: number, elapsed: number, mouseNormX: number, mouseNormY: number) => {
    // 1. Subtle alley sway with mouse
    group.rotation.y = mouseNormX * 0.035;
    group.rotation.x = -mouseNormY * 0.018;

    // 2. Levitation bobbing on 3D holographic cards
    hologramCards.forEach((card) => {
      card.group.position.y =
        card.initialY + Math.sin(elapsed * card.bobSpeed + card.bobOffset) * 0.07;
    });

    // 3. Falling cyber rain
    const posAttr = rainGeo.attributes.position as THREE.BufferAttribute;
    const positions = posAttr.array as Float32Array;
    const rainSpeed = 26.0 * delta;

    for (let i = 0; i < RAIN_COUNT; i++) {
      positions[i * 6 + 1] -= rainSpeed;
      positions[i * 6 + 4] -= rainSpeed;

      if (positions[i * 6 + 1] < 0) {
        const resetY = 20 + Math.random() * 4;
        const len = 0.5 + Math.random() * 0.45;
        positions[i * 6 + 1] = resetY;
        positions[i * 6 + 4] = resetY - len;
      }
    }
    posAttr.needsUpdate = true;

    // 4. Mist drift
    const mistPosAttr = mistGeo.attributes.position as THREE.BufferAttribute;
    const mPositions = mistPosAttr.array as Float32Array;
    for (let i = 0; i < MIST_COUNT; i++) {
      mPositions[i * 3 + 1] += Math.sin(elapsed * 1.5 + i) * 0.003;
      mPositions[i * 3 + 0] += Math.cos(elapsed * 0.8 + i) * 0.002;
    }
    mistPosAttr.needsUpdate = true;

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
