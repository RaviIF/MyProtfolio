# Vertex3D-Style Interactive Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Ravi Patel's portfolio into an Awwwards-tier interactive showcase matching the architecture of Vertex3D (`vertex3d.asia`), featuring 8 fullscreen slides (100vh), a fixed left vertical navigation rail with tracking dots, a slide-out right drawer for `[ INSPECT CASE ]`, a horizontal projects carousel deck, and synchronized 3D camera waypoints.

**Architecture:** Fullscreen slide container with snapping/smooth scroll. Fixed `LeftNavRail` tracks active section via IntersectionObserver/scroll. Top minimalist brutalist nav with `[ Home ]`, `[ Projects ]`, `[ Contact ]`. Pinned bottom-center `ScrollIndicator`. Right-edge `SidePanelDrawer` for deep-dive case studies. All 13 verified projects preserved from `projectsData.ts`.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React, Three.js, GSAP.

## Global Constraints
- Router base must remain `/MyProtfolio/`.
- All 13 verified projects and their metrics must be fully preserved.
- Zero layout breakage or type errors (`npx tsc --noEmit` and `npm run build` must pass with 0 errors).
- Clean responsive design on desktop, tablet, and mobile.

---

### Task 1: Navigation Infrastructure (LeftNavRail, TopNav, ScrollIndicator)

**Files:**
- Create: `src/components/vertex/types.ts`
- Create: `src/components/vertex/LeftNavRail.tsx`
- Create: `src/components/vertex/TopNav.tsx`
- Create: `src/components/vertex/ScrollIndicator.tsx`

**Interfaces:**
- Produces: `NavStation` interface with `{ id: string, label: string, index: string }`.
- Produces: `<LeftNavRail activeStation={string} onSelectStation={(id: string) => void} />`.
- Produces: `<TopNav is3DEnabled={boolean} onToggle3D={() => void} onOpenProjectsDeck={() => void} />`.
- Produces: `<ScrollIndicator />` pulsing line with label.

- [ ] **Step 1: Create `src/components/vertex/types.ts`**
  Define `NavStation` and station list (8 stations: `home`, `about`, `smartscopy`, `mimadim`, `nopainheals`, `vision-ai`, `skills`, `contact`).

- [ ] **Step 2: Implement `src/components/vertex/LeftNavRail.tsx`**
  Fixed vertical line on left with glowing dot indicator and active label highlights.

- [ ] **Step 3: Implement `src/components/vertex/TopNav.tsx`**
  Minimalist brutalist header with `[ RP ]` logo, `[ Home ]`, `[ Projects ]`, `[ Contact ]`, `[3D LAB: ON/OFF]`, and Resume CTA.

- [ ] **Step 4: Implement `src/components/vertex/ScrollIndicator.tsx`**
  Vertex3D-style vertical animated line with dot and `SCROLL TO DISCOVER` text.

- [ ] **Step 5: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 6: Commit**
  Run: `git add src/components/vertex/ && git commit -m "feat(vertex): implement navigation rail, top nav, and scroll indicator"`

---

### Task 2: Slide-Out Right Side Drawer (`[ INSPECT CASE ]`)

**Files:**
- Create: `src/components/vertex/SidePanelDrawer.tsx`

**Interfaces:**
- Consumes: `ProjectItem` from `src/data/projectsData.ts`.
- Produces: `<SidePanelDrawer project={ProjectItem | null} onClose={() => void} onOpenAllProjects={() => void} />`.

- [ ] **Step 1: Implement `SidePanelDrawer.tsx`**
  - Full-height drawer sliding from right (`max-w-xl fixed right-0 inset-y-0 z-50`).
  - Dark glass backdrop blur (`rgba(8, 10, 16, 0.92)`).
  - Header with project title, subtitle, and close button.
  - Body with architecture highlights, key metrics capsules, full technology stack pills, and actions.
  - Keyboard listener: `Escape` closes drawer.

- [ ] **Step 2: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
  Run: `git add src/components/vertex/SidePanelDrawer.tsx && git commit -m "feat(vertex): implement slide-out project case study drawer"`

---

### Task 3: 8 Fullscreen Station Slides

**Files:**
- Create: `src/components/vertex/slides/SlideHero.tsx`
- Create: `src/components/vertex/slides/SlideAbout.tsx`
- Create: `src/components/vertex/slides/SlideProject.tsx` (Reusable flagship slide for SmartScopy, MimadimPlus, NoPainHeals, Vision AI)
- Create: `src/components/vertex/slides/SlideSkills.tsx`
- Create: `src/components/vertex/slides/SlideContact.tsx`

