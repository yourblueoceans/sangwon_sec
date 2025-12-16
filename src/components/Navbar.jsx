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
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className="font-mono text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-mint-600"
        >
          S.SUH<span className="text-mint-500">_SEC</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-600 transition-colors hover:text-mint-700 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-mint-400 opacity-0 transition-all group-hover:w-full group-hover:opacity-100" />
            </a>
          ))}
          <a
            href="mailto:yourblueoceans@gmail.com"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-mint-600 hover:shadow-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

