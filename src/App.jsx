import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

// 복사 가능한 연락처 카드 컴포넌트
const ContactCard = ({ icon, label, value, colorClass }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-[2rem] w-full max-w-sm backdrop-blur-sm hover:bg-white/10 hover:border-primary-500/50 transition-all group overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${colorClass} transition-opacity duration-500`} />

      <div className={`mb-6 p-5 rounded-full bg-slate-800 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 ${copied ? 'text-green-400' : 'text-slate-300'}`}>
        <Icon icon={copied ? 'mdi:check-bold' : icon} className="text-3xl md:text-4xl" />
      </div>

      <div className="text-center z-10">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">{label}</p>
        <p className="text-lg md:text-2xl font-black text-slate-200 group-hover:text-white transition-colors break-all">
          {value}
        </p>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            Copied to Clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {!copied && (
        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 text-xs font-medium flex items-center gap-1">
          <Icon icon="mdi:content-copy" /> Click to Copy
        </div>
      )}
    </motion.button>
  );
};

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans relative selection:bg-primary-500 selection:text-white">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block"
      />

      <Navbar />
      <main>
        <Intro />
        <Hero />
        <About />
        <Education />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[#0B1120] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary-400 font-mono text-sm tracking-[0.3em] uppercase block mb-4 animate-pulse">
                Ready to work together?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-200">Connect</span>
              </h2>
              <p className="text-slate-400 mt-8 text-xl font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                지금은 단단한 기초를 다지는 단계지만,<br className="hidden md:block" />
                함께 성장하며 내일의 가치를 만들어갈 준비가 되어있습니다.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <ContactCard
                icon="mdi:phone-outline"
                label="Phone Number"
                value="010-9465-0226"
                colorClass="from-blue-500/20 to-transparent"
              />
              <ContactCard
                icon="mdi:email-outline"
                label="Email Address"
                value="yourblueoceans@gmail.com"
                colorClass="from-teal-500/20 to-transparent"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
