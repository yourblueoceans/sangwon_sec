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
        <Intro />        {/* 1. 화려한 랜딩 페이지 */}
        <Profile />      {/* 2. 프로필 및 소개 (기존 첫 화면) */}
        <About />        {/* 3. 경력, 기술스택, 자격증 */}
        <Education />    {/* 4. 교육 과정 상세 */}
        <Projects />     {/* 5. 프로젝트 */}
      </main>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white py-24 overflow-hidden text-center border-t-4 border-primary-600">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-8 leading-tight break-keep">
                "안전한 비즈니스 환경을 위한<br/>
                <span className="text-primary-400">든든한 기초</span>를 다지고 있습니다."
            </h2>
            <div className="flex justify-center gap-6 mb-12">
                 <a href="mailto:yourblueoceans@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-primary-600 rounded-xl font-bold hover:bg-primary-500 transition-all shadow-lg hover:-translate-y-1">
                   <Icon icon="mdi:email-outline" className="text-xl" /> 프로젝트 문의
                 </a>
                 <a href="https://github.com/yourblueoceans" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                   <Icon icon="mdi:github" className="text-xl" /> GitHub
                 </a>
            </div>
            <p className="text-slate-500 text-sm">
                &copy; 2025 SANGWON SUH. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

