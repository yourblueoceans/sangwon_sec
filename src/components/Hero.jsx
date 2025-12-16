import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const Hero = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTilt = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-bg-main pt-10">
      {/* Dynamic Background Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[100px] opacity-60 animate-blob mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] opacity-60 animate-blob animation-delay-2000 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary-200 text-primary-700 text-xs font-bold mb-6 shadow-sm w-fit backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600" />
            </span>
            Communication & Security Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] font-heading break-keep"
          >
            사람의 언어로 설득하고,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 relative inline-block">
              기술의 언어로 증명합니다.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl text-slate-600 font-bold mb-8 font-heading"
          >
            Cloud Security Engineer, <span className="text-slate-900">SANGWON SUH.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-600 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl break-keep mb-10"
          >
            Sales와 PM으로 다져진 <strong>소통의 유연함</strong> 위에, <br className="hidden lg:block" />
            <strong>1,200시간</strong>의 치열한 기술 교육으로 <strong>엔지니어링 기초</strong>를 쌓았습니다.
            <br />
            비즈니스의 성장을 돕는 보안 파트너가 되겠습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-base hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2"
            >
              프로젝트 보기 <Icon icon="mdi:arrow-down" />
            </a>
            <a
              href={getAssetPath('assets/resume.pdf')}
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:border-primary-500 hover:text-primary-600 transition-all shadow-sm flex items-center gap-2 group"
            >
              이력서 다운로드 <Icon icon="mdi:download" className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right: Tilt visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center h-full"
        >
          <div
            className="relative w-full max-w-sm aspect-[3.5/5] rounded-[2.5rem] bg-white p-2 shadow-2xl border-[8px] border-white/50 backdrop-blur-xl"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div
              ref={cardRef}
              className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 transition-transform duration-200"
              style={{ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/50 to-blue-50/50 rounded-[2rem]" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                poster={getAssetPath('assets/hero-profile.png')}
              >
                <source src={getAssetPath('assets/hero-profile.mp4')} type="video/mp4" />
              </video>
              <img
                src={getAssetPath('assets/hero-profile.png')}
                alt="Sangwon Suh"
                className="absolute inset-0 w-full h-full object-cover -z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 -left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-20"
            >
              <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                <Icon icon="mdi:shield-check-outline" className="text-2xl" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Core Competency</p>
                <p className="text-sm font-bold text-slate-900">Communication &<br />Security Infra</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

