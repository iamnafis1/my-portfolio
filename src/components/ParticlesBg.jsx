import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBg() {
  const init = async (engine) => { await loadFull(engine); };
  const options = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ['#00D1FF','#FF4DFF','#00FFB2'] },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true, distance: 120, opacity: 0.25, width: 1,
        color: '#a0a0ff'
      },
      move: { enable: true, speed: 1.2 }
    },
    detectRetina: true
  };
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Particles init={init} options={options} />
    </div>
  );
}
