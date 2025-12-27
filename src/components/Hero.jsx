import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const BASE_PATH = import.meta.env.BASE_URL;
const getPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

const Hero = () => {
  return (
    <section id="profile" className="relative min-h-screen w-full flex items-center justify-center py-24 overflow-hidden bg-[#0B1120]">
      
      {/* 1. [Background Layer] Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <iframe 
            src='https://my.spline.design/claritystream-55FEXkAZJ2jV9DAXsajMVbCY/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="3D Background"
            className="w-full h-full object-cover scale-110"
        ></iframe>
        
        {/* 2. [Overlay Layer] 가독성을 위한 딥 네이비 필터 (투명도 85%) */}
        <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-[2px] z-10 pointer-events-none"></div>
      </div>

      {/* 3. [Content Layer] Existing Elements (기존 내용 유지) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-20">
        
        {/* 왼쪽: 텍스트 */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-xs font-bold mb-10 shadow-lg uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_#2dd4bf]"></span>
            Profile & Philosophy
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
              <h2 className="text-4xl lg:text-5xl font-black text-white font-heading drop-shadow-2xl">
                <span className="block mb-4">다양한 현장의 경험을</span>
                <span className="relative inline-block mb-4">
                    <span className="absolute inset-x-0 bottom-2 h-4 bg-teal-900/50 -z-10 blur-sm"></span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 filter drop-shadow-lg">
                       단단한 보안 기술로
                    </span>
                </span>
                <span className="block">연결합니다.</span>
              </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg lg:text-xl leading-loose space-y-8 break-keep font-medium"
          >
            <p>
              창업부터 해외 근무까지, 다양한 비즈니스 현장에서 몸으로 부딪히며 <span className="text-teal-400 font-bold border-b border-teal-500/30">'문제 해결력'</span>과 <span className="text-teal-400 font-bold border-b border-teal-500/30">'소통의 유연함'</span>을 길러왔습니다.
            </p>
            <p>
              이제는 그 경험 위에 <strong className="text-white">1,200시간</strong>의 몰입적인 기술 교육을 더해, 시스템의 안정성을 지키는 <strong className="text-white">보안 엔지니어</strong>로서 새로운 도전을 시작합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-wrap gap-4"
          >
             <a href="#projects" className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold text-base rounded-2xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-1">
                프로젝트 보기 <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform"/>
             </a>
             <a href={getPath('assets/resume.pdf')} target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-slate-200 font-bold text-base rounded-2xl hover:bg-white/10 hover:border-teal-400/50 hover:text-white transition-all shadow-sm backdrop-blur-sm">
                <Icon icon="mdi:file-document-outline" /> 이력서
             </a>
          </motion.div>
        </div>

        {/* 오른쪽: 프로필 비디오/이미지 (기존 유지) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex flex-col items-center"
        >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white/10 bg-slate-800/50 group hover:scale-[1.02] transition-transform duration-500 mb-8 glass-panel ring-1 ring-white/20">
               <video
                autoPlay loop muted playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                poster={getPath('assets/profile/hero-profile.png')}
              >
                <source src={getPath('assets/profile/hero-profile.mp4')} type="video/mp4" />
              </video>
               <img 
                src={getPath('assets/profile/hero-profile.png')}
                alt="Sangwon Suh" 
                className="absolute inset-0 w-full h-full object-cover -z-10"
                onError={(e) => e.target.style.display='none'}
               />
               {/* Video Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <h3 className="text-3xl font-black text-white font-heading tracking-tight drop-shadow-md">SANGWON SUH</h3>
                <p className="text-teal-400 font-bold text-sm uppercase tracking-widest mt-2">Cloud & Infra Security Engineer</p>
            </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, y: [0, 10, 0] }} 
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-1 h-1 bg-slate-500 rounded-full"
            />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
