import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-20 bg-[#020617] overflow-hidden">
      {/* Background Ambience (Aurora Effect) */}
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Ready to Deploy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-7xl"
          >
            SANGWON <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">SUH.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-xl font-light text-slate-400 lg:text-2xl"
          >
            Cloud Security Engineer & <br className="hidden lg:block" />
            Infrastructure Architect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-lg leading-relaxed text-slate-400"
          >
            인프라 구축부터 클라우드 보안 아키텍처까지.
            <br />
            단순 방어가 아닌, <strong>비즈니스 연속성</strong>을 지키는 엔지니어링을 지향합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-[#020617] shadow-lg shadow-white/5 transition-colors hover:bg-slate-200"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-700 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-cyan-500 hover:text-cyan-400"
            >
              More About Me
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Visual (Bento Style Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute inset-0 scale-95 rotate-3 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl">
            <div className="relative aspect-[4/5]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-90"
              >
                <source src={getAssetPath('assets/hero-profile.mp4')} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">STATUS</span>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="text-sm font-bold text-white">Security Operation Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



