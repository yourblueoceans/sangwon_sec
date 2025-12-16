import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-[100px] opacity-70 animate-blob mix-blend-multiply" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-70 animate-blob animation-delay-2000 mix-blend-multiply" />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 px-6 lg:px-8">
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-100 text-teal-800 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            Communication & Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15] font-heading"
          >
            사람을 설득하던 언어로,<br />
            이제는{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 relative inline-block">
              시스템을 지킵니다.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl text-slate-600 font-medium mb-8"
          >
            SANGWON SUH.
            <br />
            <span className="text-base text-slate-500 font-normal">Cloud Security Engineer based in Korea</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-600 max-w-lg leading-relaxed mb-10 text-lg"
          >
            Sales와 PM으로 쌓은 <strong>소통의 유연함</strong> 위에,
            <br />
            <strong>보안의 견고함</strong>을 더했습니다.
            <br />
            비즈니스의 언어를 이해하는 보안 엔지니어입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-1"
            >
              프로젝트 보기
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-teal-500 hover:text-teal-700 transition-all shadow-sm"
            >
              더 알아보기
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white bg-white group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              poster="/sangwon_sec/assets/hero-profile.png"
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
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-12 -left-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3"
          >
            <div className="bg-teal-50 p-2.5 rounded-xl text-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 12c5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">Specialty</p>
              <p className="text-sm font-bold text-slate-900">Cloud Security</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

