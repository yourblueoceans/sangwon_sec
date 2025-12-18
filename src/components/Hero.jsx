import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="profile" ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center py-24 bg-bg-main overflow-hidden">
      
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
            Proven Consistency
          </motion.div>

          {/* Copywriting: Fact-based Impact */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight break-keep font-heading"
          >
            비전공의 한계를<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
               성실함이라는 데이터
            </span>로<br/>
            증명했습니다.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg lg:text-xl leading-relaxed space-y-6 break-keep font-medium"
          >
            <p>
              <strong>1,200시간</strong>의 교육 과정, <strong>평균 92점</strong>의 성적, 그리고 <strong>6개의 자격증</strong>.
            </p>
            <p>
              화려한 말보다 맡은 바를 끝까지 해내는 <strong>'책임감'</strong>과 동료들과 협업하며 문제를 해결하는 <strong>'소통 능력'</strong>이 저의 진짜 무기입니다.
            </p>
            <div className="mt-8 p-6 bg-white border-l-4 border-primary-500 shadow-premium rounded-r-2xl">
              <p className="italic text-slate-800 font-bold text-lg">
                "요령 피우지 않고, 우직하게 결과를 만들어내는<br/>든든한 팀원이 되겠습니다."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-4"
          >
             <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1">
                프로젝트 성과 보기 <Icon icon="mdi:arrow-down" />
             </a>
             <a href="/sangwon_sec/assets/resume.pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg rounded-2xl hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm">
                <Icon icon="mdi:file-document-outline" /> 이력서 확인
             </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex justify-center"
        >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white bg-slate-100 group hover:scale-[1.02] transition-transform duration-500">
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
               
               {/* Badge */}
               <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-slate-100 text-right">
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Target</p>
                   <p className="text-xl font-extrabold text-primary-800 leading-none">Cloud<br/>Infra Security</p>
               </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
