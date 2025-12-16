import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
    problem: '고객 PII가 로그/문서 전반에 노출되어 규제 리스크가 존재',
    solution: 'AWS KMS를 활용한 토큰화 + 패턴 기반 마스킹 파이프라인 설계/구현',
    result: '탐지율 99.7%, 오탐 최소화로 운영 부담 감소',
    stack: ['AWS KMS', 'Lambda', 'Python', 'Docker', 'S3'],
  },
  {
    title: 'Drop the Port',
    subtitle: '3-Zone Enterprise Network Infra',
    tags: ['Network', 'Firewall', 'ELK'],
    highlight: '방화벽 정책 12종 수립, 망분리 구축',
    problem: '사내망/외부망 혼재로 정책 부재, 가시성 부족',
    solution: '3-Zone 분리, 방화벽 정책 12종 수립, ELK 기반 로깅/모니터링',
    result: '정책 미스/우회 트래픽 감소, 운영 가시성 확보',
    stack: ['Firewall', 'ELK', 'HAProxy', 'VM'],
  },
  {
    title: 'Web Vulnerability Assessment',
    subtitle: 'Technical Vulnerability Report',
    tags: ['Pentest', 'OWASP', 'Report'],
    highlight: '수동 진단 100%, 시나리오 기반 PoC',
    problem: '웹 서비스 신규 출시 전 보안성 검증 필요',
    solution: 'OWASP Top 10 기반 수동 진단과 PoC 보고서 작성',
    result: '중요 취약점 선제 조치, 출시 지연 없이 완료',
    stack: ['OWASP', 'Burp Suite', 'Kali', 'PoC scripting'],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
    return undefined;
  }, [selected]);

  return (
    <section
      id="projects"
      className="space-y-8 rounded-3xl bg-[#0a101f] p-8 text-slate-100 shadow-[0_30px_90px_rgba(0,0,0,0.45)] ring-1 ring-white/5"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-[#64ffda]">Projects</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Case Studies</h2>
        <p className="max-w-3xl text-slate-200/80">
          비즈니스 요구사항을 보안 기술로 풀어낸 대표 프로젝트들입니다. 카드 클릭 시 상세 모달을 확인하세요.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.button
            type="button"
            onClick={() => setSelected(project)}
            key={project.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-[#64ffda]/60 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:ring-offset-2 focus:ring-offset-[#0a101f]"
          >
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#64ffda]">Security</p>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-slate-200/80">{project.subtitle}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#64ffda]/30 bg-[#64ffda]/15 px-3 py-1 text-xs font-semibold text-[#0a192f]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-100">{project.highlight}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#64ffda]">Project</p>
                    <h3 className="text-3xl font-semibold text-slate-900">{selected.title}</h3>
                    <p className="text-sm text-slate-700">{selected.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  >
                    Close
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Problem</p>
                    <p className="mt-1 text-slate-700">{selected.problem}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Solution</p>
                    <p className="mt-1 text-slate-700">{selected.solution}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Result</p>
                    <p className="mt-1 text-slate-700">{selected.result}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Tech Stack</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selected.stack?.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-800">{selected.highlight}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;



