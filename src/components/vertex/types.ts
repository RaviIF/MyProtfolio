export interface NavStation {
  id: string;
  code: string;
  label: string;
  title: string;
}

export const STATIONS: NavStation[] = [
  { id: "home", code: "00", label: "00 // Home", title: "Introduction" },
  { id: "about", code: "01", label: "01 // About Me", title: "Profile & Expertise" },
  { id: "smartscopy", code: "02", label: "02 // SmartScopy", title: "Medical XR Platform" },
  { id: "mimadim", code: "03", label: "03 // MimadimPlus", title: "3D CAD Engine" },
  { id: "nopainheals", code: "04", label: "04 // NoPainHeals", title: "Interactive Therapy Kiosk" },
  { id: "vision-ai", code: "05", label: "05 // Motion AI", title: "Computer Vision Games" },
  { id: "skills", code: "06", label: "06 // Skills & Stack", title: "Technologies & Services" },
  { id: "contact", code: "07", label: "07 // Contact", title: "Get In Touch" },
];
