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
    { name: 'Profile', href: '#profile' },
    { name: 'History', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 group">
          <Icon icon="mdi:shield-check" className="text-primary-400 group-hover:text-primary-300 transition-colors" />
          <span>SANGWON<span className="text-primary-400">.SEC</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="px-6 py-2.5 rounded-full bg-primary-600/90 text-white text-xs font-bold hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/40 backdrop-blur-sm border border-white/10 cursor-pointer"
          >
            CONTACT ME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-6 shadow-2xl h-[100dvh]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold text-slate-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-xl font-bold text-primary-400 text-left"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
