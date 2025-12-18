import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-900/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-800/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary-300 font-mono text-sm md:text-base tracking-[0.4em] uppercase mb-6"
        >
          Cloud & Infra Security
        </motion.p>

        {/* Smoke Text Effect Applied Here */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-2 smoke-text text-white/10"
            data-text="SECURITY"
          >
            SECURITY
          </h1>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter smoke-text text-white/10"
            data-text="ENGINEER"
            style={{ animationDelay: '1s' }}
          >
            ENGINEER
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 text-slate-400 text-lg font-medium tracking-wide"
        >
          Sangwon Suh
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
