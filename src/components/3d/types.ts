import * as THREE from "three";

export type ShaderViewportMode = "lit" | "wireframe" | "xray";

export interface CameraWaypoint {
  sectionId: string;
  scrollProgress: number; // 0.0 to 1.0
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export interface StageUpdateParams {
  activeStationId: string;
  delta: number;
  elapsed: number;
  mouseNormX: number; // -1 to 1
  mouseNormY: number; // -1 to 1
  cursorU: number;    // 0 to 1
  cursorV: number;    // 0 to 1
}

export interface StudioSceneOptions {
  onLoadProgress?: (percent: number) => void;
  onLoaded?: () => void;
  onError?: (error: Error) => void;
  initialViewportMode?: ShaderViewportMode;
}
