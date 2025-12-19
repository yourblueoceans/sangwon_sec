import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-[#050912] border-top border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-white font-black text-lg tracking-widest">SANGWON SUH</h4>
          <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">Cloud & Infra Security Engineer</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourblueoceans"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" className="text-xl" />
          </a>
        </div>

        <div className="text-slate-600 text-xs font-mono">
          &copy; 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
