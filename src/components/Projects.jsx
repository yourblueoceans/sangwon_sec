import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    category: 'Cloud Security / DevSecOps',
    subtitle: 'AWS KMS PII Masking & Encryption Platform',
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videoUrl: 'https://www.youtube.com/embed/6LKEwD0NfBc',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.',
    problem: '기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협 및 컴플라이언스 이슈.',
    solution:
      'AWS Rekognition을 활용해 PII를 자동 식별/마스킹하고, AWS KMS Envelope Encryption을 적용하여 암호화 키를 격리 관리하는 아키텍처 설계.',
    results: [
      '🏆 2025 캡스톤 디자인 어워드 금상 수상',
      'PII 탐지율 99.7% 달성 (Regex + OCR 하이브리드 탐지)',
      'Role-Based Access Control (RBAC) 및 감사 로그 구현',
    ],
  },
  {
    id: 'droptheport',
    title: 'Drop the Port!',
    category: 'Network Infrastructure',
    subtitle: 'Defense in Depth: 3-Zone Network Architecture',
    tags: ['Cisco L3/L2', 'Firewall', 'ELK Stack', 'VPN'],
    overview: '사이버 위협에 대응하는 방어 심층(Defense in Depth) 기반의 3-Zone 엔터프라이즈 네트워크 구축 프로젝트입니다.',
    problem: '플랫(Flat)한 네트워크 구조로 인한 횡적 이동(Lateral Movement) 취약점 및 로그 가시성 부재.',
    solution:
      'DMZ, Internal, External 3계층 망분리 구조를 설계하고, ELK Stack을 통한 전사적 로그 중앙화 및 시각화 구현.',
    results: [
      '방화벽 정책 12종 수립 및 적용 (Whitelist 기반)',
      'Kibana 대시보드를 통한 실시간 트래픽 모니터링',
      'VLAN 기반 논리적 망분리 및 VPN 원격 접속 보안 체계 구축',
    ],
  },
  {
    id: 'webvuln',
    title: 'Web Vulnerability Assessment',
    category: 'Offensive Security',
    subtitle: 'Penetration Testing & Secure Coding Report',
    tags: ['OWASP Top 10', 'Burp Suite', 'Linux', 'Apache/PHP'],
    overview: '주요정보통신기반시설 기술적 취약점 가이드를 기준으로 수행한 웹 애플리케이션 모의해킹 및 조치 보고서입니다.',
    problem: '레거시 웹 애플리케이션(LAMP)에 존재하는 SQL Injection, XSS 등 5대 주요 취약점 방치.',
    solution:
      '공격자 관점의 모의해킹(Pentest)을 수행하여 취약점을 식별하고, 시큐어 코딩 및 서버 설정(Config) 강화를 통해 조치.',
    results: [
      'High Risk 취약점(SQLi, File Upload 등) 100% 조치 완료',
      '관리자 페이지 접근 통제 및 디렉터리 리스팅 제거',
      '시큐어 코딩 가이드라인 수립 및 개발팀 공유',
    ],
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
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Case Studies</h2>
        <p className="max-w-3xl text-slate-200/80">
          비즈니스 요구사항을 보안 기술로 풀어낸 대표 프로젝트들입니다. 카드 클릭 시 상세 모달을 확인하세요.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projectData.map((project, idx) => (
          <motion.button
            type="button"
            onClick={() => setSelected(project)}
            key={project.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-lg transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-[#64ffda]/60 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:ring-offset-2 focus:ring-offset-[#f8fafc]"
          >
            <div className="relative mb-4 h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,255,218,0.12),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.14),transparent_32%)]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-[#64ffda] px-4 py-2 text-sm font-semibold text-[#0a192f] shadow-lg">
                  {project.videoIds && project.videoIds.length > 0 ? 'Play Video' : 'View Case Study'}
                </span>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between space-y-3">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#64ffda]">Security</p>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">{project.category}</p>
                <p className="text-sm text-slate-600">{project.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-font rounded-full border border-[#64ffda]/30 bg-[#64ffda]/15 px-3 py-1 text-xs font-semibold text-[#0a192f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-800">{project.overview}</p>
            </div>
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
              className="relative w-full max-w-5xl rounded-3xl bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#64ffda]">Project</p>
                    <h3 className="text-3xl font-semibold tracking-tight text-slate-900">{selected.title}</h3>
                    <p className="text-sm text-slate-700">{selected.subtitle}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                      {selected.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  >
                    Close
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Overview</p>
                    <p className="text-slate-700">{selected.overview}</p>
                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Problem</p>
                      <p className="text-slate-700">{selected.problem}</p>
                    </div>
                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Solution</p>
                      <p className="text-slate-700">{selected.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
                    {selected.videoUrl && (
                      <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                          Live Demo / Video
                        </p>
                        <div className="aspect-video overflow-hidden rounded-lg border border-slate-200">
                          <iframe
                            title={`${selected.title}-video`}
                            src={selected.videoUrl}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Key Results</p>
                      <ul className="list-disc space-y-1 pl-4 text-slate-700">
                        {selected.results?.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Tech Stack</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selected.tags?.map((tech) => (
                          <span
                            key={tech}
                            className="tag-font rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;



