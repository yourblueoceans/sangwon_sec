import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const BASE_PATH = import.meta.env.BASE_URL;
const getPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

const Hero3D = () => {
  return (
    <section id="profile" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B1120]">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/claritystream-55FEXkAZJ2jV9DAXsajMVbCY/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-bold mb-8 shadow-sm uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_#2dd4bf]"></span> Cloud & Infra Security
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading leading-tight drop-shadow-lg">
            <span className="block text-slate-300 mb-2 text-2xl md:text-3xl font-bold">SANGWON SUH</span>
            다양한 경험을
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">단단한 보안 기술로</span>
            <br />
            연결합니다.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-slate-300 text-lg lg:text-xl leading-relaxed space-y-4 break-keep font-medium max-w-2xl mx-auto drop-shadow-md"
        >
          <p>
            비즈니스 현장에서 기른 <span className="text-teal-400 font-bold">'문제 해결력'</span> 위에
            <br className="md:hidden" /> 1,200시간의 <span className="text-teal-400 font-bold">'클라우드 보안 전문성'</span>을 더해 시스템의 안정성을 지킵니다.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold text-base rounded-full transition-all shadow-lg hover:shadow-teal-500/50 hover:-translate-y-1 backdrop-blur-sm"
          >
            프로젝트 보기 <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={getPath('assets/resume.pdf')}
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold text-base rounded-full hover:bg-white/20 hover:border-white/50 transition-all shadow-sm backdrop-blur-md"
          >
            <Icon icon="mdi:file-document-outline" /> 이력서 다운로드
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold drop-shadow">Scroll to Explore</span>
        <Icon icon="mdi:chevron-down" className="text-3xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero3D;
