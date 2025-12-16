import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-20 bg-white overflow-hidden">
      {/* Background Decor (Subtle Mint Blobs) */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-mint-100/50 blur-[80px] mix-blend-multiply" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[80px] mix-blend-multiply" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-mint-200 bg-mint-50 px-4 py-1.5 text-sm font-semibold text-mint-700 shadow-sm"
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
            <span className="relative text-mint-600">
              SUH.
              <svg
                className="absolute -bottom-1 left-0 h-3 w-full text-mint-400 opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-xl font-medium text-slate-600 lg:text-2xl"
          >
            <span className="marker-highlight">Cloud Security Engineer</span> & <br className="hidden lg:block" />
            Infrastructure Architect
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
              className="rounded-xl bg-mint-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-mint-600/30 transition-all hover:-translate-y-0.5 hover:bg-mint-700 hover:shadow-mint-600/40"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-mint-500 hover:text-mint-700"
            >
              More About Me
            </a>
          </motion.div>
        </div>

        {/* Right: Visual (깔끔한 카드 스타일) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute inset-0 scale-105 rotate-3 rounded-[3rem] bg-mint-200 blur-sm opacity-50" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src={getAssetPath('assets/hero-profile.mp4')} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



