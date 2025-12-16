import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { getAssetPath } from '../utils/basePath';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardBase =
  'relative overflow-hidden rounded-3xl border border-slate-200 bg-white/5 p-6 shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl';

const certs = [
  { src: 'assets/cert-sc900.jpg', title: 'SC-900', issuer: 'Microsoft' },
  { src: 'assets/cert-ccst.jpg', title: 'CCST Cybersecurity', issuer: 'Cisco' },
  { src: 'assets/cert-linux.jpg', title: '리눅스마스터 2급', issuer: 'KAIT' },
  { src: 'assets/cert-network.jpg', title: '네트워크관리사 2급', issuer: 'ICQA' },
  { src: 'assets/cert-korean-history.jpg', title: '한국사능력검정 1급', issuer: '국사편찬위원회' },
  { src: 'assets/cert-toeic.jpg', title: 'TOEIC Speaking (IH/150)', issuer: 'ETS' },
];

const SpotlightCard = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const spotlightStyle = useMemo(
    () => ({
      background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.12), transparent 60%)`,
    }),
    [pos],
  );

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className={`${cardBase} group`}
      style={spotlightStyle}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

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
    <section
      id="about"
      className="space-y-8 rounded-3xl bg-[#0a101f] p-8 text-slate-100 shadow-[0_30px_90px_rgba(0,0,0,0.45)] ring-1 ring-white/5"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">About</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Trust Grid</h2>
        <p className="max-w-3xl text-slate-200/80">
          비즈니스 가치와 보안을 동시에 설계하는 집요한 시큐리티 컨설턴트, 서상원입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:auto-rows-[minmax(220px,1fr)] md:grid-cols-3">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-2 md:row-span-2"
        >
          <SpotlightCard>
            <div className="relative h-full overflow-hidden rounded-3xl">
              <img
                src={getAssetPath('assets/about-photo.jpg')}
                alt="Sangwon Seo portrait"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end space-y-3 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#64ffda]">Profile</p>
                <h3 className="text-2xl font-semibold text-white">From Sales to Security Specialist</h3>
                <p className="leading-relaxed text-slate-200/85">
                  비전공자의 한계를 1년 만에 캡스톤 금상으로 증명한 집요함을 가졌습니다.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-1"
        >
          <SpotlightCard>
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(100,255,218,0.08),transparent_35%),#0b1224] text-center">
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-slate-200">
                <Icon icon="mdi:map-outline" className="h-7 w-7 text-[#64ffda]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Global Experience</p>
                <p className="text-sm text-slate-200/80">USA(Sales) · Laos(PM) · Korea(Security)</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-3"
        >
          <SpotlightCard>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Tech Stack</p>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#64ffda]">
                  continuously learning
                </span>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-slate-200/60">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a101f] via-transparent to-transparent" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a101f] via-transparent to-transparent" />
                <div className="flex gap-10 whitespace-nowrap px-4 py-5 animate-marquee" style={{ animationDuration: '24s' }}>
                  {techIcons.concat(techIcons).map((icon, idx) => (
                    <Icon key={`${icon}-${idx}`} icon={icon} className="h-12 w-12 text-slate-100" />
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-1"
        >
          <SpotlightCard>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-slate-200">
                <Icon icon="ph:trophy-duotone" className="h-7 w-7 text-[#64ffda]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Award</p>
                <p className="text-sm text-slate-200/80">2025 Capstone Design Award (Gold)</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-3"
        >
          <SpotlightCard>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Certification Wall</p>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">hover to inspect</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {certs.map((cert) => (
                  <div
                    key={cert.src}
                    className="group relative flex flex-col items-start gap-2 overflow-hidden rounded-3xl border border-slate-200 bg-white/5 p-3 shadow-md"
                    title={`${cert.title} - ${cert.issuer}`}
                  >
                    <div className="h-20 w-full overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-slate-200/60">
                      <img
                        src={getAssetPath(cert.src)}
                        alt={cert.title}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{cert.title}</p>
                      <p className="text-xs text-slate-300">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-2"
        >
          <SpotlightCard>
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-slate-200">
                <Icon icon="mdi:handshake-outline" className="h-7 w-7 text-[#64ffda]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Crisis Management &amp; Communication</p>
                <p className="text-sm text-slate-200/80">
                  Korean Air &amp; Overseas Sales 경험 기반으로 위기 커뮤니케이션과 비즈니스 조율 역량을 갖추고 있습니다.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

