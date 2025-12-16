import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-bg-main">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[120px] opacity-60 animate-blob mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[120px] opacity-60 animate-blob animation-delay-2000 mix-blend-multiply" />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24 px-6 lg:px-8">
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 text-primary-700 text-sm font-bold mb-8 shadow-sm uppercase tracking-wider"
          >
            <Icon icon="mdi:shield-check" className="text-lg" />
            Aspiring Cloud Security Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1] font-heading break-keep"
          >
            비즈니스의 언어를 이해하는,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 relative inline-block">
               실전형 보안 엔지니어
            </span>로<br/>
            성장 중입니다.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl lg:text-3xl text-slate-700 font-bold mb-6 font-heading"
          >
            SANGWON SUH.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-600 max-w-xl leading-relaxed mb-12 text-lg lg:text-xl font-medium break-keep"
          >
            Sales와 PM 경험으로 다져진 <strong>소통 능력</strong> 위에, 1,400시간의 치열한 기술 교육으로 <strong>엔지니어링 역량</strong>을 더했습니다.
            <br />
            <br />
            단순히 시스템을 막는 것이 아닌, 비즈니스의 안전한 확장을 돕는 파트너가 되고 싶습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-primary-700 text-white font-bold text-lg hover:bg-primary-800 transition-all shadow-xl shadow-primary-700/20 hover:-translate-y-1 flex items-center gap-2"
            >
              프로젝트 보기 <Icon icon="mdi:arrow-right" />
            </a>
            <a
              href={getAssetPath('assets/resume.pdf')}
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm flex items-center gap-2"
            >
              이력서 다운로드 <Icon icon="mdi:file-download-outline" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white bg-white group hover-shimmer">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              poster={getAssetPath('assets/hero-profile.png')}
            >
              <source src={getAssetPath('assets/hero-profile.mp4')} type="video/mp4" />
            </video>
            <img
              src={getAssetPath('assets/hero-profile.png')}
              alt="Sangwon Suh"
              className="absolute inset-0 w-full h-full object-cover -z-10"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-16 -left-8 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-premium border border-white/40 flex items-center gap-4 z-20"
          >
            <div className="bg-gradient-to-br from-primary-400 to-blue-500 p-3 rounded-2xl text-white shadow-lg">
              <Icon icon="mdi:cloud-lock-outline" className="text-3xl" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-extrabold uppercase tracking-wider mb-1">Focus Area</p>
              <p className="text-xl font-extrabold text-slate-900 leading-none">
                Cloud Security
                <br />
                Architecture
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

