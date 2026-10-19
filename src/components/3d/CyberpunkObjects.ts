import * as THREE from "three";

export interface CyberpunkEnvironment {
  group: THREE.Group;
  update: (delta: number, elapsed: number, mouseNormX: number, mouseNormY: number) => void;
  dispose: () => void;
}

// Helper to create procedural high-res neon canvas texture
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
        // Cyan lit window
        ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
        ctx.fillRect(x, y, winW, winH);
      } else if (rand > 0.65) {
        // Amber lit window
        ctx.fillStyle = "rgba(255, 183, 3, 0.8)";
        ctx.fillRect(x, y, winW, winH);
      } else if (rand > 0.58) {
        // Magenta lit window
        ctx.fillStyle = "rgba(255, 0, 128, 0.75)";
        ctx.fillRect(x, y, winW, winH);
      } else {
        // Dark unlit window
        ctx.fillStyle = "rgba(16, 22, 38, 0.6)";
        ctx.fillRect(x, y, winW, winH);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2);
  return texture;
}

export function createCyberpunkEnvironment(): CyberpunkEnvironment {
  const group = new THREE.Group();
  const disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];

  // ==========================================
  // 1. REFLECTIVE WET ASPHALT GROUND (Samsy style)
  // ==========================================
  const groundGeo = new THREE.PlaneGeometry(50, 80, 1, 1);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x05060a,
    roughness: 0.18, // High wet glossiness for neon reflections
    metalness: 0.82,
    envMapIntensity: 1.5,
  });
  const groundMesh = new THREE.Mesh(groundGeo, groundMat);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.position.set(0, 0, -20);
  group.add(groundMesh);
  disposables.push(groundGeo, groundMat);

  // Ground puddle glow accent (subtle dark wet sheen)
  const puddleGeo = new THREE.PlaneGeometry(12, 40);
  const puddleMat = new THREE.MeshBasicMaterial({
    color: 0x070c18,
    transparent: true,
    opacity: 0.6,
  });
  const puddleMesh = new THREE.Mesh(puddleGeo, puddleMat);
  puddleMesh.rotation.x = -Math.PI / 2;
  puddleMesh.position.set(0, 0.02, -18);
  group.add(puddleMesh);
  disposables.push(puddleGeo, puddleMat);

  // ==========================================
  // 2. FLANKING CYBER BUILDINGS
  // ==========================================
  const facadeTex = createBuildingFacadeTexture();
  disposables.push(facadeTex);

  const buildingMat = new THREE.MeshStandardMaterial({
    map: facadeTex,
    color: 0x222638,
    roughness: 0.7,
    metalness: 0.3,
  });
  disposables.push(buildingMat);

  // Left building block
  const leftBuildingGeo = new THREE.BoxGeometry(10, 36, 60);
  const leftBuilding = new THREE.Mesh(leftBuildingGeo, buildingMat);
  leftBuilding.position.set(-10, 18, -20);
  group.add(leftBuilding);
  disposables.push(leftBuildingGeo);

  // Right building block
  const rightBuildingGeo = new THREE.BoxGeometry(10, 36, 60);
  const rightBuilding = new THREE.Mesh(rightBuildingGeo, buildingMat);
  rightBuilding.position.set(10, 18, -20);
  group.add(rightBuilding);
  disposables.push(rightBuildingGeo);

  // Back skyline building
  const backBuildingGeo = new THREE.BoxGeometry(32, 50, 8);
  const backBuildingMat = new THREE.MeshStandardMaterial({
    map: facadeTex,
    color: 0x111626,
    roughness: 0.8,
  });
  const backBuilding = new THREE.Mesh(backBuildingGeo, backBuildingMat);
  backBuilding.position.set(0, 24, -48);
  group.add(backBuilding);
  disposables.push(backBuildingGeo, backBuildingMat);

  // ==========================================
  // 3. VIBRANT EMISSIVE NEON SIGNBOARDS (The Samsy Signature)
  // ==========================================
  interface NeonSignInstance {
    mesh: THREE.Mesh;
    baseIntensity: number;
    flickerRate: number;
  }
  const neonSigns: NeonSignInstance[] = [];

  const signConfigs = [
    // Left Wall Signs
    {
      title: "RAVI PATEL",
      subtitle: "GAME DEV // THREE.JS",
      color: "#00f0ff",
      glow: "#0077b6",
      pos: new THREE.Vector3(-4.8, 5.2, 2.0),
      rot: new THREE.Euler(0, Math.PI / 2, 0),
      size: [3.8, 1.4] as [number, number],
      flicker: 0,
    },
    {
      title: "ネオ東京",
      subtitle: "SYS-01 // UNREAL 5",
      color: "#ff007f",
      glow: "#9b0050",
      pos: new THREE.Vector3(-4.8, 8.5, -4.0),
      rot: new THREE.Euler(0, Math.PI / 2, 0),
      size: [3.2, 1.6] as [number, number],
      flicker: 12.0,
    },
    {
      title: "MATRIX",
      subtitle: "AI // GRAPHICS",
      color: "#10b981",
      glow: "#065f46",
      pos: new THREE.Vector3(-4.8, 3.8, -12.0),
      rot: new THREE.Euler(0, Math.PI / 2, 0),
      size: [2.8, 1.2] as [number, number],
      flicker: 0,
    },
    // Right Wall Signs
    {
      title: "SHINJUKU",
      subtitle: "ARCADE // 2026",
      color: "#ffb700",
      glow: "#b45309",
      pos: new THREE.Vector3(4.8, 6.0, 0.0),
      rot: new THREE.Euler(0, -Math.PI / 2, 0),
      size: [3.5, 1.5] as [number, number],
      flicker: 0,
    },
    {
      title: "CYBER CITY",
      subtitle: "WEBGPU // SHADERS",
      color: "#ff007f",
      glow: "#be185d",
      pos: new THREE.Vector3(4.8, 9.2, -7.0),
      rot: new THREE.Euler(0, -Math.PI / 2, 0),
      size: [4.0, 1.6] as [number, number],
      flicker: 8.5,
    },
    {
      title: "SMSY-GEN",
      subtitle: "CREATIVE ENGINEERING",
      color: "#00f0ff",
      glow: "#0284c7",
      pos: new THREE.Vector3(4.8, 4.0, -15.0),
      rot: new THREE.Euler(0, -Math.PI / 2, 0),
      size: [3.4, 1.3] as [number, number],
      flicker: 0,
    },
    // Central Monumental Overhead Cross-Street Billboard
    {
      title: "R A V I",
      subtitle: "PORTFOLIO // INTERACTIVE",
      color: "#ff007f",
      glow: "#00f0ff",
      pos: new THREE.Vector3(0.0, 10.5, -18.0),
      rot: new THREE.Euler(0, 0, 0),
      size: [7.2, 2.6] as [number, number],
      flicker: 0,
    },
  ];

  signConfigs.forEach((cfg) => {
    const tex = createNeonCanvas(cfg.title, cfg.subtitle, cfg.color, cfg.glow);
    disposables.push(tex);

    const signGeo = new THREE.PlaneGeometry(cfg.size[0], cfg.size[1]);
    const signMat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      toneMapped: false, // Prevents ACES filmic clipping for ultra-vibrant bloom
    });
    const signMesh = new THREE.Mesh(signGeo, signMat);
    signMesh.position.copy(cfg.pos);
    signMesh.rotation.copy(cfg.rot);
    group.add(signMesh);
    disposables.push(signGeo, signMat);

    // Dark bracket box behind sign
    const bracketGeo = new THREE.BoxGeometry(cfg.size[0] + 0.15, cfg.size[1] + 0.15, 0.2);
    const bracketMat = new THREE.MeshBasicMaterial({ color: 0x020306 });
    const bracketMesh = new THREE.Mesh(bracketGeo, bracketMat);
    bracketMesh.position.copy(cfg.pos);
    bracketMesh.rotation.copy(cfg.rot);
    bracketMesh.translateZ(-0.11);
    group.add(bracketMesh);
    disposables.push(bracketGeo, bracketMat);

    neonSigns.push({
      mesh: signMesh,
      baseIntensity: 1.0,
      flickerRate: cfg.flicker,
    });
  });

  // ==========================================
  // 4. OVERHEAD CATENARY POWER CABLES
  // ==========================================
  const cableMat = new THREE.LineBasicMaterial({
    color: 0x181e30,
    linewidth: 1,
  });
  disposables.push(cableMat);

  const cableZPositions = [-2, -8, -14, -22, -30];
  cableZPositions.forEach((z) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.9, 8.5 + Math.random() * 2, z),
      new THREE.Vector3(0, 6.0 + Math.random() * 1.5, z + 0.5),
      new THREE.Vector3(4.9, 8.5 + Math.random() * 2, z),
    ]);
    const points = curve.getPoints(32);
    const cableGeo = new THREE.BufferGeometry().setFromPoints(points);
    const cableLine = new THREE.Line(cableGeo, cableMat);
    group.add(cableLine);
    disposables.push(cableGeo);
  });

  // ==========================================
  // 5. SLANTED CYBER RAIN PARTICLES
  // ==========================================
  const RAIN_COUNT = 800;
  const rainGeo = new THREE.BufferGeometry();
  const rainPositions = new Float32Array(RAIN_COUNT * 6); // 2 vertices per streak

  for (let i = 0; i < RAIN_COUNT; i++) {
    const x = (Math.random() - 0.5) * 16;
    const y = Math.random() * 20;
    const z = (Math.random() - 0.5) * 40 - 10;
    const len = 0.5 + Math.random() * 0.4;
    const slantX = 0.08;

    // Start point
    rainPositions[i * 6 + 0] = x;
    rainPositions[i * 6 + 1] = y;
    rainPositions[i * 6 + 2] = z;

    // End point (slanted streak)
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
  // 6. FLOATING NEON MIST / STEAM PARTICLES
  // ==========================================
  const MIST_COUNT = 150;
  const mistGeo = new THREE.BufferGeometry();
  const mistPos = new Float32Array(MIST_COUNT * 3);
  const mistColors = new Float32Array(MIST_COUNT * 3);

  for (let i = 0; i < MIST_COUNT; i++) {
    mistPos[i * 3 + 0] = (Math.random() - 0.5) * 10;
    mistPos[i * 3 + 1] = 0.5 + Math.random() * 12;
    mistPos[i * 3 + 2] = (Math.random() - 0.5) * 35 - 10;

    // Alternate magenta and cyan neon glow
    if (i % 2 === 0) {
      mistColors[i * 3 + 0] = 1.0;
      mistColors[i * 3 + 1] = 0.0;
      mistColors[i * 3 + 2] = 0.5; // Magenta
    } else {
      mistColors[i * 3 + 0] = 0.0;
      mistColors[i * 3 + 1] = 0.95;
      mistColors[i * 3 + 2] = 1.0; // Cyan
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
    group.rotation.y = mouseNormX * 0.04;
    group.rotation.x = -mouseNormY * 0.02;

    // 2. Animate falling rain streaks
    const posAttr = rainGeo.attributes.position as THREE.BufferAttribute;
    const positions = posAttr.array as Float32Array;
    const rainSpeed = 24.0 * delta;

    for (let i = 0; i < RAIN_COUNT; i++) {
      positions[i * 6 + 1] -= rainSpeed;
      positions[i * 6 + 4] -= rainSpeed;

      // Wrap around when reaching ground
      if (positions[i * 6 + 1] < 0) {
        const resetY = 18 + Math.random() * 4;
        const len = 0.5 + Math.random() * 0.4;
        positions[i * 6 + 1] = resetY;
        positions[i * 6 + 4] = resetY - len;
      }
    }
    posAttr.needsUpdate = true;

    // 3. Gentle Brownian drift on neon mist particles
    const mistPosAttr = mistGeo.attributes.position as THREE.BufferAttribute;
    const mPositions = mistPosAttr.array as Float32Array;
    for (let i = 0; i < MIST_COUNT; i++) {
      mPositions[i * 3 + 1] += Math.sin(elapsed * 1.5 + i) * 0.003;
      mPositions[i * 3 + 0] += Math.cos(elapsed * 0.8 + i) * 0.002;
    }
    mistPosAttr.needsUpdate = true;

    // 4. Authentic neon flicker on designated signboards
    neonSigns.forEach((sign) => {
      if (sign.flickerRate > 0) {
        // High frequency intermittent flicker
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
