import * as THREE from "three";
import { CameraWaypoint } from "./types";

export const DEFAULT_CAMERA_WAYPOINTS: CameraWaypoint[] = [
  {
    sectionId: "home",
    scrollProgress: 0.0,
    position: new THREE.Vector3(0.2, 2.7, 7.8),
    target: new THREE.Vector3(-0.6, 2.8, 3.5),
  },
  {
    sectionId: "about",
    scrollProgress: 0.14,
    position: new THREE.Vector3(-0.3, 2.8, 2.8),
    target: new THREE.Vector3(0.7, 2.9, -1.5),
  },
  {
    sectionId: "smartscopy",
    scrollProgress: 0.28,
    position: new THREE.Vector3(0.4, 2.9, -2.2),
    target: new THREE.Vector3(-0.7, 3.0, -6.5),
  },
  {
    sectionId: "mimadim",
    scrollProgress: 0.43,
    position: new THREE.Vector3(-0.4, 3.0, -7.2),
    target: new THREE.Vector3(0.7, 3.1, -11.5),
  },
  {
    sectionId: "nopainheals",
    scrollProgress: 0.57,
    position: new THREE.Vector3(0.4, 3.1, -12.2),
    target: new THREE.Vector3(-0.7, 3.2, -16.5),
  },
  {
    sectionId: "vision-ai",
    scrollProgress: 0.71,
    position: new THREE.Vector3(-0.4, 3.2, -17.2),
    target: new THREE.Vector3(0.7, 3.3, -21.5),
  },
  {
    sectionId: "skills",
    scrollProgress: 0.85,
    position: new THREE.Vector3(0.3, 3.3, -22.2),
    target: new THREE.Vector3(-0.7, 3.4, -26.5),
  },
  {
    sectionId: "contact",
    scrollProgress: 1.0,
    position: new THREE.Vector3(0.0, 3.5, -27.2),
    target: new THREE.Vector3(0.0, 3.6, -31.5),
  },
];

export class CameraController {
  private camera: THREE.PerspectiveCamera;
  private waypoints: CameraWaypoint[];

  // Current interpolated values
  private currentPosition = new THREE.Vector3();
  private currentTarget = new THREE.Vector3();

  // Target values derived from scroll
  private targetPosition = new THREE.Vector3();
  private targetLookAt = new THREE.Vector3();

  // Mouse parallax dampening
  private mouseOffset = new THREE.Vector2(0, 0);
  private currentMouseOffset = new THREE.Vector2(0, 0);

  constructor(camera: THREE.PerspectiveCamera, waypoints: CameraWaypoint[] = DEFAULT_CAMERA_WAYPOINTS) {
    this.camera = camera;
    this.waypoints = waypoints;

    if (waypoints.length > 0) {
      this.currentPosition.copy(waypoints[0].position);
      this.currentTarget.copy(waypoints[0].target);
      this.targetPosition.copy(waypoints[0].position);
      this.targetLookAt.copy(waypoints[0].target);
    }
  }

  public setMouseOffset(normalizedX: number, normalizedY: number): void {
    // normalizedX and normalizedY in range [-1, 1]
    this.mouseOffset.set(normalizedX * 0.45, normalizedY * 0.22);
  }

  public update(scrollProgress: number, delta: number): void {
    // 1. Clamp progress between 0 and 1
    const p = Math.max(0, Math.min(1, scrollProgress));

    // 2. Find bounding waypoints
    let startIndex = 0;
    for (let i = 0; i < this.waypoints.length - 1; i++) {
      if (p >= this.waypoints[i].scrollProgress && p <= this.waypoints[i + 1].scrollProgress) {
        startIndex = i;
        break;
      }
    }
    const endIndex = Math.min(startIndex + 1, this.waypoints.length - 1);

    const wStart = this.waypoints[startIndex];
    const wEnd = this.waypoints[endIndex];

    // Local segment progress t in [0, 1]
    const segmentSpan = wEnd.scrollProgress - wStart.scrollProgress;
    const tRaw = segmentSpan > 0 ? (p - wStart.scrollProgress) / segmentSpan : 0;
    // Smooth cosine interpolation
    const t = 0.5 - 0.5 * Math.cos(tRaw * Math.PI);

    // Calculate base position & target
    this.targetPosition.lerpVectors(wStart.position, wEnd.position, t);
    this.targetLookAt.lerpVectors(wStart.target, wEnd.target, t);

    // 3. Smooth mouse parallax interpolation
    const mouseLerpFactor = Math.min(1, delta * 3.5);
    this.currentMouseOffset.lerp(this.mouseOffset, mouseLerpFactor);

    // 4. Smooth camera lerp (smoother scroll follow)
    const cameraLerpFactor = Math.min(1, delta * 4.0);
    this.currentPosition.lerp(this.targetPosition, cameraLerpFactor);
    this.currentTarget.lerp(this.targetLookAt, cameraLerpFactor);

    // 5. Apply to Three.js camera
    this.camera.position.set(
      this.currentPosition.x + this.currentMouseOffset.x,
      this.currentPosition.y - this.currentMouseOffset.y,
      this.currentPosition.z
    );

    this.camera.lookAt(
      this.currentTarget.x,
      this.currentTarget.y,
      this.currentTarget.z
    );
  }
}
