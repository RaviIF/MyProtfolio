# Neo-Brutalist Cyber-Metropolis 3D Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely replace the old 3D background with a monumental, Awwwards-grade **Neo-Brutalist Cyber-Metropolis** in a **Hybrid Twilight** aesthetic (Blade Runner 2049 × Tadao Ando concrete architecture), featuring volumetric golden sunbeams, colossal charcoal monoliths, cyan blueprint vectors, wet obsidian ground reflections, and an 8-station fly-through, while removing the debug shader viewport HUD.

**Architecture:** A dedicated procedural environment module (`MetropolisObjects.ts`) constructs the brutalist cityscape, volumetric light shafts, and wet stone plane. The camera controller (`CameraController.ts`) glides through 8 architectural waypoints synchronized with scroll. `StudioScene.ts` coordinates warm sunbeam lighting, twilight ambient fill, and fluid ripples, while `Index.tsx` retains a pure, clutter-free presentation.

**Tech Stack:** Three.js, Custom GLSL Shaders, React, TypeScript, Vite.

## Global Constraints

- Solid 60 FPS performance: Total scene geometry budget < 32,000 vertices; max draw calls < 28.
- Zero external GLTF asset dependencies: All architecture, light rays, and blueprints generated procedurally for instantaneous zero-latency load.
- Seamless fluid mouse ripples, 24fps film grain, lens vignette, and chromatic aberration preserved in post-processing.
- Remove all debug viewport buttons (`ShaderViewportHUD`) to keep the UI clean and editorial.
- Router base path remains `/MyProtfolio/` for GitHub Pages compatibility.

---

### Task 1: Procedural Neo-Brutalist Metropolis Environment (`MetropolisObjects.ts`)

**Files:**
- Create: `src/components/3d/MetropolisObjects.ts`
- Test: `npm run build`

**Interfaces:**
- Produces:
  ```ts
  export interface MetropolisEnvironment {
    group: THREE.Group;
    update: (delta: number, elapsed: number, mouseNormX: number, mouseNormY: number) => void;
    dispose: () => void;
  }
  export function createMetropolisEnvironment(): MetropolisEnvironment;
  ```

- [x] **Step 1: Create `MetropolisObjects.ts` with Colossal Brutalist Monoliths**
  Generate towering beveled concrete towers, angular pillars, cantilevered sky bridges, and architectural courtyards using dark charcoal matte materials with ambient occlusion.

- [x] **Step 2: Implement Volumetric God Rays (Light Shafts)**
  Create diagonal volumetric sunbeam geometry with a custom additive blending shader blending warm golden light (`#f59e0b` / `#fbbf24`) with soft exponential edge falloff and depth fading.

- [x] **Step 3: Implement Reflective Wet Obsidian Ground Plane**
  Construct a reflective dark stone floor plane reflecting the overhead sunbeams and monolithic pillars.

- [x] **Step 4: Implement Cyan CAD Blueprint Insets**
  Etch precision glowing cyan (`#22d3ee`) coordinate grids and architectural vector lines into stone faces.

- [x] **Step 5: Implement 500 Atmospheric Gold & Cyan Dust Motes**
  Generate 500 floating particles that drift through the golden sunbeams with Brownian turbulence and continuous vertical fall wrap-around.

- [x] **Step 6: Verify build**
  Run `npx tsc --noEmit` to ensure zero compilation errors.

- [x] **Step 7: Commit Task 1**
  `git add src/components/3d/MetropolisObjects.ts ; git commit -m "feat(3d): implement procedural Neo-Brutalist Cyber-Metropolis 3D environment"`

---

### Task 2: 8-Station Metropolis Camera Spline Waypoints

**Files:**
- Modify: `src/components/3d/CameraController.ts`
- Test: `npm run build`

**Interfaces:**
- Updates `CAMERA_WAYPOINTS` array to match the 8 brutalist architectural stations.

