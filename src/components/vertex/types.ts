export interface NavStation {
  id: string;
  code: string;
  label: string;
  title: string;
}

export const STATIONS: NavStation[] = [
  { id: "home", code: "00", label: "00 // Dev Center", title: "Spatial Command" },
  { id: "about", code: "01", label: "01 // Profile", title: "Engineering Competencies" },
  { id: "smartscopy", code: "02", label: "02 // SmartScopy", title: "Live OT Surgical XR" },
  { id: "mimadim", code: "03", label: "03 // MimadimPlus", title: "Procedural UE5 CAD" },
  { id: "nopainheals", code: "04", label: "04 // NoPainHeals", title: "Hardened Kiosk & E2EE" },
  { id: "vision-ai", code: "05", label: "05 // Edge AI", title: "Motion Tracking Vision" },
  { id: "skills", code: "06", label: "06 // Core Systems", title: "Skills & Architecture" },
  { id: "contact", code: "07", label: "07 // Transmission", title: "Initiate Contact" },
];
