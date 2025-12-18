import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary-400 font-mono text-sm md:text-lg tracking-[0.5em] uppercase mb-8"
        >
          Cloud & Infra Security
        </motion.p>

        {/* Smoke Text Effect */}
        <div className="relative flex flex-col items-center justify-center">
          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-2 smoke-text text-white/5 leading-none"
            data-text="SECURITY"
          >
            SECURITY
          </h1>
          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter smoke-text text-white/5 leading-none"
            data-text="ENGINEER"
            style={{ animationDelay: '1s' }}
          >
            ENGINEER
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100px' }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 text-slate-400 text-lg md:text-xl font-medium tracking-wide"
        >
          SANGWON SUH
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Intro;
