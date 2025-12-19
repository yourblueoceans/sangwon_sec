import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CopyItem = ({ icon, text, label }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary-300 transition-all group">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
            <Icon icon={icon} className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>
            <span className="text-sm md:text-base font-bold text-slate-800 break-all">{text}</span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="relative p-2 text-slate-400 hover:text-primary-600 transition-colors"
          title="클립보드에 복사"
        >
          <Icon icon={copied ? 'mdi:check-circle' : 'mdi:content-copy'} className={`text-2xl transition-all ${copied ? 'text-green-500 scale-110' : ''}`} />
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-slate-800 text-white px-2 py-1 rounded shadow-md whitespace-nowrap animate-fadeIn">
              복사완료!
            </span>
          )}
        </button>
      </div>
    );
  };

  const navLinks = [
    { name: 'Home', href: '#root' },
    { name: 'Profile', href: '#profile' },
    { name: 'History', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 group">
            <Icon icon="mdi:shield-check" className="text-primary-400 group-hover:text-primary-300 transition-colors" />
            <span>SANGWON<span className="text-primary-400">.SEC</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-2.5 rounded-full bg-primary-600/90 text-white text-xs font-bold hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/40 backdrop-blur-sm border border-white/10 cursor-pointer"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-6 shadow-2xl h-screen">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { setIsContactOpen(true); setMobileMenuOpen(false); }}
              className="text-xl font-bold text-primary-400 text-left"
            >
              Contact Me
            </button>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-white/20"
            >
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-primary-50 rounded-full text-primary-600 mb-4 shadow-inner">
                  <Icon icon="mdi:card-account-mail-outline" className="text-4xl" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Get in Touch</h3>
                <p className="text-slate-500 text-sm break-keep">
                  언제든 편하게 연락주세요.<br/>확인 후 신속하게 답변 드리겠습니다.
                </p>
              </div>

              <div className="space-y-4">
                <CopyItem icon="mdi:email-outline" text="yourblueoceans@gmail.com" label="Email Address" />
                <CopyItem icon="mdi:phone-outline" text="010-9465-0226" label="Phone Number" />
              </div>

              <button
                onClick={() => setIsContactOpen(false)}
                className="mt-8 w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
              >
                닫기
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
