# 3D Spatial Studio Background & Scroll Camera System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and integrate an Awwwards-tier WebGL 3D Spatial Studio background canvas for Ravi Patel's portfolio, with a scroll-driven camera flying through 5 technical stations (Dev Desk, CAD Matrix, Medical XR, Arcade Kiosk, Server Core) behind the existing obsidian glass UI.

**Architecture:** Fullscreen fixed Three.js WebGL canvas (`z-index: 0`) decoupled from the DOM. A camera controller links page scroll position to a 3D spline trajectory via GSAP and requestAnimationFrame with mouse parallax. Post-processing UnrealBloomPass provides cyberpunk glow. A circular loader (Vertex3D style) provides instant loading feedback, and an idle throttle saves battery.

**Tech Stack:** Three.js (`three`, `@types/three`), GSAP (`gsap`), React 18, TypeScript, Tailwind CSS, Lucide React.

## Global Constraints
- Router base must stay `/MyProtfolio/` for GitHub Pages.
- Total scene geometry capped under 50,000 polygons to ensure 60fps on mobile and integrated GPUs.
- Pixel ratio clamped: `Math.min(window.devicePixelRatio, 1.75)`.
- Fallback: Gracefully unmounts and keeps obsidian CSS background if WebGL fails or user disables 3D.
- All code must pass `npx tsc --noEmit` and `npm run build` with zero errors.

---

### Task 1: Install Three.js & Setup 3D Scene Module

**Files:**
- Modify: `package.json`
- Create: `src/components/3d/StudioScene.ts`
- Create: `src/components/3d/types.ts`

**Interfaces:**
- Produces: `class StudioScene` with `init(container: HTMLElement)`, `resize()`, `render(time: number)`, `destroy()`, and `setScrollProgress(p: number)`.
- Produces: `types.ts` defining `CameraWaypoint`, `StudioSceneOptions`.

- [ ] **Step 1: Install `three`, `@types/three`, and `gsap`**
  Run: `npm install three gsap && npm install -D @types/three`

- [ ] **Step 2: Create types file `src/components/3d/types.ts`**
  Define `CameraWaypoint`:
  ```typescript
  import * as THREE from "three";

  export interface CameraWaypoint {
    scrollProgress: number;
    position: THREE.Vector3;
    target: THREE.Vector3;
  }
  ```

- [ ] **Step 3: Implement `StudioScene.ts`**
  Implement Scene, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, lighting rig (ambient + directional key + colored point lights), and EffectComposer with UnrealBloomPass.

- [ ] **Step 4: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 5: Commit**
  Run: `git add package.json package-lock.json src/components/3d/ && git commit -m "feat(3d): initialize Three.js engine and core scene manager"`

---

### Task 2: 3D Spatial Studio Environment & Station Props

**Files:**
- Create: `src/components/3d/StudioObjects.ts`
- Modify: `src/components/3d/StudioScene.ts`

**Interfaces:**
- Produces: `createStudioEnvironment(): THREE.Group` containing:
  - Room enclosure (dark walls with grid texture and panoramic city window).
  - Station 1 (Dev Command Center): Curved desk, triple holographic monitor meshes with glowing code textures, XR headset with pulsing LED.
  - Station 2 (CAD Matrix): Drafting table with floating procedural wireframe wall blueprints (*MimadimPlus*).
  - Station 3 (Medical XR & Kiosk Bay): Surgical cart with articulated arm, floating rotating 3D bone/skull hologram (*SmartScopy*), and arcade cabinet with floor projection (*NoPainHeals*).
  - Station 4 (Server Core): Telemetry server rack with pulsing green/cyan status LEDs (*System Guard*).
  - Particle Dust: 300 floating ambient cyber dust particles with subtle Brownian drift.

- [ ] **Step 1: Implement `StudioObjects.ts` procedural props and materials**
  Build clean PBR materials (roughness, metalness, emissive glow) and geometries for all 5 stations and the room boundary.

- [ ] **Step 2: Connect studio environment into `StudioScene.ts`**
  Add `this.scene.add(createStudioEnvironment())` in `init()` method.

- [ ] **Step 3: Verify build and polygon count**
  Ensure total polygon count is < 30,000 triangles. Run `npx tsc --noEmit`.

- [ ] **Step 4: Commit**
  Run: `git add src/components/3d/ && git commit -m "feat(3d): build 5 spatial studio stations and cyber environment"`

---

### Task 3: Camera Spline Rail & Scroll/Parallax Controller

