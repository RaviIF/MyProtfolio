# Design Specification: 3D Spatial Studio Background & Scroll Camera System

- **Author**: Ravi Patel & AI Engineering Pair
- **Date**: 2026-10-17
- **Branch**: `feat/portfolio-modernization`
- **Target File**: `docs/superpowers/specs/2026-10-17-3d-spatial-studio-background-design.md`
- **Status**: Approved by User

---

## 1. Executive Summary & Inspiration

Modernize Ravi Patel's personal portfolio into an Awwwards-tier 3D interactive experience inspired by **Vertex3D** (`vertex3d.asia`), **Bruno Simon**, and **Apple visionOS spatial design**. The website will feature a full-page, high-performance WebGL 3D background canvas rendered behind the existing sleek obsidian glass UI.

As the visitor scrolls down the single-page application, a cinematic 3D camera smoothly flies along a predefined spline rail through a stylized **Spatial Tech Studio & Dev Lab**, showcasing distinct physical stations that map directly to Ravi Patel's real-world engineering projects:
1. **Station 1 (Dev Command Center)**: Triple curved holographic displays running Unreal C++ code and an XR headset with pulsing LEDs (*Hero*).
2. **Station 2 (CAD Architectural Matrix)**: Floating procedural wireframe walls and architectural blueprints (*About / MimadimPlus*).
3. **Station 3 (Medical XR & Kiosk Bay)**: Floating 3D anatomical skull/bone hologram on a surgical cart (*SmartScopy*) beside an illuminated arcade kiosk cabinet with floor projection (*NoPainHeals*).
4. **Station 4 (Hardware Telemetry & Cryptography Core)**: Hardened Linux server rack with glowing status LEDs and fiber trunks (*System Guard* & Kiosk Security).
5. **Station 5 (Comms Array & Night City Skyline)**: High-altitude transmission beacon overlooking an expansive cyberpunk night skyline (*Contact & Footer*).

---

## 2. Technical Architecture

### 2.1 Layer Hierarchy & Viewport Structure
```
[ Viewport ]
  │
  ├── [ HTML / Tailwind UI Layer ] (z-index: 10, pointer-events: auto)
  │     ├── Navigation (with 3D toggle pill: [3D: ON/OFF])
  │     ├── Hero, About, Experience, Projects, Skills, Contact
  │     └── Backdrops: obsidian glass (rgba(14, 16, 26, 0.65)), backdrop-blur-md
  │
  ├── [ Loading Screen Layer ] (z-index: 20, fixed fullscreen, transitions out)
  │     └── Minimalist glowing cyan circular SVG ring + percentage readout
  │
  └── [ WebGL 3D Canvas Layer ] (z-index: 0, fixed inset: 0, pointer-events: none)
        ├── Three.js Scene (`three`)
        ├── WebGLRenderer (antialias, sRGBEncoding, ACESFilmicToneMapping)
        ├── PerspectiveCamera (FOV: 45, Near: 0.1, Far: 1000)
        ├── EffectComposer:
        │     ├── RenderPass
        │     └── UnrealBloomPass (threshold: 0.8, strength: 0.45, radius: 0.4)
        ├── Lighting Rig:
        │     ├── AmbientLight (color: 0x070b19, intensity: 0.8)
        │     ├── DirectionalLight (Key Light, color: 0x22d3ee, intensity: 1.2)
        │     ├── PointLights (Cyan & Violet accent lights on workstations)
        │     └── Emissive Materials on monitors & holograms
        └── Scene Meshes:
              ├── Stylized Low-Poly 3D Studio Room (.glb / Draco compressed)
              └── Procedural Fallback Geometry Engine
```

### 2.2 Dependencies
- `three` & `@types/three`: Core WebGL library.
- `gsap`: Timeline and tweening engine for camera lerping and scroll tracking.
- `three/examples/jsm/loaders/GLTFLoader`: GLTF / GLB model loader.
- `three/examples/jsm/loaders/DRACOLoader`: Multi-threaded mesh decompression.
- `three/examples/jsm/postprocessing/EffectComposer`: Post-processing pipeline.
- `three/examples/jsm/postprocessing/RenderPass`: Base render pass.
- `three/examples/jsm/postprocessing/UnrealBloomPass`: Glowing neon bloom for monitors and holograms.

