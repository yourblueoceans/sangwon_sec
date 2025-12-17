import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Profile from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import { Icon } from '@iconify/react';

const App = () => {
  return (
    <div className="bg-bg-main min-h-screen text-slate-700 font-sans relative selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main className="relative z-10">
        <Intro />
        <Profile />
        <About />
        <Education />
        <Projects />
      </main>
      
      <footer className="relative bg-slate-900 text-white py-32 overflow-hidden text-center border-t-[6px] border-primary-600">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
            <Icon icon="mdi:shield-account-outline" className="text-7xl text-primary-500 mx-auto mb-10" />
            
            {/* Footer Copy 수정: 성장 가능성 강조 */}
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
