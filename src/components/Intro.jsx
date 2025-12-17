import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const scrollToProfile = () => {
    const target = document.getElementById('profile');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Effect (Unicorn Style Fluid) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/30 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }} />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-primary-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            Cloud Security Engineer Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50"
        >
          SANGWON<br />SUH.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-3xl text-slate-300 font-medium tracking-tight mb-12"
        >
          From <span className="text-primary-400 font-bold">Persuasion</span> to <span className="text-blue-400 font-bold">Protection</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-4 cursor-pointer select-none"
          onClick={scrollToProfile}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToProfile()}
        >
          <p className="text-sm text-slate-400 font-mono">SCROLL TO EXPLORE</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-primary-400 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
