import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Profile = () => {
  return (
    <section id="profile" className="relative min-h-screen w-full flex items-center justify-center py-32 bg-bg-main overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-16 h-1.5 bg-primary-600 rounded-full"></span>
            <span className="text-primary-700 font-bold text-lg tracking-widest uppercase">About Me</span>
          </motion.div>

          {/* 폰트 크기 확대: text-5xl -> text-6xl */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-10 leading-tight break-keep font-heading"
          >
            Sales의 유연함 위에,<br/>
            <span className="text-primary-600">엔지니어의 단단함</span>을<br/>
            쌓아가고 있습니다.
          </motion.h2>

          {/* 본문 폰트 크기 확대: text-lg -> text-xl */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-700 text-xl leading-relaxed space-y-8 break-keep font-medium"
          >
            <p>
              해외 영업과 PM으로 일하며 다양한 고객과 소통하고 문제를 조율하는 법을 배웠습니다.
            </p>
            <p>
              이후 보안 기술에 매료되어 <strong>1,200시간</strong>의 치열한 교육 과정을 거쳤습니다. 리눅스 밑바닥부터 클라우드 인프라까지, 기술의 언어를 익히며 실전형 엔지니어로 성장 중입니다.
            </p>
            <p className="p-8 bg-white border-l-[6px] border-primary-500 shadow-sm rounded-r-2xl italic text-slate-800 text-2xl font-heading">
              "비즈니스의 맥락을 이해하는<br/> 든든한 보안 파트너가 되겠습니다."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex gap-4"
          >
             <a href="/sangwon_sec/assets/resume.pdf" target="_blank" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1">
                <Icon icon="mdi:file-document-outline" className="text-2xl" /> 이력서 확인하기
             </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex justify-center"
        >
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-premium border-[14px] border-white bg-slate-100 group">
               <video
                autoPlay loop muted playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
               <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-lg border border-slate-100 text-right">
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Focus Area</p>
                   <p className="text-2xl font-extrabold text-primary-800">Cloud Security<br/>Architecture</p>
               </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Profile;
