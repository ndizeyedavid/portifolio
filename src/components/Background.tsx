import Orb from "./Backgrounds/Orb/Orb";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 opacity-15 w-full h-full">
      <Orb
        hoverIntensity={1}
        rotateOnHover={true}
        hue={10}
        forceHoverState={false}
      />
    </div>
  );
}
