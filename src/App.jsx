import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-mint-100 selection:text-mint-900">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <About />
        <Projects />
        <Timeline />
      </main>
      <footer className="py-12 text-center border-t border-slate-100 bg-slate-50">
        <p className="text-slate-500 text-sm">&copy; 2025 SANGWON SUH. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

