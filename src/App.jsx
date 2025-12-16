import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import { Icon } from '@iconify/react';

const App = () => {
  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <Hero />
      <main className="relative z-10 pb-20">
        <About />
        <Education />
        <Projects />
      </main>
      
      <footer className="relative bg-slate-900 text-white py-24 overflow-hidden text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-900/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-8 leading-tight">
                Security is not a product,<br/>
                it's a <span className="text-primary-400">Process.</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
                귀사의 비즈니스 여정에 신뢰할 수 있는 보안 파트너가 되겠습니다.
            </p>
            <div className="flex justify-center gap-6">
                <a href="mailto:yourblueoceans@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-primary-600 rounded-xl font-bold hover:bg-primary-500 transition-all shadow-lg hover:-translate-y-1">
                    <Icon icon="mdi:email" className="text-xl" /> Contact Me
                </a>
                <a href="https://github.com/yourblueoceans" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/10 rounded-xl font-bold hover:bg-white/20 transition-all">
                    <Icon icon="mdi:github" className="text-xl" /> GitHub
                </a>
            </div>
            <div className="mt-20 pt-8 border-t border-white/10 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 SANGWON SUH. All rights reserved.</p>
                <p className="font-mono text-xs mt-2 md:mt-0">Built with React & Tailwind CSS</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

