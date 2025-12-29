import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

// [New] High-End Fluid Cursor Component
const AdvancedCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleLinkHoverStart = () => setIsHovered(true);
    const handleLinkHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const clickables = document.querySelectorAll('a, button, .cursor-pointer, .clickable');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      {/* Main Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="absolute top-0 left-0 w-2.5 h-2.5 bg-teal-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#2dd4bf]"
      />

      {/* Trailing Ring */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          opacity: isClicked ? 0.8 : 0.4,
          backgroundColor: isHovered ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="absolute top-0 left-0 border border-teal-400/50 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px]"
      >
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-teal-400 rounded-full opacity-50"></div>
          </motion.div>
        )}
      </motion.div>
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
      
      {/* Scroll Progress Bar */}
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
      
      <AdvancedCursor />
    </div>
  );
};

export default App;
