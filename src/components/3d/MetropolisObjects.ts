import * as THREE from "three";

/**
 * Creates dynamic canvas texture for brutalist CAD blueprint coordinate insets.
 */
function createBlueprintTexture(title: string, spec: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(10, 15, 26, 0.9)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Precision cyan grid
  ctx.strokeStyle = "rgba(34, 211, 238, 0.2)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Cyan outer frame with corner ticks
  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 2;
  ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

  ctx.fillStyle = "#22d3ee";
  ctx.fillRect(4, 4, 12, 12);
  ctx.fillRect(canvas.width - 16, 4, 12, 12);
  ctx.fillRect(4, canvas.height - 16, 12, 12);
  ctx.fillRect(canvas.width - 16, canvas.height - 16, 12, 12);

  // Technical typography
  ctx.font = "bold 20px monospace";
  ctx.fillStyle = "#38bdf8";
  ctx.fillText(`■ ${title}`, 24, 52);

  ctx.font = "14px monospace";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText(spec, 24, 96);
  ctx.fillText("CAD / DXF ELEVATION // LEVEL +120m", 24, 132);

  // Dimension line
  ctx.strokeStyle = "rgba(56, 189, 248, 0.7)";
  ctx.beginPath();
  ctx.moveTo(24, 180);
  ctx.lineTo(canvas.width - 24, 180);
  ctx.stroke();

  ctx.fillStyle = "#38bdf8";
  ctx.fillText("◄── 24.8m ──►", canvas.width / 2 - 50, 174);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Creates texture for the wet obsidian pavement floor.
 */
function createWetObsidianTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  // Deep dark obsidian ground
  ctx.fillStyle = "#080b12";
  ctx.fillRect(0, 0, 512, 512);

  // Large brutalist paving tile lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 2;
  for (let i = 0; i <= 512; i += 64) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 512);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(512, i);
    ctx.stroke();
  }

  // Subtle wet puddle reflective patches
  for (let p = 0; p < 8; p++) {
    const rx = Math.random() * 400 + 50;
    const ry = Math.random() * 400 + 50;
    const rad = Math.random() * 60 + 30;
    const grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, rad);
    grad.addColorStop(0, "rgba(245, 158, 11, 0.08)");
    grad.addColorStop(1, "rgba(8, 11, 18, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(rx, ry, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 12);
  return texture;
}

export interface MetropolisEnvironment {
  group: THREE.Group;
  update: (delta: number, elapsed: number, mouseNormX: number, mouseNormY: number) => void;
  dispose: () => void;
}

/**
 * Builds the complete Neo-Brutalist Cyber-Metropolis (Hybrid Twilight) environment.
 */
