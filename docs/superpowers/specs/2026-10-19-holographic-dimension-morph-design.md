# Design Specification: 3D Holographic Dimension Morph & Shader Viewport System

- **Author**: Ravi Patel & AI Engineering Pair
- **Date**: 2026-10-19
- **Branch**: `feat/portfolio-modernization`
- **Target File**: `docs/superpowers/specs/2026-10-19-holographic-dimension-morph-design.md`
- **Status**: Approved by User

---

## 1. Executive Summary

Elevate Ravi Patel's personal portfolio WebGL background from a static 3D studio into an Awwwards / FWA-grade **Holographic Dimension Morph** experience. Instead of remaining in a single unchanging room, the 3D world physically transforms into the thematic universe of whichever flagship project the visitor is currently viewing.

Key innovations:
1. **Dynamic Stage Morphing**: Station transitions smoothly dissolve, re-scale, and materialize project-specific 3D holographic models in synchronization with scroll progress.
2. **Interactive Flagship Holograms**:
   - **Station 02 (SmartScopy)**: Floating 3D anatomical skull/spine with an interactive cursor-driven **cyan surgical laser scan plane** cutting through the model in real time.
   - **Station 03 (MimadimPlus)**: Procedural architectural blueprint grid where **walls and rooms extrude upward in 3D** as the user scrolls.
   - **Station 04 (NoPainHeals)**: Interactive **pressure-sensitive sensor floor** producing shockwaves and harmonic ripples under the mouse.
   - **Station 05 (Motion AI & Vision)**: Floating **3D neural joint skeleton** tracking cursor motion with orbiting confidence HUD badges.
3. **Unreal Engine "Shader Viewport" HUD**: A game-developer control bar allowing visitors to toggle viewport rendering modes (`LIT`, `WIREFRAME`, `X-RAY / NORMALS`) across all 3D geometries.
4. **Flawless 60 FPS Performance**: Lightweight procedural Three.js geometry, shared shaders, clamped retina pixel ratios, and automatic idle throttling.

---

## 2. Morphing Architecture & Transition Lifecycle

```
[ Active Slide / Station Index (0 to 7) ]
                    │
                    ▼
      [ StageTransitionManager ]
  ┌─────────────────┴─────────────────┐
  ▼                                   ▼
[ Camera Controller ]       [ Stage Hologram Morph ]
  • Waypoint Spline Interpolation     • Cross-fade Opacity (0.0 ↔ 1.0)
  • Dynamic Focal Distance            • Radial Particle Dissolve & Scale
  • Mouse Parallax Dampening          • Raycast Cursor Plane Intersection
```

### Stage Transition Rules:
- When active station changes, the outgoing stage elements execute a graceful transition (`opacity: 1 -> 0`, `scale: 1 -> 0.85` over 450ms).
- The incoming stage elements materialize (`scale: 0.85 -> 1.0`, `opacity: 0 -> 1` over 550ms with `easeOutCubic`).
- Ambient dust particles disperse slightly during transitions, creating atmospheric movement.

---

## 3. Flagship Interactive Holograms Breakdown

### 3.1 Station 00 & 01: Dev Command Center & Spatial Core
- **Visuals**: Futuristic command terminal with triple holographic code screens, glowing emerald XR headset, and a rotating hyper-dimensional tesseract core.
- **Interactivity**: Mouse cursor shifts camera angle with tactile 3D parallax; fluid mouse ripple pass smears liquid light across the room.

### 3.2 Station 02: SmartScopy (Live Surgical XR Platform)
- **Visuals**: Semi-transparent 3D anatomical skull/vertebrae model rendered with cyan/emerald holographic Fresnel materials.
- **Interactive Laser Scan Shader**:
  - The cursor's normalized Y position directly controls the vertical height of a cutting plane.
  - Geometry below the plane renders in solid holographic bone; geometry above renders with an internal wireframe lattice.
  - A bright cyan laser line (`#22d3ee`) with emissive bloom marks the exact cross-section boundary.

### 3.3 Station 03: MimadimPlus (Procedural CAD-to-3D Engine)
- **Visuals**: Infinite dark obsidian drafting plane with glowing cyan DXF dimension lines, angle arcs, and coordinate callouts.
- **Interactive Procedural Extrusion**:
  - As the user scrolls into the station, the 2D floorplan extrudes upwards into 3D walls and doorway lintels.
  - Hovering cursor over rooms highlights floor zones with procedural geometric tile patterns, demonstrating the tile clipping engine.

### 3.4 Station 04: NoPainHeals (Interactive Therapy Kiosk)
- **Visuals**: Arcade rehabilitation kiosk cabinet surrounded by an interactive floor-projection target arena.
- **Interactive Sensor Grid**:
  - Floor plane consists of a high-density interactive point/wire grid.
  - Mouse movement over the floor triggers concentric expanding radar circles and vertical harmonic waves, simulating footstep pressure sensors.

### 3.5 Station 05: Motion AI & Vision Games (Computer Vision)
- **Visuals**: 3D connected skeletal pose rig (33 landmarks) mirroring human biomechanics.
- **Interactivity**:
  - The rig smoothly tilts and points towards cursor position.
  - Floating 3D bounding boxes with monospace telemetry overlays (`TRACK: 99.4%`, `DIRECTSHOW: 60FPS`) rotate around the mannequin.

---

## 4. The Game Engine "Shader Viewport" HUD

A fixed brutalist control pill integrated cleanly into the navigation overlay:

```
┌───────────────────────────────────────────────┐
│  VIEWPORT: [ LIT ]  [ WIREFRAME ]  [ X-RAY ]  │
└───────────────────────────────────────────────┘
```

### Modes & Material Implementations:
1. **`LIT` (Default)**:
   - Full standard PBR shaders, point lights, bloom post-processing, and interactive fluid mouse ripples.
2. **`WIREFRAME`**:
   - Overrides material properties to `wireframe: true` with electric cyan (`#22d3ee`) and violet (`#818cf8`) colors, displaying polygon topologies.
3. **`X-RAY / NORMALS`**:
   - Custom normal shader outputting transformed surface normal vectors (`vec3 color = vNormal * 0.5 + 0.5;`) combined with Fresnel edge illumination.

---

## 5. Performance, Memory & Battery Optimization

- **Geometry Budget**: Total scene vertices maintained below 35,000 across all 4 stages.
- **Draw Call Budget**: Max 35 WebGL draw calls per frame through shared materials.
- **PixelRatio Clamping**: Capped at `1.5x` max on retina screens to preserve GPU fillrate.
- **Idle & Visibility Throttling**:
  - Automatically throttles to ~15 FPS after 3 seconds of inactivity.
  - Cancels `requestAnimationFrame` when `document.hidden` is true (background tab).
- **Graceful WebGL Fallback**: If WebGL context is lost or unsupported, smoothly unmounts canvas and preserves the sleek dark CSS UI.

---

## 6. Implementation Deliverables

1. `src/components/3d/HologramStages.ts`: Procedural generation and lifecycle management for the 4 flagship project holograms (SmartScopy Laser Scan, Mimadim CAD Extrusion, NoPainHeals Sensor Floor, Motion AI Rig).
2. `src/components/3d/ShaderViewportHUD.tsx`: Floating game-dev viewport mode switcher (`LIT`, `WIREFRAME`, `X-RAY`).
3. `src/components/3d/StudioScene.ts`: Integration of stage transition cross-fading and global shader mode dispatching.
4. `src/pages/Index.tsx`: Mount viewport mode switcher and wire state.
