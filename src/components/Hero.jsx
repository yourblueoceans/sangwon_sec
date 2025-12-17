import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const Profile = () => {
  return (
    <section id="profile" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-1 bg-primary-600 rounded-full" />
            <span className="text-primary-700 font-bold text-sm tracking-widest uppercase">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight break-keep"
          >
            설득의 언어를 가진
            <br />
            <span className="text-primary-600">보안 엔지니어</span>입니다.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg leading-relaxed space-y-6 break-keep font-medium"
          >
            <p>
              Sales와 PM으로 근무하며 다양한 이해관계자와 소통하고 문제를 조율하는 <strong>'유연함'</strong>을 익혔습니다.
            </p>
            <p>
              이후 <strong>1,200시간</strong>의 고강도 기술 교육을 통해 리눅스, 네트워크, 클라우드 인프라를 바닥부터 다지며 <strong>'단단함'</strong>을 더했습니다.
            </p>
            <p className="p-6 bg-white border-l-4 border-primary-500 shadow-sm rounded-r-xl italic text-slate-700">
              "보안은 기술을 넘어선 소통입니다. 비즈니스의 언어로 보안의 가치를 증명하겠습니다."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 flex gap-4"
          >
            <a
              href={getAssetPath('assets/resume.pdf')}
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1"
            >
              <Icon icon="mdi:file-document-outline" className="text-xl" /> 이력서 확인하기
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
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 group">
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
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg border border-slate-100 text-right">
              <p className="text-xs text-slate-500 font-bold uppercase">Role</p>
              <p className="text-lg font-extrabold text-primary-700">Cloud Security</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;

