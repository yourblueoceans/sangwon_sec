import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardBase =
  'rounded-2xl border border-white/5 bg-[#112240]/80 backdrop-blur-md p-6 shadow-lg transition hover:border-[#64ffda]/60 hover:shadow-glow';

const assetBase = import.meta.env.BASE_URL;

const About = () => {
  const techIcons = [
    'logos:aws',
    'logos:docker-icon',
    'logos:python',
    'logos:react',
    'carbon:security',
    'simple-icons:wireshark',
  ];

  return (
    <section id="about" className="space-y-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">About</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Trust Grid</h2>
        <p className="max-w-3xl text-slate-400">
          비즈니스 가치와 보안을 동시에 설계하는 집요한 시큐리티 컨설턴트, 서상원입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[minmax(180px,1fr)] md:grid-cols-3 md:grid-rows-2">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} md:col-span-2 md:row-span-2`}
        >
          <div className="flex h-full flex-col gap-4 md:flex-row">
            <div className="overflow-hidden rounded-xl bg-white/5">
              <img
                src={`${assetBase}assets/about-photo.jpg`}
                alt="Sangwon Seo portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#64ffda]">
                Profile
              </p>
              <h3 className="text-2xl font-semibold text-white">
                From Sales to Security Specialist
              </h3>
              <p className="leading-relaxed text-slate-300">
                비전공자의 한계를 1년 만에 캡스톤 금상으로 증명한 집요함을 가졌습니다.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={cardBase}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/5 p-3">
              <Icon icon="mdi:map-outline" className="h-6 w-6 text-[#64ffda]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Global Experience</p>
              <p className="text-sm text-slate-300">USA(Sales) - Laos(PM) - Korea(Security)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`${cardBase} md:col-span-3`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Tech Stack</p>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#64ffda]">
                continuously learning
              </span>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-white/5">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#112240] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#112240] to-transparent" />
              <div className="flex gap-8 whitespace-nowrap px-2 py-4 animate-marquee">
                {techIcons.concat(techIcons).map((icon, idx) => (
                  <Icon key={`${icon}-${idx}`} icon={icon} className="h-10 w-10 text-slate-200" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={cardBase}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/5 p-3">
              <Icon icon="ph:trophy-duotone" className="h-6 w-6 text-[#64ffda]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Award</p>
              <p className="text-sm text-slate-300">2025 Capstone Design Award (Gold)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} md:col-span-2`}
        >
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white/5 p-3">
              <Icon icon="mdi:handshake-outline" className="h-6 w-6 text-[#64ffda]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Crisis Management &amp; Communication</p>
              <p className="text-sm text-slate-300">
                Korean Air &amp; Overseas Sales 경험 기반으로 위기 커뮤니케이션과 비즈니스 조율 역량을 갖추고 있습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



