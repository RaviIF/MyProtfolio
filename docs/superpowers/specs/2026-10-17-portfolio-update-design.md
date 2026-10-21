# Portfolio Modernization & Projects Showcase Design Specification

**Author:** Ravi Patel  
**Date:** 2026-10-17  
**Status:** Approved  
**Target Repository:** `d:\Ravi\MyProtfolio`  

---

## 1. Executive Summary & Objective

Modernize Ravi Patel's personal portfolio website from an early-stage portfolio into a senior-level, high-impact engineering showcase. The updated site highlights 3+ years of production experience across **Unity (C#)**, **Unreal Engine 5 (C++)**, **Three.js / WebGL**, **Spatial Computing (HoloLens 2 / XREAL / OpenXR)**, **Computer Vision (YOLO / MediaPipe / ONNX)**, and **Hardened Kiosk Architectures with End-to-End Cryptography**.

The centerpiece of this update is an interactive, categorized project showcase (**Approach 1**) featuring 13 verified production projects with a dedicated technical detail modal/dialog that provides deep architectural context, system metrics, and engineering feats.

---

## 2. Branding & Information Architecture

### 2.1 Identity & Positioning
* **Name:** Ravi Patel
* **Professional Title:** Software & Game Developer | Unity • Unreal Engine 5 • Three.js
* **Sub-title / Domain Focus:** Game, XR & Interactive Systems Engineer
* **Core Value Proposition:** Building high-performance 3D applications, low-latency surgical XR systems, automated CAD-to-3D procedural generation engines, and zero-trust kiosk architectures.

### 2.2 Global Metrics
* **3+ Years** Production Engineering Experience (May 2023 – Present)
* **15+** Production Projects & Deployed Systems
* **XR & C++** Spatial Computing & Procedural 3D Specialist

---

## 3. Section-by-Section Specifications

### 3.1 Hero Section (`src/components/Hero.tsx`)
* **Role Badge:** `Software & Game Developer | Unity • Unreal Engine 5 • Three.js`
* **Heading:** `Ravi Patel`
* **Tagline:** *"Architecting real-time 3D applications, medical spatial computing (XR), and hardware-integrated interactive systems."*
* **Metrics Cards:**
  1. `3+` Years Experience (Production XR, UE5 & Web3D)
  2. `15+` Projects & Systems Engineered
  3. `XR & C++` Spatial Computing & Procedural Systems
* **CTAs:**
  * `Explore Projects` (Smooth scroll to `#projects`)
  * `Download Resume` (Direct download of `Ravi_Patel_Resume.pdf`)

### 3.2 About Section (`src/components/About.tsx`)
* **Bio Narrative:**
  Reflects senior capability: 3+ years architecting real-time 3D, spatial computing, and computer-vision applications. Highlights solo-building the **SmartScopy** surgical XR platform, engineering the encrypted kiosk and rehabilitation suite of **NoPainHeals**, and creating procedural CAD-to-3D generation in **MimadimPlus**.
* **Core Competencies (Checklist Cards):**
  1. Procedural 3D Mesh Generation & C++ Systems (`UProceduralMeshComponent`)
  2. Low-Latency Surgical Video & XR Pipelines (MRTK, OpenXR, HoloLens 2, XREAL)
  3. Hardened Kiosk Security & Zero-Trust E2E Cryptography (X25519, AES-256-GCM, Linux/Ubuntu)
  4. Real-time Computer Vision & Edge AI (YOLO, ONNX Runtime, MediaPipe)

### 3.3 Experience Section (`src/components/Experience.tsx`)
* **Current Role (May 2023 – Present):**
  * **Title:** Software & Game Developer
  * **Company:** Invisible Fiction (Anand, Gujarat)
  * **Key Achievements:**
    * Architected **SmartScopy**, streaming live endoscopic surgery feeds at ultra-low latency to XREAL glasses and HoloLens 2 with 3D CT/MRI anatomical visualization.
    * Core contributor to **NoPainHeals**: delivered 12+ interactive floor-projection games, engineered zero-trust E2EE pipeline (X25519 + AES-256-GCM), hardened Linux kiosk deployment, and implemented offline-first IndexedDB queue.
    * Engineered **MimadimPlus** automated CAD/DXF-to-3D engine in UE5 with C++ procedural wall/door/window generation and polygon room tile clipping math.
    * Deployed real-time edge AI motion tracking with custom YOLO/ONNX models and DirectShow buffer elimination.
* **Internship (Jan 2023 – May 2023):**
  * **Title:** Computer Engineering Intern
  * **Company:** Invisible Fiction (Anand, Gujarat)
  * **Key Achievements:** Developed an Iris Recognition and Screen Distance Detection prototype in Python & OpenCV for user fatigue prevention and biometric identification.

### 3.4 Education & Certifications (`src/components/Education.tsx`)
* **Formal Degree:**
  * **Degree:** Bachelor of Engineering (B.E.) in Computer Engineering
  * **Institution:** Ipcowala Institute of Engineering & Technology, Anand, Gujarat
  * **Score:** CGPA: 8.30 / 10.0 (Graduated 2023)
  * *(Note: Secondary and higher secondary school records omitted per senior industry standard)*
