import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section id="profile" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-bg-main overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left: Text */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-bold mb-8 shadow-sm uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            About Me
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-snug break-keep font-heading section-title-underline inline-block">
              다양한 현장의 경험을
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">단단한 보안 기술</span>로 연결합니다.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg leading-relaxed space-y-6 break-keep font-medium"
          >
            <p>
              창업부터 해외 근무까지, 다양한 비즈니스 현장에서 몸으로 부딪히며 <strong>'문제 해결력'</strong>과 <strong>'소통의 유연함'</strong>을 길러왔습니다.
            </p>
            <p>
              이제는 그 경험 위에 <strong>1,200시간</strong>의 몰입적인 기술 교육을 더해, 시스템의 안정성을 지키는 <strong>보안 엔지니어</strong>로서 새로운 도전을 시작합니다.
            </p>
            <div className="p-6 bg-white/60 border-l-4 border-primary-500 rounded-r-xl backdrop-blur-sm">
              <p className="italic text-slate-800 font-bold text-base md:text-lg">
                "화려한 스펙보다는 맡은 일을 끝까지 해내는 끈기와,
                <br />
                동료와 함께 성장하는 태도를 약속드립니다."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold text-base rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1"
            >
              프로젝트 보기 <Icon icon="mdi:arrow-down" />
            </a>
            <a
              href="/sangwon_sec/assets/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold text-base rounded-2xl hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm"
            >
              <Icon icon="mdi:file-document-outline" /> 이력서
            </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex flex-col items-center"
        >
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white bg-slate-100 group hover:scale-[1.02] transition-transform duration-500 mb-6 glass-panel">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/sangwon_sec/assets/hero-profile.png"
            >
              <source src="/sangwon_sec/assets/hero-profile.mp4" type="video/mp4" />
            </video>
            <img
              src="/sangwon_sec/assets/hero-profile.png"
              alt="Sangwon Suh"
              className="absolute inset-0 w-full h-full object-cover -z-10"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-black text-slate-900 font-heading tracking-tight">SANGWON SUH</h3>
            <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mt-2">Cloud & Infra Security Engineer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