---

## 3. Cinematic Camera Waypoints (Scroll-Linked Rail)

The camera's position `(x, y, z)` and look-at target `(tx, ty, tz)` are interpolated smoothly based on normalized scroll progress `p ∈ [0.0, 1.0]`:

| Section | Scroll Range | Camera Position (x, y, z) | Look-At Target (tx, ty, tz) | Visual Focus & Scene Elements |
|---|---|---|---|---|
| **Hero** | 0.00 – 0.15 | `(0.0, 1.4, 3.2)` | `(0.0, 1.2, 0.0)` | Dev Command Center. Close-up on curved monitors, keyboard, glowing XR headset. Mouse parallax enabled (±0.2 tilt). |
| **About** | 0.16 – 0.32 | `(2.2, 1.8, 2.6)` | `(1.5, 1.1, -0.5)` | Glides right toward CAD drafting table with floating wireframe building blueprints (*MimadimPlus*). |
| **Experience** | 0.33 – 0.52 | `(1.0, 2.1, 1.2)` | `(0.0, 0.9, -2.0)` | Descends down central studio corridor. Soft floor reflections, architectural pillars. |
| **Projects** | 0.53 – 0.74 | `(-2.4, 1.6, 0.5)` | `(-1.8, 1.2, -1.8)` | Frames the Medical XR Cart with floating rotating 3D skull/bone hologram (*SmartScopy*) & Arcade Kiosk cabinet (*NoPainHeals*). |
| **Skills & Services** | 0.75 – 0.88 | `(-0.8, 1.3, -1.5)` | `(0.0, 1.4, -4.0)` | Swoops past the Telemetry & Cryptography server rack with rhythmic pulsing status LEDs. |
| **Contact & Footer** | 0.89 – 1.00 | `(0.0, 3.5, 5.0)` | `(0.0, 1.0, -1.0)` | Wide panoramic pull-back overlooking entire illuminated studio lab with the night city skyline visible outside the window. |

---

## 4. Performance & Reliability Safeguards

1. **Polygon Budget**: Total scene geometry capped under 50,000 polygons to guarantee 60fps on mobile devices and integrated GPUs.
2. **Device Pixel Ratio Clamp**:
   ```typescript
   const dpr = Math.min(window.devicePixelRatio, 1.75);
   renderer.setPixelRatio(dpr);
   ```
3. **Adaptive Battery Throttle**: If no scroll or mouse movement occurs for 3.0 seconds, rendering drops from 60fps to 15fps or idles to conserve laptop battery and prevent GPU fan spin.
4. **User Control**: Header includes a subtle toggle switch `[3D: ON/OFF]` stored in `localStorage` so users on power-saving mode can disable WebGL rendering at will.
5. **Fail-Safe WebGL Fallback**: If WebGL context creation fails or throws `WebGL unsupported`, the canvas cleanly unmounts and the page maintains the existing CSS obsidian dark theme without error.

---

## 5. Loading Sequence & UX

1. **Initial Mount (0ms)**: Page loads with HTML/CSS immediately visible.
2. **Minimalist Loader**: A sleek cyan progress ring (Vertex3D style) appears centered over the canvas with micro-text: `INITIALIZING SPATIAL LAB... [XX%]`.
3. **Asset Streaming**: Draco worker streams and parses the 3D studio mesh.
4. **First Frame Render**: Upon rendering the first valid frame, the loader smoothly fades out over 400ms (`opacity: 0`).
5. **Interactive Lifecycle**: Camera attaches to scroll listeners via GSAP and `requestAnimationFrame`.

---

## 6. Testing & Acceptance Criteria

1. **Frame Rate**: Minimum 55fps sustained during scroll on desktop Chrome, Edge, and Firefox.
2. **Zero Layout Regressions**: All existing text, links, modals (ProjectDetailModal), and forms (Contact) remain 100% interactive and legible.
3. **Mobile Usability**: Touch dragging scrolls the page smoothly; 3D camera tracks touch position without jitter.
4. **Clean TypeScript**: Zero type errors with `npx tsc --noEmit`.
5. **Build Verification**: Clean production bundle with `npm run build`.
