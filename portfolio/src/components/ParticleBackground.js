import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false, zIndex: -1 },
        background: { color: "transparent" },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Particles move away from cursor
            },
          },
        },
        particles: {
          color: { value: "#06b6d4" }, // Cyan color
          links: { enable: false },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: { value: 0.5 },
          size: { value: 2, random: true },
          number: { density: { enable: true, area: 800 }, value: 80 },
        },
      }}
    />
  );
};

export default ParticleBackground;