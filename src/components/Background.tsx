import LightRays from "./Backgrounds/LightRays/LightRays";
import Orb from "./Backgrounds/Orb/Orb";
// import { LightRays } from "./Backgrounds/LightRays";

export default function Background() {
  return (
    <div className="absolute opacity-50 top-0 w-full h-full left-0 right-0">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
}
