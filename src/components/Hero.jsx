import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section id="profile" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-bg-main overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-primary-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Profile & Philosophy
          </motion.div>

          {/* 타이틀 밑줄 디자인 적용 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight break-keep font-heading section-title-underline inline-block relative z-10">
                위기 관리의 경험 위에,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                   보안의 전문성
                </span>을 더하다.
              </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg lg:text-xl leading-relaxed space-y-6 break-keep font-medium"
          >
            <p>
              대한항공 미주본부에서 태풍으로 인한 공항 마비 상황을 조율하며 <strong>'위기 속에서의 침착함'</strong>을 배웠고, 미국 현지 근무 경험을 통해 <strong>'기술을 비즈니스 언어로 통역하는 법'</strong>을 익혔습니다.
            </p>
            <p>
              이제 그 경험 위에 <strong>1,200시간</strong>의 치열한 보안 교육을 더해, 단순히 시스템을 지키는 것을 넘어 <strong>비즈니스의 안전한 항해를 돕는 엔지니어</strong>가 되겠습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-4"
          >
             <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1">
                프로젝트 보기 <Icon icon="mdi:arrow-down" />
             </a>
             <a href="/sangwon_sec/assets/resume.pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg rounded-2xl hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm">
                <Icon icon="mdi:file-document-outline" /> 이력서
             </a>
          </motion.div>
        </div>

        {/* Right: Visual (배지 제거, 이름표 추가) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex flex-col items-center"
        >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white bg-slate-100 group hover:scale-[1.02] transition-transform duration-500 mb-8">
               <video
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
                poster="/sangwon_sec/assets/hero-profile.png"
              >
                <source src="/sangwon_sec/assets/hero-profile.mp4" type="video/mp4" />
              </video>
               <img 
                src="/sangwon_sec/assets/hero-profile.png" 
                alt="Sangwon Suh" 
                className="absolute inset-0 w-full h-full object-cover -z-10"
                onError={(e) => e.target.style.display='none'}
               />
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">SANGWON SUH</h3>
                <p className="text-primary-600 font-bold text-sm uppercase tracking-wider">Cloud & Infra Security Engineer</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