export function createMetropolisEnvironment(): MetropolisEnvironment {
  const root = new THREE.Group();

  // Animatable references
  const godRaysGroup = new THREE.Group();
  let dustPoints: THREE.Points | null = null;
  const blueprintMeshes: THREE.Mesh[] = [];

  // =========================================================================
  // 1. WET OBSIDIAN GROUND PLANE
  // =========================================================================
  const floorGeo = new THREE.PlaneGeometry(64, 64);
  const floorTex = createWetObsidianTexture();
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex,
    color: 0x060910,
    metalness: 0.85,
    roughness: 0.18, // slick, wet reflection
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  root.add(floor);

  // =========================================================================
  // 2. COLOSSAL BRUTALIST CONCRETE MONOLITHS & SKYSCRAPERS
  // =========================================================================
  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0x111624,
    metalness: 0.35,
    roughness: 0.75, // matte heavy concrete
  });

  const concreteAccentMat = new THREE.MeshStandardMaterial({
    color: 0x0c101a,
    metalness: 0.5,
    roughness: 0.6,
  });

  const monolithConfigs = [
    // --- Foreground Mega-Pillars (Canyon Entrance) ---
    { w: 4.5, h: 28.0, d: 4.5, x: -7.5, z: 8.0, ry: 0.08 },
    { w: 4.5, h: 32.0, d: 4.5, x: 7.5, z: 8.0, ry: -0.08 },

    // --- Midground Monumental Atrium Towers ---
    { w: 5.5, h: 36.0, d: 5.5, x: -9.0, z: -2.0, ry: 0.12 },
    { w: 6.0, h: 42.0, d: 6.0, x: 9.5, z: -3.0, ry: -0.15 },

    // --- Interior Brutalist Gallery Columns ---
    { w: 2.2, h: 18.0, d: 2.2, x: -4.5, z: -10.0, ry: 0 },
    { w: 2.2, h: 18.0, d: 2.2, x: 4.5, z: -10.0, ry: 0 },
    { w: 2.2, h: 18.0, d: 2.2, x: -4.5, z: -18.0, ry: 0 },
    { w: 2.2, h: 18.0, d: 2.2, x: 4.5, z: -18.0, ry: 0 },

    // --- Colossal Background Skyline Towers ---
    { w: 8.0, h: 56.0, d: 8.0, x: -14.0, z: -28.0, ry: 0.2 },
    { w: 10.0, h: 64.0, d: 10.0, x: 12.0, z: -32.0, ry: -0.18 },
    { w: 9.0, h: 72.0, d: 9.0, x: -2.0, z: -38.0, ry: 0.05 },
    { w: 7.0, h: 48.0, d: 7.0, x: 16.0, z: -20.0, ry: -0.25 },
    { w: 7.0, h: 52.0, d: 7.0, x: -18.0, z: -16.0, ry: 0.22 },
  ];

  monolithConfigs.forEach((cfg) => {
    const geo = new THREE.BoxGeometry(cfg.w, cfg.h, cfg.d);
    // Anchor at base
    geo.translate(0, cfg.h / 2, 0);

    const mat = cfg.h > 40 ? concreteAccentMat : concreteMat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(cfg.x, 0, cfg.z);
    mesh.rotation.y = cfg.ry;
    root.add(mesh);

    // Beveled architectural top caps
    const capGeo = new THREE.BoxGeometry(cfg.w * 1.05, 0.8, cfg.d * 1.05);
    const cap = new THREE.Mesh(capGeo, concreteAccentMat);
    cap.position.set(cfg.x, cfg.h, cfg.z);
    cap.rotation.y = cfg.ry;
    root.add(cap);
  });

  // Cantilevered Sky Bridges spanning between towers
  const bridgeConfigs = [
    { w: 15.0, h: 2.2, d: 3.5, x: 0, y: 16.0, z: 8.0 },
    { w: 18.5, h: 2.5, d: 4.0, x: 0.2, y: 22.0, z: -2.5 },
    { w: 16.0, h: 3.0, d: 4.5, x: -1.0, y: 28.0, z: -24.0 },
  ];

  bridgeConfigs.forEach((b) => {
    const bridgeGeo = new THREE.BoxGeometry(b.w, b.h, b.d);
    const bridge = new THREE.Mesh(bridgeGeo, concreteMat);
    bridge.position.set(b.x, b.y, b.z);
    root.add(bridge);

    // Under-bridge illuminated accent strip
    const stripGeo = new THREE.PlaneGeometry(b.w * 0.9, 0.4);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
    const strip = new THREE.Mesh(stripGeo, stripMat);
    strip.rotation.x = Math.PI / 2;
    strip.position.set(b.x, b.y - b.h / 2 - 0.02, b.z);
    root.add(strip);
  });

  // =========================================================================
  // 3. CYBER BLUEPRINT INSETS (Etched into concrete faces)
  // =========================================================================
  const blueprintConfigs = [
    { title: "SMARTSCOPY // XR DOCK", spec: "LATENCY < 100MS // STEREO OT", x: -5.2, y: 6.0, z: 7.9, ry: 0 },
    { title: "MIMADIM // CAD ENGINE", spec: "PROCEDURAL DXF-TO-3D // UE5", x: 5.2, y: 7.5, z: 7.9, ry: 0 },
    { title: "NOPAINHEALS // SENSORS", spec: "CLINICAL GAIT REHAB // E2EE", x: -6.7, y: 5.0, z: -2.1, ry: Math.PI / 2 },
    { title: "VISION-AI // DIRECTSHOW", spec: "YOLOv8 + ONNX // MOTION 60FPS", x: 6.7, y: 6.5, z: -3.1, ry: -Math.PI / 2 },
  ];

  blueprintConfigs.forEach((bp) => {
    const tex = createBlueprintTexture(bp.title, bp.spec);
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.8), mat);
    mesh.position.set(bp.x, bp.y, bp.z);
    mesh.rotation.y = bp.ry;
    root.add(mesh);
    blueprintMeshes.push(mesh);
  });

  // =========================================================================
  // 4. VOLUMETRIC GOD RAYS (Diagonal Golden Sunlight Shafts)
  // =========================================================================
  const godRayShader = {
    uniforms: {
      uColor: { value: new THREE.Color(0xf59e0b) }, // Warm 3500K golden sunlight
      uIntensity: { value: 0.38 },
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
      uniform vec3 uColor;
      uniform float uIntensity;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        // Vertical beam falloff (brightest at top sky entrance)
        float topFade = pow(1.0 - vUv.y, 1.6);
        // Edge horizontal soft fade
        float edgeFade = sin(vUv.x * 3.14159);
        // Atmospheric shimmer wave
        float shimmer = sin(vUv.y * 14.0 - uTime * 1.8) * 0.08 + 0.92;

        float alpha = topFade * edgeFade * shimmer * uIntensity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
  };

  const rayMat = new THREE.ShaderMaterial({
    vertexShader: godRayShader.vertexShader,
    fragmentShader: godRayShader.fragmentShader,
    uniforms: THREE.UniformsUtils.clone(godRayShader.uniforms),
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  // Spawn 5 volumetric diagonal sunbeams
  const rayPlanes = [
    { w: 7.0, h: 32.0, x: -1.0, y: 15.0, z: 4.0, rz: 0.38, rx: 0.15 },
    { w: 9.0, h: 36.0, x: 2.5, y: 18.0, z: -5.0, rz: 0.42, rx: 0.1 },
    { w: 6.5, h: 28.0, x: -4.0, y: 14.0, z: -14.0, rz: 0.35, rx: 0.2 },
    { w: 10.0, h: 42.0, x: 1.0, y: 22.0, z: -22.0, rz: 0.45, rx: 0.12 },
    { w: 8.0, h: 34.0, x: -2.5, y: 16.0, z: 12.0, rz: 0.36, rx: 0.18 },
  ];

  rayPlanes.forEach((r) => {
    const geo = new THREE.PlaneGeometry(r.w, r.h);
    const mesh = new THREE.Mesh(geo, rayMat);
    mesh.position.set(r.x, r.y, r.z);
    mesh.rotation.z = r.rz;
    mesh.rotation.x = r.rx;
    godRaysGroup.add(mesh);
  });

  root.add(godRaysGroup);

  // =========================================================================
  // 5. 500 ATMOSPHERIC GOLD & CYAN DUST PARTICLES
  // =========================================================================
  const particleCount = 500;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const particleSpeeds = new Float32Array(particleCount);

  const goldCol = new THREE.Color(0xf59e0b);
  const cyanCol = new THREE.Color(0x38bdf8);

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 3;
    particlePositions[idx] = (Math.random() - 0.5) * 28;
    particlePositions[idx + 1] = Math.random() * 24;
    particlePositions[idx + 2] = (Math.random() - 0.5) * 48 - 6;

    // Mix between golden sunlight dust and cyan cyber motes
    const isGold = Math.random() > 0.4;
    const col = isGold ? goldCol : cyanCol;
    particleColors[idx] = col.r;
    particleColors[idx + 1] = col.g;
    particleColors[idx + 2] = col.b;

    particleSpeeds[i] = 0.08 + Math.random() * 0.16;
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.055,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  dustPoints = new THREE.Points(particleGeo, particleMat);
  root.add(dustPoints);

  // =========================================================================
  // UPDATE ANIMATION LOOP
  // =========================================================================
  const update = (delta: number, elapsed: number, mouseNormX: number, mouseNormY: number) => {
    // 1. Interactive Sunbeam Sway
    // Mouse movement shifts the angle of the volumetric god rays
    godRaysGroup.rotation.y = mouseNormX * 0.06;
    godRaysGroup.rotation.z = mouseNormY * 0.04;
    rayMat.uniforms.uTime.value = elapsed;

    // 2. Gentle breathing pulse on cyan blueprint insets
    const bpPulse = 0.75 + Math.sin(elapsed * 2.2) * 0.15;
    blueprintMeshes.forEach((m) => {
      (m.material as THREE.MeshBasicMaterial).opacity = bpPulse;
    });

    // 3. Drift dust motes with Brownian turbulence and continuous vertical fall
    if (dustPoints) {
      const posAttr = dustPoints.geometry.attributes.position as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        // Vertical gentle drift downward
        positions[idx + 1] -= delta * particleSpeeds[i];
        if (positions[idx + 1] < 0.2) {
          positions[idx + 1] = 24.0;
          positions[idx] = (Math.random() - 0.5) * 28;
          positions[idx + 2] = (Math.random() - 0.5) * 48 - 6;
        }

        // Sub-pixel horizontal micro-drift
        positions[idx] += Math.sin(elapsed * 0.75 + i * 0.5) * delta * 0.04;
        positions[idx + 2] += Math.cos(elapsed * 0.65 + i * 0.5) * delta * 0.04;
      }

      posAttr.needsUpdate = true;
    }
  };

  const dispose = () => {
    root.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else if (obj.material) {
          obj.material.dispose();
        }
      }
    });
    root.clear();
  };

  return { group: root, update, dispose };
}
