import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '@iconify/react';

const Intro = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B1120]">
      
      {/* 1. [Background] Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <iframe 
            src='https://my.spline.design/claritystream-55FEXkAZJ2jV9DAXsajMVbCY/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="3D Background"
            className="w-full h-full object-cover scale-105 pointer-events-none"
        ></iframe>
        {/* 가독성을 위한 오버레이 */}
        <div className="absolute inset-0 bg-[#0B1120]/60 backdrop-blur-[1px] z-10"></div>
      </div>

      {/* 2. [Content] Typography */}
      <div className="relative z-20 text-center px-4 w-full max-w-7xl mt-[-5vh]">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8 md:mb-12 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/90 font-mono text-xs md:text-sm tracking-[0.4em] uppercase border border-teal-500/30 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            PORTFOLIO
          </span>
        </motion.div>

        {/* Main Title Area */}
        <div className="relative font-black tracking-tighter leading-none text-white mix-blend-overlay opacity-90">
            <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-[12vw] md:text-[8rem] lg:text-[10rem] bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl"
            >
                SECURITY
            </motion.h1>
            
            {/* Typing Effect */}
            <div className="h-[40px] md:h-[80px] lg:h-[100px] flex items-center justify-center mt-2 md:mt-4">
                <TypeAnimation
                sequence={[
                    1000,
                    'ENGINEER',
                    2000,
                    'ARCHITECT',
                    2000,
                    'SPECIALIST',
                    2000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                className="text-4xl md:text-6xl lg:text-7xl text-teal-400 font-heading drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                cursor={true}
                />
            </div>
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-slate-300 text-sm md:text-xl font-medium tracking-[0.5em] uppercase border-t border-white/10 pt-8 inline-block px-12">
            SANGWON SUH
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, y: [0, 10, 0] }} 
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        <Icon icon="mdi:chevron-down" className="text-2xl animate-bounce" />
      </motion.div>

    </section>
  );
};

export default Intro;
