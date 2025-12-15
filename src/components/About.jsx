import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardBase =
  'rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg';

const assetBase = import.meta.env.BASE_URL;

const certs = [
  { src: `${assetBase}assets/cert-sc900.jpg`, title: 'SC-900', issuer: 'Microsoft' },
  { src: `${assetBase}assets/cert-ccst.jpg`, title: 'CCST Cybersecurity', issuer: 'Cisco' },
  { src: `${assetBase}assets/cert-linux.jpg`, title: '리눅스마스터 2급', issuer: 'KAIT' },
  { src: `${assetBase}assets/cert-network.jpg`, title: '네트워크관리사 2급', issuer: 'ICQA' },
  { src: `${assetBase}assets/cert-korean-history.jpg`, title: '한국사능력검정 1급', issuer: '국사편찬위원회' },
  { src: `${assetBase}assets/cert-toeic.jpg`, title: 'TOEIC Speaking (IH/150)', issuer: 'ETS' },
];

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
    <section id="about" className="space-y-8 rounded-3xl bg-[#f8f9fa] p-8 text-slate-900">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">About</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">The Trust Grid</h2>
        <p className="max-w-3xl text-slate-700">
          비즈니스 가치와 보안을 동시에 설계하는 집요한 시큐리티 컨설턴트, 서상원입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[minmax(180px,1fr)] md:grid-cols-3 md:grid-rows-3">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} md:col-span-2 md:row-span-2`}
        >
          <div className="flex h-full flex-col gap-4 md:flex-row">
            <div className="overflow-hidden rounded-xl bg-slate-100">
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
              <h3 className="text-2xl font-semibold text-slate-900">
                From Sales to Security Specialist
              </h3>
              <p className="leading-relaxed text-slate-700">
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
            <div className="rounded-xl bg-slate-100 p-3">
              <Icon icon="mdi:map-outline" className="h-6 w-6 text-[#0a192f]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Global Experience</p>
              <p className="text-sm text-slate-700">USA(Sales) - Laos(PM) - Korea(Security)</p>
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
              <p className="text-sm font-semibold text-slate-900">Tech Stack</p>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#64ffda]">
                continuously learning
              </span>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-slate-100">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
              <div className="flex gap-8 whitespace-nowrap px-2 py-4 animate-marquee">
                {techIcons.concat(techIcons).map((icon, idx) => (
                  <Icon key={`${icon}-${idx}`} icon={icon} className="h-10 w-10 text-slate-700" />
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
            <div className="rounded-xl bg-slate-100 p-3">
              <Icon icon="ph:trophy-duotone" className="h-6 w-6 text-[#0a192f]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Award</p>
              <p className="text-sm text-slate-700">2025 Capstone Design Award (Gold)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} md:col-span-3`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Certification Badges</p>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">tooltips on hover</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {certs.map((cert) => (
                <div
                  key={cert.src}
                  className="group relative flex flex-col items-start gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-md"
                  title={`${cert.title} - ${cert.issuer}`}
                >
                  <div className="h-20 w-full overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{cert.title}</p>
                    <p className="text-xs text-slate-600">{cert.issuer}</p>
                  </div>
                </div>
              ))}
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
            <div className="rounded-xl bg-slate-100 p-3">
              <Icon icon="mdi:handshake-outline" className="h-6 w-6 text-[#0a192f]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Crisis Management &amp; Communication</p>
              <p className="text-sm text-slate-700">
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



