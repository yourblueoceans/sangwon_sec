import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Cursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block mix-blend-difference">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-50 blur-sm animate-pulse-slow"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400 rounded-full"></div>
    </div>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans relative selection:bg-teal-500/30 selection:text-teal-900 cursor-auto md:cursor-none">
      
      {/* [Upgrade] Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="bg-noise"></div>

      <Navbar />
      <Intro />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Footer />
      
      <Cursor />
    </div>
  );
};

export default App;
