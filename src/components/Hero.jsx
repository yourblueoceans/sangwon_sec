import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  useEffect(() => {
    const scriptId = 'unicorn-studio-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = 'https://cdn.unicorn.studio/v1/unicornstudio.js';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#050912] via-[#050b16] to-[#050912]">
      <div className="absolute inset-0 z-0">
        <div data-us-project="PuO2KBP1Y6YloDEcCCgp" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,255,218,0.16),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(140deg,rgba(5,9,18,0.85),rgba(5,9,18,0.95))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          <p className="text-sm font-mono uppercase tracking-[0.35em] text-[#64ffda]">
            {'> SYSTEM_READY...'}
          </p>
          <h1 className="gradient-text text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Protecting Business Value through Security Technology.
          </h1>
          <p className="text-lg text-slate-200/90 tracking-tight">서상원 | Security Consultant</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15, duration: 0.8 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="absolute -inset-12 animate-pulse-glow rounded-full bg-[radial-gradient(circle,rgba(100,255,218,0.25),transparent_55%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border-[0.5px] border-white/20 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,255,218,0.15),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.18),transparent_35%)] mix-blend-screen" />
            <video
              src={getAssetPath('assets/hero-profile.mp4')}
              autoPlay
              loop
              muted
              playsInline
              className="relative h-[460px] w-[340px] object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-[#64ffda]/35" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



