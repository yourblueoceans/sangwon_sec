import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <footer className="relative isolate mt-0 overflow-hidden bg-[#050912] border-t border-slate-800">
      {/* 배경 영상 경로 수정 (/sangwon_sec 추가) */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        src="/sangwon_sec/assets/profile/hero-profile.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050912] via-[#050912]/90 to-[#050912]/95" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 text-center"
      >
        <div className="space-y-4">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-teal-400">
            Ready to Secure Your Business?
          </p>
          <h3 className="text-3xl md:text-4xl font-black text-white font-heading">
            Let's build a safer cloud together.
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            비즈니스의 안정성을 최우선으로 생각하는 엔지니어, 서상원입니다.<br/>
            언제든 편하게 연락주세요.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:yourblueoceans@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-teal-600/20 border border-teal-500/50 text-teal-300 hover:bg-teal-500 hover:text-white transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)] group"
          >
            <Icon icon="mdi:email-outline" className="text-2xl group-hover:animate-pulse" />
            <span className="font-bold">yourblueoceans@gmail.com</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-white/30 hover:text-white hover:bg-white/10"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" className="text-2xl" />
          </a>
        </div>

        <div className="mt-10 pt-10 border-t border-white/10 w-full text-center">
            <p className="text-xs text-slate-600 uppercase tracking-widest">
                &copy; 2025 SANGWON SUH. All Rights Reserved.
            </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;



