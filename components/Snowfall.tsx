"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Snowfall = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { opacity: 0 }, // Transparent Background 
        particles: {
          color: { value: "#ffffff" }, // white
          move: {
            direction: "bottom", // flow tobottom
            enable: true,
            random: false,
            speed: 2, // flow speed
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 250, // no of snow
          },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 0.2, max: 1 } }, // differnt size
        },
      }}
    />
  );
};