* **Industry Certifications:**
  * **Anthropic:** Claude 101, Claude Code 101, Claude Platform 101
  * **Edunet Foundation / SAP CSR:** Emerging Technologies: AI, IoT & ERP (Code Unnati, 2022–23)
  * **SAP:** Learn the ABCs of ABAP Programming on SAP BTP

### 3.5 Skills Matrix (`src/components/Skills.tsx`)
Organized into 6 domain clusters:
1. **Engines & 3D:** Unity3D (C#), Unreal Engine 5 (C++, Blueprints), Three.js, WebGL, HLSL/GLSL Shaders, Procedural Meshes (`UProceduralMeshComponent`), Physics.
2. **Spatial Computing & XR:** Microsoft HoloLens 2, MRTK, OpenXR, Meta Quest, XREAL Glasses, 3D CT/MRI/X-Ray Volumetric Viz.
3. **Languages:** C#, C++, Python, JavaScript, TypeScript, HLSL/GLSL.
4. **Computer Vision & Edge AI:** MediaPipe, OpenCV, YOLO, ONNX Runtime, DirectShow (`cv2.CAP_DSHOW`).
5. **Interactive Kiosks & Web:** Electron (Linux/Windows lockdown, IPC), Node.js, WebSockets (Pusher v7), IndexedDB Offline Queue, REST APIs.
6. **Security & Cryptography:** End-to-End Encryption (X25519, HKDF-SHA256, AES-256-GCM), Hardware Station Fingerprinting.

---

## 4. Projects Architecture & Interactive Showcase

### 4.1 Data Structure (`src/data/projectsData.ts`)
```typescript
export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Medical XR" | "Unreal Engine 5" | "Healthcare & Web3D" | "AI & Vision" | "Games & VR";
  role: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  keyWork: string[];
  architecturalHighlights: string[];
  featured?: boolean;
}
```

### 4.2 Categorized Project Catalogue (13 Verified Projects)

1. **SmartScopy**
   * *Category:* `Medical XR`
   * *Subtitle:* Live Operating Theatre XR & Low-Latency Video Pipeline
   * *Tech:* `Unity3D`, `C#`, `XREAL Air`, `HoloLens 2`, `MRTK`, `OpenXR`, `Python OpenCV`
   * *Key Engineering:* Low-latency live video streaming of endoscopic surgery to XR smart glasses and HoloLens 2; interactive 3D CT/MRI anatomical reconstructions.
2. **MimadimPlus**
   * *Category:* `Unreal Engine 5`
   * *Subtitle:* Automated CAD-to-3D Procedural Architectural Engine
   * *Tech:* `Unreal Engine 5`, `C++`, `UProceduralMeshComponent`, `Python`, `Blueprints`
   * *Key Engineering:* Automated 2D CAD/DXF blueprint parsing, procedural wall/floor/door/window mesh generation, and integrated **Procedural Floor Tile Generator & Geometric Clipper** (`TileManagerActor.h`) for complex polygon room clipping.
3. **NoPainHeals**
   * *Category:* `Healthcare & Web3D`
   * *Subtitle:* Clinical Floor Projection Rehabilitation Platform
   * *Tech:* `Electron`, `Three.js`, `WebGL`, `WebSockets (Pusher v7)`, `Linux Kiosk (Ubuntu)`, `AES-256-GCM`, `IndexedDB`
   * *Key Engineering:* 12+ interactive floor projection rehab games, hardened Linux kiosk lockdown, zero-trust E2EE crypto tunnel (X25519 + AES-256-GCM), and offline-first IndexedDB queue.
4. **Camera-Based Motion Tracking & Edge AI**
   * *Category:* `AI & Vision`
   * *Subtitle:* Real-Time Body Pose, Gesture & Object Tracking Suite
   * *Tech:* `Python`, `OpenCV`, `MediaPipe`, `YOLO`, `ONNX Runtime`, `DirectShow`
   * *Key Engineering:* DirectShow zero-buffer video processing (`cv2.CAP_DSHOW`), hybrid ML vision pipeline, and 4 controller-free games (*Fruit Samurai*, *Alien Runner*, *Enter If You Dare*, *Football Cup*).
5. **3D Bone Visualizer**
   * *Category:* `Medical XR`
   * *Subtitle:* Interactive Orthopedic Mixed Reality Suite
   * *Tech:* `Unity3D`, `HoloLens 2`, `MRTK`, `OpenXR`, `C#`
   * *Key Engineering:* Spatial hand-gesture manipulation (rotate, slice, inspect) of volumetric bone structures from patient CT/MRI/X-ray data.
6. **MimadimHomeStudio**
   * *Category:* `Unreal Engine 5`
   * *Subtitle:* Real-Time Interior Customization & Furniture Swapping
   * *Tech:* `Unreal Engine 5`, `C++`, `Blueprints`, `Data Assets`
   * *Key Engineering:* Real-time material/lighting adjustments and dynamic furniture swapping that preserves position and rotation.
7. **Speech Therapy Station (Speak & Rise)**
   * *Category:* `Healthcare & Web3D`
   * *Subtitle:* Pediatric Articulation & Web3D Voice Platform
   * *Tech:* `Three.js`, `Web Audio API`, `Sarvam AI (VAD & STT)`, `JavaScript`
   * *Key Engineering:* Modular architecture (`GameStateMachine`, `Classroom3D`), real-time speech articulation scoring via AI voice recognition.
8. **VR Boat Simulation**
   * *Category:* `Games & VR`
   * *Subtitle:* Maritime Pilot Training Simulator
   * *Tech:* `Unity3D`, `C#`, `VR SDK`, `HLSL Water Shaders`
   * *Key Engineering:* Simulator for transitioning pilots from small craft to cargo ships; buoyancy physics and wave simulation.
9. **VR Zombie Shooter**
   * *Category:* `Games & VR`
   * *Subtitle:* Immersive First-Person 6DOF VR Action
   * *Tech:* `Unity3D`, `C#`, `VR 6DOF`, `Spatial Audio`
   * *Key Engineering:* Wave combat, physical reload interactions, and spatial 3D audio.
10. **System Guard**
    * *Category:* `Healthcare & Web3D`
    * *Subtitle:* Kiosk Telemetry, Standby Tracker & Remote Kill-Switch
    * *Tech:* `Electron`, `Node.js crypto`, `Cloudflare Workers`
    * *Key Engineering:* System hardware UUID fingerprinting, heartbeat standby tracking, and remote emergency lockdown.
11. **Clean the City**
    * *Category:* `Games & VR`
    * *Subtitle:* Mobile Gravity & Physics Cleanup Game
    * *Tech:* `Unity3D`, `C#`, `Mobile`
    * *Key Engineering:* Black-hole gravity mechanics and mobile performance optimization.
12. **Iris Recognition & Distance Detection**
    * *Category:* `AI & Vision`
    * *Subtitle:* Biometric Identification & Distance Prototype (Internship)
    * *Tech:* `Python`, `OpenCV`, `Image Processing`
    * *Key Engineering:* Eye distance calculation and biometric iris identification.
13. **Creative Spaces Website**
    * *Category:* `Healthcare & Web3D`
    * *Subtitle:* Interactive Architectural Showcase
    * *Tech:* `HTML5`, `CSS3`, `JavaScript`, `Responsive Web`
    * *Key Engineering:* Responsive architectural showcase with smooth interactions.

### 4.3 Interactive Detail Modal Component (`ProjectDetailModal.tsx`)
* Implemented using Radix UI Dialog primitives.
* Displays full technical depth upon clicking any project card without navigating away from the page.
* Provides keyboard accessibility (`Esc` to dismiss) and mobile responsiveness.

---

## 5. Services, Contact & Metadata

### 5.1 Specialized Engineering Services (`src/components/Services.tsx`)
1. **Spatial Computing & Medical XR:** Operating room low-latency streaming, HoloLens 2, XREAL, Quest, MRTK/OpenXR, and 3D volumetric medical imaging.
2. **Unreal Engine 5 & Procedural C++ Systems:** Automated CAD-to-3D pipelines, procedural mesh generation, and architectural visualization.
3. **Interactive Kiosks & Web3D Platforms:** Linux/Ubuntu & Windows Electron kiosk hardening, Three.js 3D web applications, zero-trust E2EE, and offline-first telemetry.
4. **Computer Vision & Edge AI:** DirectShow camera pipelines, MediaPipe gesture tracking, YOLO/ONNX object classification, and controller-free gesture games.

### 5.2 Contact & Connectivity (`src/components/Contact.tsx`)
* **Phone:** `+91 76985 12692`
* **Email:** `rp.ravipatel90@gmail.com`
* **LinkedIn:** `https://linkedin.com/in/ravi-patel-011839265`
* **GitHub:** `https://github.com/raviif`
* **Location:** `Karamsad, Anand, Gujarat, India`
* **Contact Form:** Working EmailJS integration with auto-reply and client toast feedback.

### 5.3 SEO & Metadata (`index.html`)
* **Title:** `Ravi Patel - Software & Game Developer | Unity • Unreal Engine 5 • Three.js`
* **Meta Description:** Senior Software & Game Developer specializing in Medical XR, Unreal Engine 5 C++ procedural systems, Three.js, and Computer Vision.

---

## 6. Verification & Quality Assurance Plan

1. **TypeScript Type Checking:** Execute `tsc --noEmit` to verify type safety across all components and data structures.
2. **Production Build:** Execute `npm run build` to confirm zero Vite build errors and asset bundling integrity.
3. **Interactive Testing:**
   * Verify category filtering updates active cards dynamically.
   * Verify project detail modal opens with complete technical architecture and closes cleanly.
   * Verify resume download triggers correct PDF asset download.
   * Verify mobile navigation and responsive layout across all breakpoints.