- [x] **Step 1: Update `CameraController.ts` with 8 Metropolis Waypoints**
  Update coordinates and targets for all 8 stations:
  - 00 `home`: High-altitude canyon `(0.0, 14.0, 18.0)` -> `(0.0, 4.0, 0.0)`
  - 01 `about`: Monumental light hall `(3.5, 7.5, 10.0)` -> `(-1.0, 2.5, 0.0)`
  - 02 `smartscopy`: Suspended medical gallery `(-4.5, 3.2, 5.0)` -> `(0.0, 2.8, -2.0)`
  - 03 `mimadim`: Architectural drafting terrace `(4.2, 2.8, 1.0)` -> `(-0.5, 1.5, -4.0)`
  - 04 `nopainheals`: Interactive sensor atrium `(-3.2, 2.2, -3.5)` -> `(1.0, 1.8, -7.0)`
  - 05 `vision-ai`: Telemetry data pylon `(2.8, 4.5, -7.5)` -> `(-1.5, 3.0, -11.0)`
  - 06 `skills`: Monumental archway `(-1.0, 6.0, -12.0)` -> `(0.0, 3.5, -16.0)`
  - 07 `contact`: Horizon observation deck `(0.0, 12.0, -16.0)` -> `(0.0, 14.0, -32.0)`

- [x] **Step 2: Verify build**
  Run `npx tsc --noEmit` and confirm 0 errors.

- [x] **Step 3: Commit Task 2**
  `git add src/components/3d/CameraController.ts ; git commit -m "feat(3d): configure 8-station fly-through spline waypoints for metropolis"`

---

### Task 3: StudioScene Hybrid Twilight Lighting & Integration

**Files:**
- Modify: `src/components/3d/StudioScene.ts`
- Modify: `src/components/3d/StudioCanvas.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `createMetropolisEnvironment` from `MetropolisObjects.ts`

- [x] **Step 1: Update StudioScene Lighting Rig for Hybrid Twilight**
  - Key Sun Light: Directional light at `(8, 16, 10)` with warm golden color (`0xf59e0b`, intensity 2.2).
  - Ambient Twilight: Deep navy blue ambient fill (`0x0b1120`, intensity 1.1).
  - Rim Lights: Cyan edge accent (`0x22d3ee`, intensity 1.8) and warm amber accent (`0xfbbf24`, intensity 1.4).
  - Scene Fog: Deep twilight navy exponential fog (`new THREE.FogExp2(0x060812, 0.038)`).

- [x] **Step 2: Replace Old Environment & HologramStages with MetropolisEnvironment**
  Instantiate `createMetropolisEnvironment()` and update in render loop with delta, elapsed, and mouse coordinates.
  Clean up obsolete `hologramStages` references.

- [x] **Step 3: Update `StudioCanvas.tsx` Props**
  Remove `viewportMode` from `StudioCanvasProps` and simplify props to `isEnabled` and `activeStationId`.

- [x] **Step 4: Verify build**
  Run `npm run build` to confirm clean compilation.

- [x] **Step 5: Commit Task 3**
  `git add src/components/3d/ ; git commit -m "feat(3d): integrate metropolis environment and hybrid twilight lighting into StudioScene"`

---

### Task 4: UI Cleanup, Removal of Viewport HUD & End-to-End Verification

**Files:**
- Modify: `src/pages/Index.tsx`
- Delete: `src/components/3d/ShaderViewportHUD.tsx`
- Delete: `src/components/3d/HologramStages.ts`
- Delete: `src/components/3d/StudioObjects.ts`
- Test: `npm run build` & browser preview

- [x] **Step 1: Clean up `Index.tsx`**
  Remove `ShaderViewportHUD` import and JSX render.
  Remove `viewportMode` state and `localStorage` persistence.

- [x] **Step 2: Remove Obsolete Files**
  Remove `ShaderViewportHUD.tsx`, `HologramStages.ts`, and old `StudioObjects.ts`.

- [x] **Step 3: Run Full Production Build**
  Run `npm run build` to verify clean bundling with zero warnings.

- [x] **Step 4: Manual Verification in Browser**
  Verify at `http://localhost:8088/MyProtfolio/`:
  1. The background displays colossal brutalist concrete monoliths with dramatic diagonal golden sunbeams.
  2. Scrolling smoothly flies the camera through the metropolis canyons across all 8 slides.
  3. Cursor movement shifts perspective and the angle of the sunbeams, while fluid ripples smear across the light beams.
  4. No debug HUD buttons exist—the UI is clean and distraction-free.

- [x] **Step 5: Commit Task 4**
  `git add -A ; git commit -m "feat: complete master assembly of Neo-Brutalist Cyber-Metropolis background"`
