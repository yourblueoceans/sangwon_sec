import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tighter text-white transition-colors hover:text-cyan-400 font-mono"
        >
          S.SUH<span className="text-cyan-500">_SEC</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-400 transition-colors hover:text-white group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="mailto:yourblueoceans@gmail.com"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan-500 hover:text-[#020617]"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

