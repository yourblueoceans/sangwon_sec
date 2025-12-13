import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

const projects = [
  {
    title: 'LOCKUMENT',
    subtitle: 'AWS KMS PII Masking Solution',
    tags: ['AWS', 'Python', 'Docker'],
    highlight: '캡스톤 금상, 탐지율 99.7%',
  },
  {
    title: 'Drop the Port',
    subtitle: '3-Zone Enterprise Network Infra',
    tags: ['Network', 'Firewall', 'ELK'],
    highlight: '방화벽 정책 12종 수립, 망분리 구축',
  },
  {
    title: 'Web Vulnerability Assessment',
    subtitle: 'Technical Vulnerability Report',
    tags: ['Pentest', 'OWASP', 'Report'],
    highlight: '수동 진단 100%, 시나리오 기반 PoC',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="space-y-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">Projects</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Case Studies</h2>
        <p className="max-w-3xl text-slate-400">
          비즈니스 요구사항을 보안 기술로 풀어낸 대표 프로젝트들입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#112240]/80 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#64ffda]/70 hover:shadow-glow"
          >
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#64ffda]">Security</p>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.subtitle}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#64ffda]/40 bg-[#64ffda]/10 px-3 py-1 text-xs font-semibold text-[#64ffda]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-100">{project.highlight}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



