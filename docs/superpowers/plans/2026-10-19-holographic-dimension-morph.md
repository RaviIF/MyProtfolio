# Holographic Dimension Morph & Shader Viewport System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio's 3D background into an interactive Holographic Dimension Morph where the 3D environment dynamically transforms to match each flagship project (SmartScopy, MimadimPlus, NoPainHeals, Motion AI) on scroll, complete with an authentic game-dev Shader Viewport HUD (`[ LIT ] [ WIREFRAME ] [ X-RAY ]`).

**Architecture:** A modular stage lifecycle controller (`HologramStages.ts`) renders 4 procedural project-specific 3D holograms, handling smooth opacity/scale morphing based on active scroll station. A custom cross-section clipping shader drives interactive medical slicing on SmartScopy, while an interactive floor grid simulates rehabilitation footsteps on NoPainHeals. A global viewport controller swaps material properties across all geometries.

**Tech Stack:** Three.js (r160+), Custom GLSL Shaders, Radix UI / Tailwind CSS, React, TypeScript, Vite.

## Global Constraints

- Preserve clean 60 FPS performance: Total scene geometry budget < 35,000 vertices; max draw calls < 35.
- Zero extra external asset downloads: All holograms generated procedurally with Three.js geometries and shaders for instantaneous zero-latency loading.
- Router base path remains `/MyProtfolio/` for GitHub Pages compatibility.
- Retain existing fluid mouse ripple pass, chromatic aberration, 24fps film grain, and lens vignette.
- Maintain battery-saver auto-throttling on idle.

---

### Task 1: 3D Types & Shader Viewport HUD Component

**Files:**
- Modify: `src/components/3d/types.ts`
- Create: `src/components/3d/ShaderViewportHUD.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: None
- Produces:
  ```ts
  export type ShaderViewportMode = "lit" | "wireframe" | "xray";
  export interface StageUpdateParams {
    activeStationId: string;
    delta: number;
    elapsed: number;
    mouseNormX: number; // -1 to 1
    mouseNormY: number; // -1 to 1
    cursorU: number;    // 0 to 1
    cursorV: number;    // 0 to 1
  }
  ```

- [ ] **Step 1: Update `types.ts` with Viewport Mode & Stage definitions**
  Add `ShaderViewportMode` type union (`"lit" | "wireframe" | "xray"`) and update `StudioSceneOptions` with `initialViewportMode`.

- [ ] **Step 2: Create `ShaderViewportHUD.tsx`**
  Build a sleek, brutalist floating HUD component in the bottom-right viewport with:
  - 3 mode selector buttons: `[ LIT ]`, `[ WIREFRAME ]`, `[ X-RAY ]` with active glowing state (`bg-cyan-500/20 text-cyan-300 border-cyan-400/40`).
  - Monospace telemetry label (`ENGINE BUFFER VIEWPORT`).
  - Keyboard shortcuts (`1` for Lit, `2` for Wireframe, `3` for X-Ray).

- [ ] **Step 3: Verify TypeScript compilation**
  Run `npx tsc --noEmit` and confirm 0 errors.

- [ ] **Step 4: Commit Task 1**
  `git add src/components/3d/ ; git commit -m "feat(3d): add shader viewport HUD and 3d stage types"`

---

### Task 2: Procedural Hologram Stages Generator (`HologramStages.ts`)

**Files:**
- Create: `src/components/3d/HologramStages.ts`
- Test: `npm run build`

**Interfaces:**
- Consumes: `ShaderViewportMode`, `StageUpdateParams` from `types.ts`
- Produces:
  ```ts
  export class HologramStages {
    public group: THREE.Group;
    public update(params: StageUpdateParams): void;
    public setViewportMode(mode: ShaderViewportMode): void;
    public dispose(): void;
  }
  ```

- [ ] **Step 1: Implement Stage 1: SmartScopy Volumetric Bone & Laser Scan Shader**
  Create procedural skull/spinal geometry batch with a custom ShaderMaterial featuring:
  - `uScanHeight` uniform driven by `cursorV` (mouse Y).
  - Geometry below `uScanHeight` renders in solid holographic bone with cyan Fresnel rim.
  - Geometry above renders in wireframe lattice with internal glowing cross-section boundary line.

- [ ] **Step 2: Implement Stage 2: MimadimPlus Procedural CAD Extrusion Grid**
  Create an architectural floorplan with:
  - 2D DXF grid lines with dimension labels (`12.4m`, `8.2m`).
  - Procedural walls that dynamically extrude along the Y-axis based on scroll transition progress into the station.
  - Floor tile clipper highlight zone under cursor.

- [ ] **Step 3: Implement Stage 3: NoPainHeals Interactive Sensor Grid**
  Create an interactive floor mesh that deforms under cursor:
  - Custom vertex shader propagating concentric sine shockwaves (`uWaveCenter`, `uWaveTime`) when mouse moves across the floor.
  - Arcade rehabilitation kiosk cabinet with pulsing health status bar.

- [ ] **Step 4: Implement Stage 4: Motion AI & Vision 3D Pose Rig**
  Create 33 connected joint nodes forming a biomechanical skeletal mannequin:
  - Head and hand joints smoothly rotate to track the cursor.
  - Floating 3D HUD bounding box with monospace confidence telemetry (`YOLOv8 ONNX: 99.2%`, `DIRECTSHOW: 60FPS`).

- [ ] **Step 5: Implement Smooth Cross-Fade Morph Controller & Viewport Mode Swapper**
  Add `update()` method that calculates station transition weights, smoothly lerping group scales (`0.85 -> 1.0`) and opacities (`0 -> 1.0`).
  Add `setViewportMode(mode)` that overrides all materials with wireframe or normal visualization.

- [ ] **Step 6: Verify build**
  Run `npm run build` to confirm clean shader compilation.

- [ ] **Step 7: Commit Task 2**
  `git add src/components/3d/HologramStages.ts ; git commit -m "feat(3d): implement 4 interactive hologram stages with laser slicing and CAD extrusion"`

---

### Task 3: StudioScene Stage Transition Manager & Cursor Raycast Integration

**Files:**
- Modify: `src/components/3d/StudioScene.ts`
- Modify: `src/components/3d/StudioCanvas.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `HologramStages` from Task 2
- Produces:
  ```ts
  // In StudioScene:
  public setActiveStation(stationId: string): void;
  public setViewportMode(mode: ShaderViewportMode): void;
  ```