**Interfaces:**
- Produces: 8 fullscreen slide components filling `min-h-screen` / `100dvh` with large brutalist headings, masked text, tech badges, and `[ INSPECT CASE ]` triggers.

- [ ] **Step 1: Implement `SlideHero.tsx`**
  Large typography ("THE SPATIAL EXPERIENCE // RAVI PATEL"), senior title, live emerald radar pill, metrics, and `[ EXPLORE WORK ]` CTA.

- [ ] **Step 2: Implement `SlideAbout.tsx`**
  Engineering profile, 4 core competencies, B.E. Computer Engineering + industry certifications.

- [ ] **Step 3: Implement `SlideProject.tsx`**
  Heroic presentation for flagship projects (*SmartScopy*, *MimadimPlus*, *NoPainHeals*, *Edge AI Motion Tracking*) with domain badges, big typography, metrics summary, and `[ INSPECT CASE ]` button.

- [ ] **Step 4: Implement `SlideSkills.tsx`**
  6 technical clusters with categorized badges and 4 specialized engineering pillars.

- [ ] **Step 5: Implement `SlideContact.tsx`**
  Obsidian glass contact terminal, verified location (`Karamsad, Anand, Gujarat, India`), GitHub, Phone, Email, and message form.

- [ ] **Step 6: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 7: Commit**
  Run: `git add src/components/vertex/slides/ && git commit -m "feat(vertex): implement 8 fullscreen presentation slides"`

---

### Task 4: Horizontal Projects Carousel Deck (`[ Projects ]`)

**Files:**
- Create: `src/components/vertex/ProjectsCarouselDeck.tsx`

**Interfaces:**
- Consumes: All 13 projects from `src/data/projectsData.ts`.
- Produces: `<ProjectsCarouselDeck isOpen={boolean} onClose={() => void} onSelectProject={(project: ProjectItem) => void} />`.

- [ ] **Step 1: Implement `ProjectsCarouselDeck.tsx`**
  - Fullscreen overlay with dark blurred background.
  - Top category filter tabs (`All 13`, `Medical XR`, `Unreal Engine 5`, `Healthcare & Web3D`, `AI & Vision`, `Games & VR`).
  - Horizontal floating card deck with mouse wheel / arrow button scrolling.
  - Click card opens `SidePanelDrawer` for that project.
  - Close button and `Escape` key handler.

- [ ] **Step 2: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
  Run: `git add src/components/vertex/ProjectsCarouselDeck.tsx && git commit -m "feat(vertex): implement horizontal projects carousel deck"`

---

### Task 5: 3D Camera Waypoint Synchronization

**Files:**
- Modify: `src/components/3d/CameraController.ts`

**Interfaces:**
- Updates `DEFAULT_CAMERA_WAYPOINTS` to cleanly map to the 8 stations:
  1. `home` (0.00): Dev Command Center
  2. `about` (0.14): CAD drafting table & blueprints
  3. `smartscopy` (0.28): Medical XR cart & floating skull/bone hologram
  4. `mimadim` (0.42): Procedural CAD wall generator & floor clipper
  5. `nopainheals` (0.57): Arcade kiosk cabinet & floor projection
  6. `vision-ai` (0.71): Camera tracking sensor & Edge AI core
  7. `skills` (0.85): Hardened telemetry server rack
  8. `contact` (1.00): Panoramic night city skyline view

- [ ] **Step 1: Update waypoints in `CameraController.ts`**
  Tune position vectors and look-at targets for all 8 stations.

- [ ] **Step 2: Verify typecheck**
  Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
  Run: `git add src/components/3d/CameraController.ts && git commit -m "feat(3d): synchronize camera spline waypoints with 8 vertex slides"`

---

### Task 6: Master Page Assembly & Final Verification

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/index.css` (add custom scrollbar & slide snapping utilities)

- [ ] **Step 1: Assemble all components in `src/pages/Index.tsx`**
  Mount `LeftNavRail`, `TopNav`, 8 slides, `SidePanelDrawer`, `ProjectsCarouselDeck`, and `ScrollIndicator`. Wire up active station observer.

- [ ] **Step 2: Run TypeScript check**
  Run: `npx tsc --noEmit` (Must pass with 0 errors).

- [ ] **Step 3: Run production build**
  Run: `npm run build` (Must bundle cleanly).

- [ ] **Step 4: Verify dev server on port 8088**
  Test all interactions at `http://localhost:8088/MyProtfolio/`.

- [ ] **Step 5: Final commit**
  Run: `git add . && git commit -m "chore(vertex): complete Vertex3D-style interactive showcase overhaul"`
