import { useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const assetBase = import.meta.env.BASE_URL;

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
    <section className="relative isolate flex h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div data-us-project="PuO2KBP1Y6YloDEcCCgp" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a192f]/92 via-[#0a192f]/88 to-[#0a192f]/95" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">
            {'> SYSTEM_READY...'}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Protecting Business Value through Security Technology.
          </h1>
          <p className="text-lg text-slate-300">서상원 | Security Consultant</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15, duration: 0.8 }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[#64ffda]/50 bg-white/5 shadow-glow backdrop-blur">
              <video
                src={`${assetBase}assets/hero-profile.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="h-[420px] w-[320px] object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#64ffda]/25 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



