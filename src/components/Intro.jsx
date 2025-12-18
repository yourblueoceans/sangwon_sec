import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      {/* Fluid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-600/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-blue-700/30 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary-300 font-mono text-sm md:text-xl tracking-[0.5em] uppercase mb-12 font-bold drop-shadow-lg"
        >
          Cloud & Infra Security
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-black tracking-tighter leading-none"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-7xl md:text-9xl lg:text-[11rem] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-2xl">
              I AM
            </span>
            <div className="h-[120px] md:h-[200px] flex items-center justify-center">
              <TypeAnimation
                sequence={['SECURITY', 2000, 'SANGWON', 2000, 'ENGINEER', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-6xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-blue-500 drop-shadow-[0_0_40px_rgba(45,212,191,0.6)]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '120px' }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full blur-[1px]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-10 text-slate-400 text-lg md:text-2xl font-medium tracking-wide"
        >
          Protecting Value through Communication & Tech
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-primary-500/80">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Intro;
