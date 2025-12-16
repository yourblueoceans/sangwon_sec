import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-20 bg-[#F8FAFC] overflow-hidden">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-teal-100/40 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-700 shadow-sm"
          >
            Ready to Deploy 🚀
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 lg:text-7xl"
          >
            SANGWON <br />
            <span className="relative inline-block text-teal-600">SUH.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-xl font-medium text-slate-600 lg:text-2xl"
          >
            Cloud Security Engineer & <br className="hidden lg:block" />
            <span className="font-bold text-teal-600">Infrastructure Architect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
          >
            인프라 구축부터 클라우드 보안 아키텍처까지.
            <br />
            <strong>비즈니스 가치</strong>를 보호하는 실전형 보안 전문가입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl bg-teal-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:-translate-y-1 hover:bg-teal-800"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-teal-500 hover:text-teal-700"
            >
              More About Me
            </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="absolute -z-10 h-[110%] w-[110%] rounded-full bg-teal-50 blur-3xl" />
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-white shadow-2xl">
            <img
              src={getAssetPath('assets/hero-profile.jpg')}
              alt="Sangwon Suh"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
              <source src={getAssetPath('assets/hero-profile.mp4')} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

