import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "./HackerRoom";
import CanvasLoader from "./CanvasLoader";

import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "./Target";
import ReactLogo from "./ReactLogo";

const Hero = () => {
  //   const x = useControls("HackerRoom", {
  //     positionX: { value: 2.5, min: -10, max: 10 },
  //     positionY: { value: 2.5, min: -10, max: 10 },
  //     positionZ: { value: 2.5, min: -10, max: 10 },
  //     rotationX: { value: 0, min: -10, max: 10 },
  //     rotationY: { value: 0, min: -10, max: 10 },
  //     rotationZ: { value: 0, min: -10, max: 10 },
  //     scale: { value: 1, min: 0.1, max: 10 },
  //   });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 787 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col gap-3 c-space mt-20 sm:mt-36">
        <p className="text-xl font-medium text-white text-center font-generalsans sm:text-3xl">
          Hi, I am Hari Saputra <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full-stack Developer </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              //   position={[x.positionX, x.positionY, x.positionZ]}
              //   rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              //   scale={[x.scale, x.scale, x.scale]}
            />

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
