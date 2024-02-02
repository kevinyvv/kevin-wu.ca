import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Stars = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    preset: "stars",
    size: {
      value: { min: 0.05, max: 0.15 }
    },
    opacity: {
        value: 0.5,
    },

  };
  return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            className="opacity-0 dark:opacity-100"/> 
  );
};

export default Stars;