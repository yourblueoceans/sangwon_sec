import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Footer = () => {
  // [Update] 서상원 님의 실제 연락처 반영
  const contactInfo = {
    email: 'yourblueoceans@gmail.com',
    phone: '010-9465-0226',
    github: 'https://github.com/yourblueoceans',
    // blog: 'https://blog.naver.com/...'
  };

  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <footer id="contact" className="relative bg-[#0B1120] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              OPEN FOR OPPORTUNITIES
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
              함께 더 안전한
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                클라우드 환경
              </span>
              을
              <br />
              구축하겠습니다.
            </h2>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed break-keep">
              실무 경험과 보안 전문성을 갖춘 엔지니어가 필요하시다면 언제든 연락 주세요.
            </p>
          </div>

          {/* Right: Contact Cards */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-teal-500/50 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => handleCopy(contactInfo.email, 'email')}
            >
              <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <Icon icon="mdi:email-outline" className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email Address</p>
                  <p className="text-lg md:text-xl font-bold text-white font-mono tracking-tight">{contactInfo.email}</p>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-end">
                <Icon icon="mdi:content-copy" className="text-slate-500 text-xl group-hover:text-white transition-colors" />
                {copied === 'email' && (
                  <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="text-[10px] font-bold text-teal-400 mt-1">
                    Copied!
                  </motion.span>
                )}
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => handleCopy(contactInfo.phone, 'phone')}
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Icon icon="mdi:phone-outline" className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Phone Number</p>
                  <p className="text-lg md:text-xl font-bold text-white font-mono tracking-tight">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-end">
                <Icon icon="mdi:content-copy" className="text-slate-500 text-xl group-hover:text-white transition-colors" />
                {copied === 'phone' && (
                  <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="text-[10px] font-bold text-blue-400 mt-1">
                    Copied!
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">© 2025 SANGWON SUH. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all hover:scale-110"
              aria-label="GitHub"
            >
                <Icon icon="mdi:github" className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
