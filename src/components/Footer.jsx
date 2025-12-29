import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Footer = () => {
  const contactInfo = {
    email: "yourblueoceans@gmail.com",
    phone: "010-9465-0226",
    github: "https://github.com/yourblueoceans", 
  };

  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <footer id="contact" className="relative bg-[#0B1120] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>
      
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Persuasive Message */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold mb-8 shadow-[0_0_15px_rgba(20,184,166,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              READY TO WORK
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-6 leading-tight"
            >
              비즈니스의 성장을 지탱하는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 relative">
                흔들림 없는 보안 인프라
                <svg className="absolute w-full h-2 bottom-1 left-0 text-teal-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>를<br />
              약속합니다.
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed break-keep"
            >
              다양한 비즈니스 현장에서 체득한 <strong>소통 능력</strong>과 1,200시간의 <strong>기술적 몰입</strong>을 더해, 
              팀의 목표를 가장 안전하게 실현하는 엔지니어가 되겠습니다.
            </motion.p>
          </div>

          {/* Right: Contact Cards */}
          <div className="flex flex-col gap-5">
            
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-teal-500/50 transition-all cursor-pointer shadow-lg hover:shadow-teal-900/20"
              onClick={() => handleCopy(contactInfo.email, 'email')}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center text-teal-400 group-hover:text-white transition-colors duration-300 border border-white/5">
                  <Icon icon="mdi:email-fast-outline" className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    Email Address <Icon icon="mdi:arrow-right" className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white font-mono tracking-tight group-hover:text-teal-300 transition-colors">{contactInfo.email}</p>
                </div>
              </div>
              <div className="relative">
                <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Icon icon="mdi:content-copy" className="text-slate-500 text-xl group-hover:text-white transition-colors" />
                </div>
                {copied === 'email' && (
                  <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="absolute right-8 top-2 text-[10px] font-bold text-teal-400 bg-black/80 px-2 py-1 rounded-md whitespace-nowrap">Copied!</motion.span>
                )}
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all cursor-pointer shadow-lg hover:shadow-blue-900/20"
              onClick={() => handleCopy(contactInfo.phone, 'phone')}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 group-hover:text-white transition-colors duration-300 border border-white/5">
                  <Icon icon="mdi:phone-in-talk-outline" className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    Phone Number <Icon icon="mdi:arrow-right" className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white font-mono tracking-tight group-hover:text-blue-300 transition-colors">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="relative">
                <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Icon icon="mdi:content-copy" className="text-slate-500 text-xl group-hover:text-white transition-colors" />
                </div>
                {copied === 'phone' && (
                  <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="absolute right-8 top-2 text-[10px] font-bold text-blue-400 bg-black/80 px-2 py-1 rounded-md whitespace-nowrap">Copied!</motion.span>
                )}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
              <p className="text-white text-base font-bold mb-1">SANGWON SUH</p>
              <p className="text-slate-500 text-xs font-medium tracking-wide">
                © 2025 All rights reserved. Built with React & Tailwind.
              </p>
          </div>
          
          <div className="flex gap-4">
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="group relative w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all hover:-translate-y-1">
                <Icon icon="mdi:github" className="text-2xl" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">GitHub</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="group relative w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all hover:-translate-y-1">
                <Icon icon="mdi:email-edit-outline" className="text-2xl" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Mail Me</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
