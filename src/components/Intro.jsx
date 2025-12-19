import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '@iconify/react';

const Intro = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: '#0B1120' },
    fpsLimit: 120,
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: ['#2DD4BF', '#3B82F6', '#ffffff'] },
      shape: { type: 'circle' },
      opacity: { value: 0.6, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
      links: {
        enable: true,
        distance: 150,
        color: '#3B82F6',
        opacity: 0.3,
        width: 1,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.8 } },
        push: { particles_nb: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B1120] text-white">
      {/* Particle Network */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/50 pointer-events-none" />

      <div className="relative z-10 text-center px-4 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-teal-500/30 bg-teal-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.3)]"
        >
          <Icon icon="mdi:shield-link-variant-outline" className="text-teal-400 text-xl animate-pulse" />
          <span className="text-teal-300 font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold">
            Cloud & Infra Security
          </span>
        </motion.div>

        <div className="flex flex-col items-center justify-center font-black tracking-tighter leading-none mb-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-2xl mb-2 md:mb-4"
          >
            BRIDGING
          </motion.h1>
          <div className="h-[60px] md:h-[100px] lg:h-[140px] flex items-center">
            <TypeAnimation
              sequence={[
                'SECURITY & BUSINESS',
                2500,
                'TECH & COMMUNICATION',
                2500,
                'RISK & STABILITY',
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-4xl md:text-6xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-[0_0_30px_rgba(45,212,191,0.5)]"
              cursor
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-slate-300 text-lg md:text-2xl font-medium tracking-wide max-w-3xl mx-auto leading-relaxed"
        >
          비즈니스의 언어로 소통하고, 엔지니어의 기술로 보호합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <p className="text-slate-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase">SANGWON SUH</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal-500/70 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll to Explore</span>
        <Icon icon="mdi:chevron-down" className="text-2xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Intro;
