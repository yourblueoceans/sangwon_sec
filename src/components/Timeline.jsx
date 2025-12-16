import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const timelineData = [
  {
    period: '2025.03 - 2025.07',
    title: 'Engineering Foundation',
    role: 'Cloud Security Course (Semester 1)',
    summary: 'Server, Network, DB, Cloud Fundamentals',
    details:
      'Linux/Windows Server (RAID, DNS, Mail), Cisco Network Design (VLAN, STP, ACL), Database Modeling (MySQL, SQL), Cloud Docker/IaC',
    tags: ['Linux/Windows Server', 'VLAN/STP/ACL', 'MySQL/SQL', 'Docker', 'IaC'],
    cert: '네트워크관리사 2급 (2025.04)',
  },
  {
    period: '2025.08 - 2025.11',
    title: 'Security Specialization',
    role: 'Cloud Security Course (Semester 2)',
    summary: 'Offensive Security & Monitoring',
    details:
      'Network Security (iptables, Zabbix), Penetration Testing (Kali, MITM, Sniffing), InfoSec Theory (Cryptography, CIA)',
    tags: ['iptables', 'Zabbix', 'Kali', 'MITM', 'Sniffing', 'Crypto/CIA'],
    cert: '리눅스마스터 2급 (2025.10)',
  },
  {
    period: '2025.10 - 2025.11',
    title: 'Project Leadership',
    role: 'Project Leader',
    summary: 'Practical Application & Awards',
    details:
      'LOCKUMENT (Capstone Gold Award, AWS KMS), Drop the Port (3-Zone Network Construction)',
    tags: ['LOCKUMENT', 'Capstone Gold', 'AWS KMS', '3-Zone Network'],
    highlight: '🏆 2025 Capstone Design 금상 수상',
  },
  {
    period: '2025.12 - Present',
    title: 'Professional Certification',
    role: 'Security Consultant Prep',
    summary: 'Validating expertise with Global Certs',
    details:
      'Acquired Microsoft SC-900, Cisco CCST, and preparing for Information Security Engineer (Practical)',
    tags: ['SC-900', 'CCST', 'InfoSec Engineer (practical prep)'],
    cert: 'SC-900, CCST (취득) / 정보보안기사 실기 준비',
  },
];

const Timeline = () => {
  return (
    <section className="rounded-3xl bg-[#f8fafc] p-8 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.12)] ring-1 ring-slate-100">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">Timeline</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Learning Journey</h2>
        <p className="max-w-3xl text-slate-700">
          1년 집중 커리큘럼(폴리텍 High-Tech) 과정을 요약한 성장 타임라인입니다.
        </p>
      </motion.div>

      <div className="relative mt-10">
        <div className="absolute left-[16px] top-0 h-full w-px bg-slate-300" aria-hidden />
        <div className="space-y-8">
          {timelineData.map((item, idx) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.08 }}
              className="relative grid items-start gap-4 md:grid-cols-[0.3fr_0.7fr]"
            >
              <div className="relative flex items-start">
                <span className="absolute left-[16px] top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-[#64ffda] ring-4 ring-[#64ffda]/25" />
                <div className="ml-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2563eb]">{item.period}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-lg ring-1 ring-slate-100">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm font-semibold text-[#0a192f]">{item.role}</p>
                </div>
                <p className="mt-2 text-slate-700">{item.summary}</p>
                <p className="text-sm text-slate-600">{item.details}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-font rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.cert && (
                  <p className="mt-2 text-sm font-semibold text-[#0a192f]">Cert: {item.cert}</p>
                )}
                {item.highlight && <p className="mt-1 text-sm font-semibold text-amber-600">{item.highlight}</p>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

