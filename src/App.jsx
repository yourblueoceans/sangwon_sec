import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300">
      <Hero />
      <main className="relative z-10">
        <About />
        <Projects />
        <Timeline />
      </main>
      
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50">
        <p>&copy; 2025 Sangwon Seo. All rights reserved.</p>
        <p className="mt-2 font-mono text-xs">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;

