import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`클립보드에 복사되었습니다: ${text}`);
  };

  return (
    <footer className="relative isolate mt-0 overflow-hidden bg-[#050912] border-t border-slate-800">
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
            비즈니스의 안정성을 최우선으로 생각하는 엔지니어, 서상원입니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
            onClick={() => handleCopy('yourblueoceans@gmail.com')}
          >
            <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400 group-hover:text-teal-300">
              <Icon icon="mdi:email-outline" className="text-xl" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email</p>
              <p className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                yourblueoceans@gmail.com
              </p>
            </div>
            <Icon icon="mdi:content-copy" className="text-slate-500 group-hover:text-white ml-2" />
          </div>

          <div
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
            onClick={() => handleCopy('010-9465-0226')}
          >
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300">
              <Icon icon="mdi:phone-outline" className="text-xl" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone</p>
              <p className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                010-9465-0226
              </p>
            </div>
            <Icon icon="mdi:content-copy" className="text-slate-500 group-hover:text-white ml-2" />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/yourblueoceans"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
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



