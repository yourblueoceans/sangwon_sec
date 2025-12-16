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
    <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg-main pt-20">
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] h-[700px] w-[700px] rounded-full bg-primary-100/60 blur-[100px] opacity-70 mix-blend-multiply animate-blob" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[100px] opacity-70 mix-blend-multiply animate-blob animation-delay-2000" />

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-800 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-600" />
            </span>
            Ready to Deploy: 즉시 전력감
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-heading font-extrabold leading-[1.1] tracking-tight text-slate-900 lg:text-7xl"
          >
            SANGWON <br />
            <span className="relative inline-block text-primary-600">
              SUH.
              <svg
                className="absolute -bottom-1 left-0 h-3 w-full text-primary-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="15" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-xl font-medium text-slate-600 lg:text-2xl"
          >
            Cloud Security Engineer & <br className="hidden lg:block" />
            <span className="font-bold text-primary-700">Infrastructure Architect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
          >
            "문서를 잠그다(Lockument)"라는 아이디어를
            <br />
            <strong>비즈니스를 지키는 보안 아키텍처</strong>로 구현합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl bg-primary-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-1 hover:bg-primary-700"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-primary-500 hover:text-primary-700"
            >
              More About Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 relative flex justify-center lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-white shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              poster={getAssetPath('assets/hero-profile.jpg')}
              onError={(e) => {
                e.currentTarget.poster = getAssetPath('assets/hero-profile.jpg');
              }}
            >
              <source src={getAssetPath('assets/hero-profile.mp4')} type="video/mp4" />
            </video>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
          >
            <div className="rounded-lg bg-primary-100 p-2 text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500">Security Level</p>
              <p className="text-sm font-bold text-slate-900">Enterprise Grade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

