export type ProjectCategory = 
  | "All" 
  | "Medical XR" 
  | "Unreal Engine 5" 
  | "Healthcare & Web3D" 
  | "AI & Vision" 
  | "Games & VR";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "All">;
  role: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  keyWork: string[];
  architecturalHighlights: string[];
  featured?: boolean;
  metrics?: string;
  liveUrl?: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Medical XR",
  "Unreal Engine 5",
  "Healthcare & Web3D",
  "AI & Vision",
  "Games & VR"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "smartscopy",
    title: "SmartScopy",
    subtitle: "Live Operating Theatre XR & Low-Latency Video Pipeline",
    category: "Medical XR",
    role: "Lead XR & Video Pipeline Engineer",
    shortDescription: "Solo-built XR platform streaming live endoscopic surgical camera feeds in real time to XREAL glasses and HoloLens 2, integrated with 3D anatomical overlays.",
    fullDescription: "SmartScopy is an operating theatre mixed-reality platform engineered to give surgical teams direct, hands-free visualization of endoscopic feeds and patient anatomy inside XR headsets. Built with a low-latency video streaming pipeline in Unity (C#) and Python, it allows surgeons to view live surgical feeds alongside interactive 3D anatomical models reconstructed from patient CT, MRI, and X-ray imaging.",
    tech: ["Unity3D", "C#", "XREAL Air", "HoloLens 2", "MRTK", "OpenXR", "Python", "OpenCV"],
    keyWork: [
      "Ultra-low latency live video pipeline in Unity (C#) for real-time surgical camera feeds",
      "Stereoscopic XR rendering for XREAL glasses and Microsoft HoloLens 2 via OpenXR",
      "Interactive 3D anatomical reconstructions from CT/MRI/X-ray data viewable alongside live video",
      "Modular Python video capture architecture with DirectShow buffer elimination"
    ],
    architecturalHighlights: [
      "Threaded video capture and processing pipeline separating capture and render loops",
      "Sub-100ms camera-to-headset latency for precision surgical assistance",
      "Dual-headset target support with MRTK gesture control and spatial head-anchoring"
    ],
    featured: true
  },
  {
    id: "mimadimplus",
    title: "MimadimPlus",
    subtitle: "Automated CAD-to-3D Procedural Architectural Engine",
    category: "Unreal Engine 5",
    role: "Lead Pipeline & C++ Developer",
    shortDescription: "Automated 2D-to-3D engine that converts raw CAD/DXF blueprints into realistic, real-time 3D building environments with procedural mesh generation.",
    fullDescription: "MimadimPlus is an automated architectural generation engine in Unreal Engine 5 that eliminates manual 3D modeling by compiling raw 2D CAD/DXF blueprints into procedural 3D environments. Built with custom C++ classes and UProceduralMeshComponent, it handles coordinate conversion, room-footprint extraction, wall-partner raycast snapping, and includes a custom procedural floor tile generator with polygon clipping math.",
    tech: ["Unreal Engine 5", "C++", "UProceduralMeshComponent", "Python", "Blueprints", "Meta Quest"],
    keyWork: [
      "Automated DXF/CAD blueprint parser converting 2D architectural entities into 3D geometry",
      "Custom C++ procedural mesh generation for walls, floors, doors, and windows with auto-calculated UVs and tangents",
      "Integrated Procedural Floor Tile Generator & Geometric Clipper (TileManagerActor.h) for arbitrary polygon room boundaries",
      "Companion Python desktop application for blueprint inspection, tag extraction, and Meta Quest VR walkthroughs"
    ],
    architecturalHighlights: [
      "Mathematical coordinate space conversion from 2D CAD (Y-inversion, normalization) to Unreal 3D world coordinates",
      "Geometric clipping algorithm that slices tile meshes against complex L-shaped room contours with uniform grout spacing",
      "Real-time dynamic lighting and material instancing for multi-room layout previews"
    ],
    featured: true
  },
  {
    id: "nopainheals",
    title: "NoPainHeals",
    subtitle: "Clinical Floor Projection Rehabilitation Platform",
    category: "Healthcare & Web3D",
    role: "Interactive Systems & Security Engineer",
    shortDescription: "Multi-modal interactive therapy platform featuring 12+ floor-projection games, zero-trust E2EE crypto, and a hardened Linux kiosk architecture.",
    fullDescription: "NoPainHeals is an enterprise clinical rehabilitation station used for motor skills therapy, balance training, and pediatric physical therapy. The system runs on a locked-down Linux/Ubuntu kiosk, featuring a suite of 12+ motion-tracked games, a zero-trust end-to-end encrypted telemetry tunnel using X25519 and AES-256-GCM, and an offline-first IndexedDB queue that prevents metric loss during clinic network dropouts.",
    tech: ["Electron", "Three.js", "WebGL", "WebSockets (Pusher v7)", "Linux Kiosk", "node:crypto (X25519, AES-256-GCM)", "IndexedDB"],
    keyWork: [
      "Delivered 12+ interactive floor-projection rehabilitation games (hopscotch, balance paths, reaction games)",
      "Engineered zero-trust E2EE tunnel using node:crypto (X25519 key exchange, HKDF-SHA256, AES-256-GCM)",
      "Hardened Linux/Ubuntu kiosk deployment with window escape guards and auto-launch controls",
      "Built resilient offline-first IndexedDB queue with exponential backoff and retry caps"
    ],
    architecturalHighlights: [
      "Encrypted patient telemetry stream via custom secure headers (X-Encrypted-Payload, X-Hardware-Id)",
      "Station hardware ID fingerprinting cached in Electron main process",
      "Real-time WebSocket communication for remote therapist controls and QR station pairing"
    ],
    featured: true
  },
  {
    id: "motion-tracking-ai",
    title: "Camera-Based Motion Tracking & Edge AI",
    subtitle: "Real-Time Body Pose, Gesture & Object Detection Suite",
    category: "AI & Vision",
    role: "Computer Vision & Gameplay Engineer",
    shortDescription: "Custom motion and object-tracking models on live camera feeds powering controller-free full-body games.",
    fullDescription: "A high-performance edge AI computer vision pipeline developed in Python and Unity that processes live camera streams with zero buffer latency. Combines custom-trained YOLO object-tracking models running on ONNX Runtime with MediaPipe body pose and hand tracking to power controller-free games where physical movements control the gameplay.",
    tech: ["Python", "OpenCV", "MediaPipe", "YOLO", "ONNX Runtime", "DirectShow", "Unity3D"],
    keyWork: [
      "DirectShow video capture integration (cv2.CAP_DSHOW) eliminating internal frame buffer latency",
      "Hybrid ML pipeline combining MediaPipe skeletal landmarks with custom ONNX models",
      "Controller-free games suite: Fruit Samurai, Alien Runner, Enter If You Dare, and Football Cup",
      "Real-time inference optimized for 60+ FPS on consumer hardware"
    ],
    architecturalHighlights: [
      "Multi-threaded frame acquisition and ML tensor inference to prevent UI stutter",
      "Normalized gesture recognition coordinates mapped directly to in-game physics colliders"
    ],
    featured: true
  },
  {
    id: "3d-bone-visualizer",
    title: "3D Bone Visualizer",
    subtitle: "Interactive Orthopedic Mixed Reality Suite",
    category: "Medical XR",
    role: "XR Developer",
    shortDescription: "Interactive HoloLens 2 mixed-reality application enabling surgeons to inspect, slice, and manipulate 3D bone models from CT/MRI data.",
    fullDescription: "A specialized spatial computing application developed for Microsoft HoloLens 2 using MRTK and OpenXR. Surgeons can visualize volumetric patient bone structures in 3D space, rotate and inspect fractures, slice anatomical models along cross-sectional planes, and interact using natural hand tracking.",
    tech: ["Unity3D", "Microsoft HoloLens 2", "MRTK", "OpenXR", "C#"],
    keyWork: [
      "Volumetric bone model reconstruction and rendering from CT and MRI scans",
      "Spatial hand-tracking gesture controls for 3D model rotation, zoom, and translation",
      "Cross-sectional planar slicing tool for internal anatomical examination"
    ],
    architecturalHighlights: [
      "MRTK solver pipelines for ergonomic spatial anchoring in sterile operating room environments",
      "Optimized polygon meshes for smooth 60 FPS rendering on mobile XR hardware"
    ]
  },
  {
    id: "mimadim-homestudio",
    title: "MimadimHomeStudio",
    subtitle: "Real-Time Interior Customization & Furniture Swapping",
    category: "Unreal Engine 5",
    role: "Unreal Engine Developer",
    shortDescription: "Real-time interior design and customization engine in Unreal Engine 5 with dynamic asset swapping and instant lighting adjustments.",
    fullDescription: "An interactive architectural visualization tool built in UE5 using C++, Blueprints, and Data Assets. Users can customize room finishes, wall colors, lighting configurations, and dynamically swap furniture pieces while maintaining accurate world coordinates, pivot rotations, and collision bounds.",
    tech: ["Unreal Engine 5", "C++", "Blueprints", "Data Assets", "Lumen Lighting"],
    keyWork: [
      "Dynamic furniture swapping system preserving world position, rotation, and dimensions",
      "Runtime material and color switching pipeline using Blueprint dynamic material instances",
      "Real-time architectural lighting preview powered by UE5 Lumen"
    ],
    architecturalHighlights: [
      "Data Asset-driven catalog system decoupling furniture definitions from gameplay code",
      "Collision checking preventing overlapping placements during item swaps"
    ]
  },
  {
    id: "speech-therapy",
    title: "Speech Therapy Station (Speak & Rise)",
    subtitle: "Pediatric Articulation & Web3D Voice Platform",
    category: "Healthcare & Web3D",
    role: "Web3D & Systems Architect",
    shortDescription: "Interactive 3D web platform for pediatric speech therapy featuring real-time AI voice recognition and articulation scoring.",
    fullDescription: "An interactive pediatric speech rehabilitation platform built in Three.js and WebGL. Ravi refactored a 2,000+ line legacy monolith into clean decoupled modules (GameStateMachine, Classroom3D, GameRegistry) and integrated Sarvam AI voice activity detection and speech-to-text for real-time gamified pronunciation feedback.",
    tech: ["Three.js", "JavaScript", "Web Audio API", "Sarvam AI (VAD & STT)", "Electron"],
    keyWork: [
      "Architectural refactoring into decoupled GameStateMachine and Classroom3D modules",
      "Integration of Sarvam AI Voice Activity Detection (VAD) and Speech-to-Text for pronunciation scoring",
      "Interactive 3D character animation blending and gamified audio reward feedback"
    ],
    architecturalHighlights: [
      "Dynamic GameRegistry enabling plug-and-play addition of new therapy exercises without changing core logic",
      "Low-latency Web Audio API synthesizers for instant child audio reinforcement"
    ]
  },
  {
    id: "vr-boat-simulation",
    title: "VR Boat Simulation",
    subtitle: "Maritime Pilot Training Simulator",
    category: "Games & VR",
    role: "Unity Simulation Developer",
    shortDescription: "Virtual reality maritime simulator training pilots in transitioning from small vessels to large commercial cargo ships.",
    fullDescription: "A high-fidelity maritime training simulation in Unity for VR headsets. Focused on realistic open-water navigation, vessel handling characteristics, helm controls, realistic wave simulation, and custom buoyant water physics.",
    tech: ["Unity3D", "C#", "VR SDK", "HLSL Water Shaders", "Physics Engine"],
    keyWork: [
      "Developed realistic buoyant water physics and wave interaction models",
      "Engineered ship helm controls and vessel inertia mechanics",
      "Created dynamic weather and water shader effects"
    ],
    architecturalHighlights: [
      "Buoyancy force calculation sampling water height in real time to simulate realistic vessel heave and pitch",
      "Comfort-tuned VR camera motion damping to minimize motion sickness during heavy waves"
    ]
  },
  {
    id: "vr-zombie-shooter",
    title: "VR Zombie Shooter",
    subtitle: "First-Person 6DOF Immersive VR Game",
    category: "Games & VR",
    role: "Unity Gameplay Developer",
    shortDescription: "Action-packed first-person VR shooter featuring wave survival, spatial audio mapping, and realistic 6DOF weapon handling.",
    fullDescription: "An immersive virtual reality first-person game developed in Unity. Features realistic physics-based weapon reloading, tactile 6DOF controller feedback, spatial 3D audio, and intelligent enemy pathfinding algorithms.",
    tech: ["Unity3D", "C#", "OpenXR", "VR 6DOF", "Spatial Audio", "NavMesh AI"],
    keyWork: [
      "Implemented 6DOF physical weapon grab, aim, and reload mechanics",
      "Constructed multi-tiered enemy wave spawner with dynamic NavMesh routing",
      "Configured 3D spatial soundscapes for audio-guided positional awareness"
    ],
    architecturalHighlights: [
      "Object pooling pipeline for projectiles, particle impacts, and enemy ragdolls to maintain a steady 90 FPS",
      "Inverse kinematics (IK) player hand tracking"
    ]
  },
  {
    id: "system-guard",
    title: "System Guard",
    subtitle: "Universal Kiosk Telemetry, Standby Tracker & Remote Kill-Switch",
    category: "Healthcare & Web3D",
    role: "Systems & Security Engineer",
    shortDescription: "Drop-in Electron kiosk monitoring module with hardware UUID fingerprinting, standby telemetry, and remote kill switch.",
    fullDescription: "A security and telemetry module designed for commercial medical kiosks. Auto-registers with a private Cloudflare Worker, generates tamper-resistant hardware UUID fingerprints, tracks active vs. standby operating time, and supports instant remote station locking.",
    tech: ["Electron", "Node.js crypto", "Cloudflare Workers", "Linux/Windows", "Bash"],
    keyWork: [
      "Hardware station fingerprinting via DMI product UUID and Linux machine ID",
      "Inactivity detection transitioning kiosks cleanly between Active and Standby modes",
      "Remote kill-switch protocol enabling instantaneous lockdown during security breaches"
    ],
    architecturalHighlights: [
      "Zero-dependency drop-in module requiring zero modification to existing game runtimes",
      "Heartbeat ping architecture reporting kiosk health every 60 seconds with offline resilience"
    ]
  },
  {
    id: "clean-the-city",
    title: "Clean the City",
    subtitle: "Mobile Physics Cleanup Game",
    category: "Games & VR",
    role: "Unity Mobile Developer",
    shortDescription: "Mobile casual game featuring black-hole gravitational physics to collect and absorb city debris.",
    fullDescription: "A mobile arcade game where players navigate an expanding black hole through urban environments, consuming city debris and buildings. Optimized for silky-smooth touch controls and high frame rates on both iOS and Android.",
    tech: ["Unity3D", "C#", "Mobile (iOS/Android)", "Physics2D/3D", "Shader Graph"],
    keyWork: [
      "Implemented gravitational suction physics and scalable mesh deformation",
      "Optimized lighting, dynamic shadows, and draw-call batching for mobile performance",
      "Integrated monetization SDKs and responsive touch controls"
    ],
    architecturalHighlights: [
      "Dynamic object scaling and collision culling to support hundreds of simultaneous physics bodies on mobile devices"
    ]
  },
  {
    id: "iris-recognition",
    title: "Iris Recognition & Distance Detection",
    subtitle: "Biometric Identification & User Distance Prototype",
    category: "AI & Vision",
    role: "Computer Engineering Intern",
    shortDescription: "Image processing pipeline in Python and OpenCV calculating user distance from screen and biometric iris tracking.",
    fullDescription: "Developed during Ravi's engineering internship at Invisible Fiction. Built an image processing pipeline in Python and OpenCV that continuously tracks user eye position, computes user-to-screen distance to mitigate ocular fatigue, and evaluates iris features for biometric identification.",
    tech: ["Python", "OpenCV", "NumPy", "Image Processing"],
    keyWork: [
      "Engineered user-to-screen geometric distance calculation using camera optical parameters",
      "Constructed pupil and iris localization and contour isolation algorithms",
      "Designed biometric distance warning thresholds to promote ergonomic computer usage"
    ],
    architecturalHighlights: [
      "Lightweight algorithmic pipeline running efficiently on standard webcam hardware without dedicated depth sensors"
    ]
  },
  {
    id: "creative-spaces",
    title: "Creative Spaces Website",
    subtitle: "Interactive Architectural Showcase",
    category: "Healthcare & Web3D",
    role: "Freelance Web Developer",
    shortDescription: "Clean, responsive portfolio website built for an interior design and architectural client.",
    fullDescription: "A responsive website built for an interior design studio showcasing architectural design projects, interactive project galleries, and modern typography.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Web"],
    keyWork: [
      "Constructed responsive image galleries and smooth scroll navigation",
      "Optimized asset loading and mobile layout fidelity"
    ],
    architecturalHighlights: [
      "Clean semantic HTML structure with high Google Lighthouse performance scores"
    ]
  }
];
