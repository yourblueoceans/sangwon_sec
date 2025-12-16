import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-20 bg-white overflow-hidden">
      {/* Background Decor (Subtle Mint Blobs) */}
      <div className="pointer-events-none absolute top-0 right-0 w-[800px] h-[800px] bg-mint-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="pointer-events-none absolute top-0 right-80 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute -bottom-32 left-20 w-[600px] h-[600px] bg-mint-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
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
            <span className="relative inline-block text-mint-700">
              SUH.
              <svg
                className="absolute -bottom-2 left-0 h-4 w-full text-mint-300 opacity-60 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" opacity="0.6" />
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
              className="rounded-xl bg-mint-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-mint-700/20 transition-all hover:-translate-y-1 hover:bg-mint-800 hover:shadow-mint-700/40"
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

        {/* Right: Visual (Organic Blob Shape) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="absolute -z-10 h-[110%] w-[110%] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-mint-200 opacity-50 blur-md animate-blob" />
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[3rem] border-[6px] border-white bg-white shadow-2xl">
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



