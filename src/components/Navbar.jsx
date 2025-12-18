import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#root' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-slate-900/80 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <Icon icon="mdi:shield-check" className="text-primary-400" />
          <span className="font-heading">
            SSW<span className="text-primary-400">.SEC</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:yourblueoceans@gmail.com"
            className="px-5 py-2 rounded-full bg-primary-600 text-white text-xs font-bold hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/30"
          >
            CONTACT ME
          </a>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
