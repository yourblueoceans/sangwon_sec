import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Intro = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B1120] text-white">
      {/* Animated Cyber Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cyber-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 text-center px-4 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md"
        >
          <span className="text-teal-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
            Cloud & Infra Security
          </span>
        </motion.div>

        <div className="flex flex-col items-center justify-center relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-2xl"
          >
            SECURITY
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-teal-400 via-teal-200 to-transparent opacity-80"
          >
            ENGINEER
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '120px' }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto rounded-full blur-[1px]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 text-slate-400 text-lg md:text-2xl font-medium tracking-widest uppercase"
        >
          SANGWON SUH
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-teal-500 to-transparent"></div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-teal-500/50">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Intro;
