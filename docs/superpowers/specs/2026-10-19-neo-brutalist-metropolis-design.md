# Design Specification: Neo-Brutalist Cyber-Metropolis 3D Background

- **Author**: Ravi Patel & AI Engineering Pair
- **Date**: 2026-10-19
- **Branch**: `feat/portfolio-modernization`
- **Target File**: `docs/superpowers/specs/2026-10-19-neo-brutalist-metropolis-design.md`
- **Status**: Approved by User

---

## 1. Executive Summary

Completely replace the previous procedural cyber-room background with a monumental, Awwwards-grade **Neo-Brutalist Cyber-Metropolis** rendered in a **Hybrid Twilight** color palette (*Blade Runner 2049* meets legendary concrete architect *Tadao Ando*).

The new environment eliminates generic primitive shapes and delivers:
1. **Colossal Brutalist Architecture**: Towering beveled concrete skyscrapers, massive angular monolithic pillars, cantilevered sky bridges, and open geometric light atriums.
2. **Volumetric Golden God Rays**: Dramatic diagonal shafts of warm golden sunlight (3500K) piercing through cool twilight mist and casting dynamic shadows.
3. **Cyber Blueprint Insets**: Precision glowing cyan (`#22d3ee`) CAD coordinate grids and wireframe architectural line vectors etched directly into the raw charcoal stone.
4. **Wet Obsidian Ground Plane**: Reflective dark stone floor capturing light beam bounces and pillar reflections.
5. **Cinematic 8-Station Fly-Through**: Seamless spline camera glide that takes visitors through high-altitude canyons, grand brutalist halls, floating glass galleries, and an open horizon observation deck.
6. **Clean, Uncluttered UI**: Complete removal of debug viewport buttons (`ShaderViewportHUD`) to keep the presentation pure, editorial, and focused.

---

## 2. Environment & Lighting Architecture

```
                  [ Diagonal Volumetric Sunbeams ] (Warm 3500K Golden Rays)
                                     │ \
                                     ▼  \
  [ Colossal Charcoal Concrete Monoliths ] ──► [ Glowing Cyan CAD Blueprint Vectors ]
                                     │
                                     ▼
                [ Reflective Wet Obsidian Ground Plane ]
```

### 2.1 Concrete Monoliths & Mega-Structures
- **Geometry**: Heavy, beveled brutalist towers and pillars of varying heights (8m to 35m) arranged in an expansive urban canyon and monumental interior halls.
- **Material**: Dark matte charcoal concrete with micro-surface bump, deep ambient occlusion, and subtle edge bevel highlights.

### 2.2 Volumetric God Rays (Light Shafts)
- **Geometry**: Angled volumetric light cones/planes spanning from upper sky gaps down to the ground.
- **Shader**: Custom additive blending shader with soft exponential edge falloff and depth fading to simulate thick atmospheric light shafts.
- **Color**: Warm golden sunlight (`#fbbf24` / `#f59e0b`) contrasting against cool navy atmospheric twilight fog (`#060810`).

### 2.3 Cyber Blueprint Insets
- Certain monolithic faces feature glowing cyan vector line art: isometric floorplans, dimension annotations (`14.2m`, `90°`), and subtle pulsing grid nodes. Ties directly into Ravi's CAD engine (*MimadimPlus*) and 3D architectural automation.

### 2.4 Wet Obsidian Ground Plane
- Floor plane rendered with high specular roughness map, simulating wet dark paving stones reflecting the light shafts and concrete towers.

### 2.5 Atmospheric Gold & Cyan Dust Field
- 500 microscopic floating particles drifting through the light beams with Brownian turbulence and continuous vertical fall wrap-around.

---

## 3. 8-Station Camera Spline Fly-Through

The camera follows a smooth Hermite spline trajectory mapped to scroll progress ($0.0 \to 1.0$), aligned with the 8 vertex slides:

| Station | ID | Name | Camera Position $(X, Y, Z)$ | Target Look-At $(X, Y, Z)$ | Visual Experience |
|---|---|---|---|---|---|
| **00** | `home` | Home | `(0.0, 14.0, 18.0)` | `(0.0, 4.0, 0.0)` | **High-Altitude Canyon**: Looking down between two colossal monolithic towers as golden morning twilight breaks through. |
| **01** | `about` | About Me | `(3.5, 7.5, 10.0)` | `(-1.0, 2.5, 0.0)` | **Monumental Light Hall**: Diving downward into an immense concrete hall framed by brutalist pillars and diagonal sunbeams. |
| **02** | `smartscopy` | SmartScopy | `(-4.5, 3.2, 5.0)` | `(0.0, 2.8, -2.0)` | **Suspended Medical Gallery**: Gliding past a cantilevered glass terrace illuminated by a focused volumetric beam. |
| **03** | `mimadim` | MimadimPlus | `(4.2, 2.8, 1.0)` | `(-0.5, 1.5, -4.0)` | **Architectural Drafting Terrace**: Overlooking an open stone terrace with illuminated CAD wireframe floor blueprints. |
| **04** | `nopainheals` | NoPainHeals | `(-3.2, 2.2, -3.5)` | `(1.0, 1.8, -7.0)` | **Interactive Atrium**: Low-angle glide through a wide concrete plaza with ground sensor ripples. |
| **05** | `vision-ai` | Motion AI | `(2.8, 4.5, -7.5)` | `(-1.5, 3.0, -11.0)` | **Telemetry Pylon**: Passing a massive vertical monolith with cyan telemetry data channels. |
| **06** | `skills` | Skills | `(-1.0, 6.0, -12.0)` | `(0.0, 3.5, -16.0)` | **Monumental Archway**: Ascending through colossal brutalist concrete arches framing the city. |
| **07** | `contact` | Contact | `(0.0, 12.0, -16.0)` | `(0.0, 14.0, -32.0)` | **Horizon Observation Deck**: High vantage terrace overlooking the infinite twilight skyline and distant mountain horizon. |

---

## 4. UI Cleanliness & HUD Removal

- Completely remove `ShaderViewportHUD.tsx`.
- Remove `viewportMode` state and debug buttons from `Index.tsx`.
- The presentation remains clean, editorial, and focused:
  - Top: Brutalist minimalist navigation bar.
  - Left: Fixed navigation rail with glowing dots.
  - Center: Fullscreen editorial presentation slides.
  - Background: The living Neo-Brutalist Metropolis.

---

## 5. Performance & Device Targets

- **Target Framerate**: Locked 60 FPS across desktop and mobile.
- **Geometry Budget**: Total scene vertex count < 32,000 vertices (achieved via instanced monolithic boxes and procedural planes).
- **Draw Call Budget**: < 28 draw calls per frame via shared materials.
- **Shader Efficiency**: Single-pass volumetric god rays with additive blending (zero heavy volumetric raymarching).
- **Battery Saver**: Automatically drops to 15 FPS when idle (>3s) and pauses when the tab is hidden.
