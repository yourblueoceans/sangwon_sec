import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const assetBase = import.meta.env.BASE_URL;

const Footer = () => {
  return (
    <footer className="relative isolate mt-12 overflow-hidden bg-[#0a192f]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-10"
        src={`${assetBase}assets/footer-bg.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/92 to-[#0a192f]/96" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center"
      >
        <div className="space-y-2">
          <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">
            Ready to Secure Your Business?
          </p>
          <h3 className="text-2xl font-semibold text-white">Let&apos;s talk security outcomes.</h3>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:sangwon.security@example.com"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-[#64ffda]/70 hover:text-[#64ffda]"
            aria-label="Email"
          >
            <Icon icon="mdi:email-outline" className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/sangwon-seo"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-[#64ffda]/70 hover:text-[#64ffda]"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sangwon-seo"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-[#64ffda]/70 hover:text-[#64ffda]"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" className="h-6 w-6" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;



