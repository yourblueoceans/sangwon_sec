import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const BASE_PATH = import.meta.env.BASE_URL;
const getPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

// Mobile Floating Action Bar
const FloatingActionBar = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      className="md:hidden fixed bottom-6 left-6 right-6 z-50 h-16 bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl flex items-center justify-evenly px-2"
    >
      <a href="tel:010-9465-0226" className="flex flex-col items-center gap-1 text-slate-300 hover:text-white p-2">
        <Icon icon="mdi:phone" className="text-xl" />
        <span className="text-[10px] font-bold">Call</span>
      </a>
      <div className="w-px h-8 bg-white/10" />
      <a href="mailto:yourblueoceans@gmail.com" className="flex flex-col items-center gap-1 text-slate-300 hover:text-white p-2">
        <Icon icon="mdi:email" className="text-xl" />
        <span className="text-[10px] font-bold">Email</span>
      </a>
      <div className="w-px h-8 bg-white/10" />
      <a href={getPath('assets/resume.pdf')} target="_blank" className="flex flex-col items-center gap-1 text-primary-400 hover:text-primary-300 p-2" rel="noreferrer">
        <Icon icon="mdi:file-document" className="text-xl" />
        <span className="text-[10px] font-bold">Resume</span>
      </a>
    </motion.div>
  );
};

const ContactCard = ({ icon, label, value, type }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex flex-col items-center justify-center w-full max-w-lg p-1 cursor-auto md:cursor-none"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${type === 'email' ? 'from-teal-500 via-cyan-400 to-teal-500' : 'from-blue-500 via-indigo-400 to-blue-500'} rounded-3xl opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse`} />

      <div className="relative w-full h-full bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />

        <div className={`mb-6 p-6 rounded-full bg-white/5 border border-white/10 shadow-2xl relative transition-all duration-500 group-hover:bg-white/10 ${copied ? 'scale-110 border-green-500/50' : ''}`}>
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                <Icon icon="mdi:check-bold" className="text-4xl text-green-400" />
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Icon icon={icon} className={`text-4xl ${type === 'email' ? 'text-teal-400' : 'text-blue-400'}`} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center z-10 w-full">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-3">{label}</p>
          <p className="text-lg sm:text-xl md:text-3xl font-black text-slate-200 group-hover:text-white transition-colors whitespace-nowrap font-heading tracking-tight">
            {value}
          </p>
        </div>

        <motion.div
          className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors"
        >
          <Icon icon={copied ? 'mdi:check-circle-outline' : 'mdi:content-copy'} />
          <span>{copied ? '복사 완료!' : '클릭하여 복사하기'}</span>
        </motion.div>
      </div>
    </motion.button>
  );
};

const App = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 터치 디바이스에서는 커서 로직 비활성화
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${x}px`;
        cursorDotRef.current.style.top = `${y}px`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({ left: `${x}px`, top: `${y}px` }, { duration: 400, fill: 'forwards', easing: 'ease-out' });
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        (target.tagName === 'IMG' && target.parentElement?.classList.contains('cursor-zoom-in'));

      if (isClickable) {
        document.body.classList.add('hovering');
      } else {
        document.body.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('hovering');
    };
  }, []);

  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans relative selection:bg-primary-500 selection:text-white cursor-auto md:cursor-none">
      {/* [New] Global Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-600 origin-left z-[100]" style={{ scaleX }} />

      {/* Dual Custom Cursor (PC only) */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:block" />

      <Navbar />

      <main>
        <Intro />
        <Hero />
        <About />
        <Education />
        <Projects />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 md:py-32 bg-[#050912] relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh] pb-32 md:pb-32"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="text-center mb-16 md:mb-24">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-400 font-mono text-xs tracking-[0.2em] uppercase mb-6 animate-fadeIn">
                Open for Opportunities
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white font-heading leading-tight tracking-tight mb-8">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Connect.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                보안 위협으로부터 비즈니스를 지키는 여정,<br className="hidden md:block" />
                서상원이 든든한 파트너가 되어드리겠습니다.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full">
              <ContactCard icon="mdi:phone-in-talk" label="Phone Number" value="010-9465-0226" type="phone" />
              <ContactCard icon="mdi:email-check" label="Email Address" value="yourblueoceans@gmail.com" type="email" />
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Bar (Mobile Only) */}
      <FloatingActionBar />

      <Footer />
    </div>
  );
};

export default App;
