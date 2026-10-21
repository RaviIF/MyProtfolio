import * as THREE from "three";

export interface CameraWaypoint {
  sectionId: string;
  scrollProgress: number; // 0.0 to 1.0
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export interface StudioSceneOptions {
  onLoadProgress?: (percent: number) => void;
  onLoaded?: () => void;
  onError?: (error: Error) => void;
}