- [ ] **Step 1: Instantiate `HologramStages` in `StudioScene.ts`**
  Mount `hologramStages.group` into the root scene and invoke `hologramStages.update()` on every frame in `startRenderLoop()`.

- [ ] **Step 2: Connect Cursor UV Coordinates to `HologramStages`**
  Forward normalized cursor coordinates (`cursorU`, `cursorV`, `mouseNormX`, `mouseNormY`) to `hologramStages.update()` for real-time laser slicing and floor sensor ripples.

- [ ] **Step 3: Expose `setActiveStation` and `setViewportMode` in `StudioCanvas.tsx`**
  Add props `activeStationId?: string` and `viewportMode?: ShaderViewportMode` to `StudioCanvasProps` and synchronize with the active scene instance.

- [ ] **Step 4: Verify build**
  Run `npm run build` and ensure 0 errors.

- [ ] **Step 5: Commit Task 3**
  `git add src/components/3d/ ; git commit -m "feat(3d): integrate hologram stages into studio scene and canvas props"`

---

### Task 4: UI Assembly, Viewport Persistence & End-to-End Verification

**Files:**
- Modify: `src/pages/Index.tsx`
- Test: `npm run build` & browser preview

**Interfaces:**
- Consumes: `ShaderViewportHUD` from Task 1, updated `StudioCanvas` from Task 3
- Produces: Complete interactive experience on `http://localhost:8088/MyProtfolio/`

- [ ] **Step 1: Manage `viewportMode` state in `Index.tsx`**
  Add `viewportMode` state with `localStorage` persistence (`ravi_portfolio_viewport_mode`).

- [ ] **Step 2: Mount `ShaderViewportHUD` and pass props to `StudioCanvas`**
  Pass `activeStationId` and `viewportMode` into `<StudioCanvas />`. Mount `<ShaderViewportHUD mode={viewportMode} onModeChange={setViewportMode} />`.

- [ ] **Step 3: Run production build**
  Run `npm run build` and verify bundle outputs cleanly.

- [ ] **Step 4: Manual Verification in Browser**
  Verify at `http://localhost:8088/MyProtfolio/`:
  1. Scrolling to SmartScopy displays the 3D anatomical skull; moving cursor up/down slices through the model with a glowing cyan laser plane.
  2. Scrolling to MimadimPlus displays the architectural blueprint extruding walls in 3D.
  3. Scrolling to NoPainHeals displays the reactive rehabilitation floor emitting ripple shockwaves.
  4. Scrolling to Motion AI displays the 3D skeletal rig tracking cursor motion.
  5. Clicking `[ WIREFRAME ]` or `[ X-RAY ]` instantly transforms all 3D geometries.

- [ ] **Step 5: Commit Task 4**
  `git add src/pages/Index.tsx dist/ ; git commit -m "feat: complete master assembly of holographic dimension morph and shader viewport"`
