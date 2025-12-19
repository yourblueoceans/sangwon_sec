import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Profile from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import { Icon } from '@iconify/react';

const App = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans relative">
      {/* Custom Cursor */}
      <div ref={cursorRef} className={`custom-cursor ${isHovered ? 'hovered' : ''}`}></div>

      <Navbar />
      <main className="relative z-10">
        <div id="root">
          <Intro />
        </div>
        <div id="profile">
          <Profile />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      
      <footer className="relative bg-slate-900 text-white py-32 overflow-hidden text-center border-t-[6px] border-primary-600">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
            <Icon icon="mdi:shield-account-outline" className="text-7xl text-primary-500 mx-auto mb-10" />
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-10 leading-tight break-keep">
                안전한 비즈니스를 위한<br/>
                <span className="text-primary-400">가능성</span>을 열어갑니다.
            </h2>
            <p className="text-slate-300 mb-16 text-2xl font-medium leading-relaxed break-keep max-w-3xl mx-auto">
                지금은 단단한 기초를 다지는 단계지만,<br/>
                함께 성장하며 내일의 가치를 만들어갈 준비가 되어있습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-20">
                 <a href="mailto:yourblueoceans@gmail.com" className="group flex items-center justify-center gap-4 px-12 py-6 bg-primary-600 rounded-3xl font-bold text-xl hover:bg-primary-500 transition-all shadow-xl hover:-translate-y-2">
                   <Icon icon="mdi:email-fast-outline" className="text-3xl group-hover:animate-pulse" /> 이메일 보내기
                 </a>
                 <a href="https://github.com/yourblueoceans" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-4 px-12 py-6 bg-white/10 border-2 border-white/10 rounded-3xl font-bold text-xl hover:bg-white/20 transition-all hover:-translate-y-2">
                   <Icon icon="mdi:github" className="text-3xl transition-transform group-hover:rotate-12" /> GitHub 방문
                 </a>
            </div>
            
            <div className="pt-10 border-t border-white/10 text-slate-400 text-base flex flex-col md:flex-row justify-between items-center font-medium">
                <p>&copy; 2025 SANGWON SUH. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
