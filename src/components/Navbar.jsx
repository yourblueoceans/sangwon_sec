import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#root' }, // Intro 섹션
    { name: 'Profile', href: '#profile' },
    { name: 'History', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactSection = document.querySelector('#contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-white tracking-tighter font-heading flex items-center gap-2 group">
          <Icon icon="mdi:shield-check" className="text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
          SANGWON<span className="text-teal-400">.SEC</span>
        </a>

        {/* Desktop Menu with Magnetic Effect */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <MagneticLink key={link.name} href={link.href}>{link.name}</MagneticLink>
          ))}
          <motion.a
            href="#contact"
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-teal-500 text-white text-xs font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 cursor-pointer"
          >
            CONTACT ME
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0B1120]/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-6 shadow-2xl h-[100dvh]"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-300 hover:text-white hover:text-teal-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={handleContactClick} className="text-2xl font-bold text-teal-400 mt-4">CONTACT ME</a>
        </motion.div>
      )}
    </nav>
  );
};

// Helper: Magnetic Link Component
const MagneticLink = ({ children, href }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };
    const reset = () => setPosition({ x: 0, y: 0 });
    const { x, y } = position;

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="text-sm font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-wide relative group py-2 px-1"
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
    );
};

export default Navbar;