**Files:**
- Create: `src/components/3d/CameraController.ts`
- Modify: `src/components/3d/StudioScene.ts`

**Interfaces:**
- Consumes: `CameraWaypoint[]` from `types.ts`.
- Produces: `class CameraController` with:
  - `update(scrollProgress: number, mouseX: number, mouseY: number, delta: number)`
  - Smooth hermite/bezier interpolation along the 5 waypoints.
  - Mouse parallax dampening (subtle ±0.15 rotation offset based on cursor position).

- [ ] **Step 1: Implement `CameraController.ts`**
  Implement smooth lerp interpolation between waypoints defined in the design spec:
  - Hero (0%): Close-up on Dev Desk monitors.
  - About (~20%): Glide toward CAD Matrix.
  - Experience (~40%): Corridor descent.
  - Projects (~65%): Medical XR & Arcade Kiosk.
  - Skills (~85%): Server Rack swoop.
  - Contact (100%): High panoramic view of studio and city skyline.

- [ ] **Step 2: Connect CameraController into `StudioScene.ts`**
  Call `cameraController.update(...)` in the main render loop.

- [ ] **Step 3: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 4: Commit**
  Run: `git add src/components/3d/ && git commit -m "feat(3d): implement scroll camera spline and mouse parallax"`

---

### Task 4: Minimalist Loading Ring UI & Battery Saver Idle Throttle

**Files:**
- Create: `src/components/3d/StudioLoader.tsx`
- Modify: `src/components/3d/StudioScene.ts`

**Interfaces:**
- Produces: `StudioLoader.tsx` circular progress component matching Vertex3D style.
- Produces: `StudioScene.setIdleThrottle(isIdle: boolean)`: Throttles rendering to 15fps or sleeps when user is inactive for 3+ seconds.

- [ ] **Step 1: Build `StudioLoader.tsx`**
  SVG circle with dashoffset animation, glowing cyan border, percentage count, and smooth fade-out once scene reports ready.

- [ ] **Step 2: Implement idle activity watchdog in `StudioScene.ts`**
  Listen for `scroll` and `mousemove`. If idle > 3s, pause render loop to conserve battery. Resume immediately on user interaction.

- [ ] **Step 3: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 4: Commit**
  Run: `git add src/components/3d/ && git commit -m "feat(3d): add circular loader and battery saver throttle"`

---

### Task 5: App Integration & Navigation 3D Toggle Switch

**Files:**
- Create: `src/components/3d/StudioCanvas.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/Navigation.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Produces: `<StudioCanvas />` React wrapper mounting the WebGL canvas fixed at `z-index: 0`.
- Produces: Toggle button in `<Navigation />`: `[3D: ON/OFF]` with state persisted in `localStorage`.

- [ ] **Step 1: Implement `StudioCanvas.tsx`**
  React component managing container ref, window resize, scroll listeners, mouse position, and cleanup on unmount.

- [ ] **Step 2: Mount `<StudioCanvas />` in `App.tsx`**
  Render `<StudioCanvas />` behind the main container. Ensure glass card styling maintains high readability with `backdrop-blur-md`.

- [ ] **Step 3: Add `[3D: ON/OFF]` pill in `Navigation.tsx`**
  Add pill next to Resume download button. Allows user to disable 3D background if desired.

- [ ] **Step 4: Verify typecheck and build**
  Run: `npx tsc --noEmit && npm run build`

- [ ] **Step 5: Commit**
  Run: `git add src/ && git commit -m "feat(3d): integrate 3D studio canvas and navigation toggle"`

---

### Task 6: Full Verification & Live Test

**Files:**
- Test: All components in browser

- [ ] **Step 1: Run TypeScript check**
  Run: `npx tsc --noEmit` (Must pass with 0 errors).

- [ ] **Step 2: Run production build**
  Run: `npm run build` (Must bundle cleanly).

- [ ] **Step 3: Launch dev server**
  Run: `npm run dev` and test at `http://localhost:8088/MyProtfolio/`.

- [ ] **Step 4: Test interactions**
  Verify:
  1. Loader shows percentage and fades smoothly.
  2. Camera flies through 5 stations as user scrolls down.
  3. Mouse parallax creates 3D depth on Hero.
  4. Project modal opens cleanly without 3D interference.
  5. 3D toggle in navbar disables/enables canvas smoothly.

- [ ] **Step 5: Final commit**
  Run: `git add . && git commit -m "chore: complete 3D spatial studio background integration"`
