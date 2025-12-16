import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0a192f]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetPath('assets/about-photo.jpg')} // 웃고 있는 사진 경로 확인 필요!
          alt="Seo Sangwon Profile Background"
          className="h-full w-full object-cover object-center opacity-40 grayscale-[30%]"
        />
        {/* Dark Gradient Overlay for readability & mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Intro Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-mono text-cyan-400 backdrop-blur-sm"
          >
            Security Specialist Portfolio
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl"
          >
            Fortifying the Future: <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Bridging Infrastructure
            </span>
            <br />
            &amp; Cloud Security.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            시스템 엔지니어링 기반의 탄탄한 이해도와 공격자 관점의 보안 역량을 갖춘,
            <strong className="text-white"> 실무 투입이 준비된 보안 전문가</strong> 서상원입니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-[#0a192f] shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-slate-400/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-slate-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;



