# Design Specification: Vertex3D-Style Interactive Showcase Redesign

- **Author**: Ravi Patel & AI Engineering Pair
- **Date**: 2026-10-17
- **Branch**: `feat/portfolio-modernization`
- **Target File**: `docs/superpowers/specs/2026-10-17-vertex3d-interactive-showcase-design.md`
- **Status**: Approved by User

---

## 1. Executive Summary

Transform Ravi Patel's portfolio into an Awwwards / FWA winning interactive showcase mirroring the exact architecture and visual style of **Vertex3D** (`vertex3d.asia/#homestudio`). The layout shifts from a standard vertical web page into an **immersive fullscreen presentation** featuring:
1. **Fullscreen Viewport Slides (100vh)**: Clean, cinematic sections that fill the screen without vertical clutter.
2. **Left Vertical Navigation Rail (`nav-rail`)**: Fixed tracking line with glowing station dots (`00 // Dev Center`, `01 // Profile`, `02 // SmartScopy`, `03 // MimadimPlus`, `04 // NoPainHeals`, `05 // Edge AI`, `06 // Skills`, `07 // Transmission`).
3. **Slide-Out Right Side Drawer (`[ INSPECT CASE ]`)**: Glass panel sliding in from the right when inspecting any project, displaying deep-dive architecture, metrics, and tech stacks.
4. **Horizontal Floating Projects Carousel (`[ Projects ]`)**: Deck overlay allowing visitors to explore all 13 verified projects.
5. **Top Minimalist Header**: Brutalist bracket links `[ Home ]`, `[ Projects ]`, `[ Contact ]`, with `[3D LAB: ON/OFF]` and Resume CTA.
6. **Integrated WebGL 3D Studio Canvas**: Synchronized camera navigation that aligns with each active slide.

---

## 2. Information Architecture & Slide Breakdown

The website consists of 8 fullscreen slides (`100dvh` / `100vh`):

| Index | Station ID | Station Label | Focus & Content | Interactive Elements |
|---|---|---|---|---|
| **00** | `home` | `00 // Dev Center` | **The Spatial Experience**: Senior title ("Software & Game Developer \| Unity • UE5 • Three.js"), live status pill, metric capsules. | `[ EXPLORE WORK ]`, `[ DOWNLOAD CV ]`, Scroll to discover indicator. |
| **01** | `about` | `01 // Engineering Profile` | **Core Competencies**: Procedural 3D & C++, Low-Latency XR, Kiosk E2EE, Edge AI Computer Vision. | Core competency interactive cards with cyan/violet hover. |
| **02** | `smartscopy` | `02 // SmartScopy` | **Flagship 01 — SmartScopy**: Live OT Surgical XR Video Pipeline (Sub-100ms, HoloLens 2 / XREAL, 3D CT/MRI Overlays). | `[ INSPECT CASE ]` (opens side panel), tag badges. |
| **03** | `mimadim` | `03 // MimadimPlus` | **Flagship 02 — MimadimPlus**: Automated CAD/DXF-to-3D Engine in UE5 with Procedural Floor Tile Generator & Geometric Clipper. | `[ INSPECT CASE ]` (opens side panel), tag badges. |
| **04** | `nopainheals` | `04 // NoPainHeals` | **Flagship 03 — NoPainHeals**: Hardened Linux/Ubuntu Kiosk, 12+ Rehabilitation Floor Games, Zero-Trust X25519/AES-GCM Tunnel. | `[ INSPECT CASE ]` (opens side panel), tag badges. |
| **05** | `vision-ai` | `05 // Edge AI & Vision` | **Flagship 04 — Edge AI**: DirectShow Buffer-Free Processing, YOLOv8 + ONNX, Motion-Tracked Controller-Free Games. | `[ INSPECT CASE ]` (opens side panel), tag badges. |
| **06** | `skills` | `06 // Core Systems` | **Technical Clusters & Services**: 6 technical clusters (Engines, XR, Languages, CV, Kiosks, Crypto) & 4 engineering pillars. | Category selector pill tabs & engineering services grid. |
| **07** | `contact` | `07 // Transmission` | **Initiate Transmission**: Obsidian glass contact terminal, verified location (`Karamsad, Anand, Gujarat, India`), GitHub, Phone, Email. | Direct contact form + interactive credentials. |

---

## 3. Component Architecture

```
src/components/vertex/
  ├── LeftNavRail.tsx          # Vertical fixed navigation rail with active glowing dot and labels
  ├── TopNav.tsx               # Minimalist brutalist header [Home] [Projects] [Contact] [3D Toggle]
  ├── SidePanelDrawer.tsx      # Full-height glass slide-out drawer for [INSPECT CASE]
  ├── ProjectsCarouselDeck.tsx # Horizontal 3D floating card carousel modal for all 13 projects
  ├── ScrollIndicator.tsx      # Pulsing vertical line with "SCROLL TO DISCOVER" label
  └── slides/
        ├── SlideHero.tsx        # Slide 00: Dev Command Center
        ├── SlideAbout.tsx       # Slide 01: Engineering Competencies & Profile
        ├── SlideSmartScopy.tsx  # Slide 02: Flagship SmartScopy
        ├── SlideMimadim.tsx     # Slide 03: Flagship MimadimPlus
        ├── SlideNoPainHeals.tsx # Slide 04: Flagship NoPainHeals
        ├── SlideVisionAI.tsx    # Slide 05: Flagship Edge AI
        ├── SlideSkills.tsx      # Slide 06: Technical Clusters & Services
        └── SlideContact.tsx     # Slide 07: Contact Terminal & Footer
```

---

## 4. Interaction & Motion Specifications

1. **Left Nav Rail Synchronization**:
   - As user scrolls or clicks, `activeSection` updates.
   - Indicator dot animates vertically along a continuous 1px guide line.
   - Clicking any rail item triggers smooth scroll to that slide.
2. **Slide-Out Side Panel Drawer**:
   - Fixed at `right: 0, top: 0, height: 100%, width: min(100vw, 560px)`.
   - Backdrop overlay (`bg-black/60 backdrop-blur-sm`).
   - Smooth slide animation (`transition-transform duration-500 ease-out`).
   - Displays project badge, title, subtitle, challenge, architecture deliverables, quantified metrics, tech pills, and action buttons.
3. **Projects Carousel Deck**:
   - Opens when user clicks `[ Projects ]` in the top header.
   - Filterable by domain tabs: `All (13)`, `Medical XR`, `Unreal Engine 5`, `Healthcare & Web3D`, `AI & Vision`, `Games & VR`.
   - Smooth horizontal swipe/scroll with keyboard navigation (`ArrowLeft` / `ArrowRight` / `Escape`).

---

## 5. Technical Constraints & Reliability

- **Single Source of Truth**: All project data pulled directly from `src/data/projectsData.ts`.
- **Router Base Compatibility**: Stays `/MyProtfolio/` in `App.tsx` and `vite.config.ts`.
- **TypeScript & Build Safety**: Zero compile errors (`npx tsc --noEmit`), clean bundle (`npm run build`).
- **Responsive Adaptability**: Full desktop experience with rail and drawers; clean mobile touch optimization with drawer full-screen takeover.
