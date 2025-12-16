import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import { Icon } from '@iconify/react';

const App = () => {
  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans relative selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Projects />
      </main>

      <footer className="relative bg-slate-900 text-white py-28 overflow-hidden text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary-900/40 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Icon icon="mdi:shield-lock-outline" className="text-6xl text-primary-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-8 leading-tight break-keep">
            안전한 비즈니스 환경을 위한,
            <br />
            <span className="text-primary-400">든든한 기초</span>를 다지고 있습니다.
          </h2>
          <p className="text-slate-300 mb-12 text-xl font-medium leading-relaxed break-keep max-w-2xl mx-auto">
            함께 성장하며 가치를 만들어갈 기회를 기다립니다.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a
              href="mailto:yourblueoceans@gmail.com"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-primary-600 rounded-2xl font-bold text-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-900/30 hover:-translate-y-1"
            >
              <Icon icon="mdi:email-fast-outline" className="text-2xl group-hover:animate-pulse" /> 이메일 보내기
            </a>
            <a
              href="https://github.com/yourblueoceans"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/10 border-2 border-white/10 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <Icon icon="mdi:github" className="text-2xl transition-transform group-hover:rotate-12" /> GitHub 방문
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center font-medium">
            <p>&copy; 2025 SANGWON SUH. All rights reserved.</p>
            <p className="font-mono mt-4 md:mt-0 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              Designed & Built with <Icon icon="logos:react" className="text-lg" /> and <Icon icon="logos:tailwindcss-icon" className="text-lg" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

