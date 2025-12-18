import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: '#0F172A' },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#2DD4BF' },
      links: {
        color: '#0D9488',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary-300 font-mono text-xs md:text-xl tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 md:mb-8"
        >
          Cloud & Infra Security
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center md:items-baseline font-black tracking-tighter leading-none"
        >
          <span className="text-8xl md:text-[10rem] lg:text-[12rem] text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-blue-600 drop-shadow-[0_0_30px_rgba(45,212,191,0.5)]">
            S
          </span>

          <span className="text-5xl md:text-8xl lg:text-[9rem] text-white mt-2 md:mt-0">
            <TypeAnimation
              sequence={['ECURITY', 2500, 'ANGWON', 2500]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              cursor
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl md:text-6xl lg:text-[5rem] font-black text-slate-500 tracking-tighter mt-2 leading-none opacity-50"
        >
          ENGINEER
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 md:mt-16 px-4"
        >
          <p className="text-slate-400 text-sm md:text-lg font-medium tracking-wide break-keep">
            Protecting Value through Communication & Tech
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll Down</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Intro;
