import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B1120] text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-teal-600/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <span className="text-teal-400/90 font-mono text-xs md:text-base tracking-[0.6em] uppercase border-b border-teal-500/20 pb-4 block w-fit mx-auto">
            System & Cloud Protection
          </span>
        </motion.div>

        {/* Typography */}
        <div className="flex flex-col items-center justify-center font-black tracking-tighter leading-none">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-6xl md:text-8xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-600 drop-shadow-2xl mb-2"
          >
            SECURITY
          </motion.h1>

          <div className="h-[60px] md:h-[140px] flex items-center justify-center">
            <TypeAnimation
              sequence={[1000, 'ENGINEER', 3000, 'ARCHITECT', 3000, 'SPECIALIST', 3000]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-5xl md:text-8xl lg:text-[9rem] text-teal-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.4)]"
              cursor
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-12 md:mt-16"
        >
          <p className="text-slate-400 text-lg md:text-2xl font-medium tracking-[0.3em] uppercase">SANGWON SUH</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Intro;
