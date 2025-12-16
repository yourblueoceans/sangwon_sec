import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    subtitle: 'Project SecureDoc Cloud: AWS PII Masking',
    category: 'Cloud Security',
    image: 'assets/project-lockument.jpg',
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videoUrl: 'https://www.youtube.com/embed/6LKEwD0NfBc',
    demoUrl: 'https://youtu.be/YOUR_DEMO_LINK_HERE',
    period: '2025.08.18 - 2025.10.30',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.',
    problem: '기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협.',
    solution: 'AWS Rekognition으로 PII 자동 식별/마스킹 및 KMS Envelope Encryption 적용.',
    results: [
      '🏆 2025 캡스톤 디자인 어워드 금상 수상',
      'PII 탐지율 99.7% 달성 (Regex + OCR)',
      'RBAC 및 감사 로그 구현',
    ],
  },
  {
    id: 'droptheport',
    title: 'Drop the Port!',
    subtitle: 'Defense in Depth: 3-Zone Network Architecture',
    category: 'Network Infrastructure',
    image: 'assets/project-droptheport.jpg',
    tags: ['Cisco L3/L2', 'Firewall', 'ELK Stack', 'VPN'],
    period: '2025.05 - 2025.07',
    overview: '사이버 위협에 대응하는 방어 심층(Defense in Depth) 기반의 3-Zone 엔터프라이즈 네트워크 구축.',
    problem: '플랫(Flat)한 네트워크 구조로 인한 횡적 이동 취약점 및 로그 가시성 부재.',
    solution: 'DMZ/Internal/External 3계층 망분리 설계 및 ELK Stack 로그 중앙화.',
    results: [
      '방화벽 정책 12종 수립 (Whitelist)',
      'Kibana 대시보드 실시간 트래픽 모니터링',
      'VLAN 논리적 망분리 구축',
    ],
  },
  {
    id: 'webvuln',
    title: 'Web Vulnerability Assessment',
    subtitle: 'Penetration Testing & Secure Coding Report',
    category: 'Offensive Security',
    image: 'assets/project-webvuln.jpg',
    tags: ['OWASP Top 10', 'Burp Suite', 'Linux', 'Apache/PHP'],
    period: '2025.09 - 2025.10',
    overview: '주요정보통신기반시설 기술적 취약점 가이드를 기준으로 수행한 웹 애플리케이션 모의해킹.',
    problem: '레거시 웹(LAMP)에 존재하는 SQL Injection, XSS 등 5대 주요 취약점.',
    solution: '공격자 관점 모의해킹(Pentest) 및 시큐어 코딩/설정 강화 조치.',
    results: [
      'High Risk 취약점 100% 조치 완료',
      '관리자 페이지 접근 통제 및 디렉터리 리스팅 제거',
      '시큐어 코딩 가이드라인 수립',
    ],
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projectData.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Selected <span className="text-teal-600">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">문제를 정의하고 기술로 해결한 실무 프로젝트 케이스입니다.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/640x360?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-600">{project.category}</div>
                  <div className="text-[10px] rounded bg-slate-100 px-2 py-1 font-mono text-slate-400">{project.period}</div>
                </div>
                <h3 className="mb-1 text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mb-4 text-xs font-medium text-slate-500">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-200 bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"
              >
                <Icon icon="mdi:close" className="text-xl" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="border-b border-slate-100 p-8 lg:border-b-0 lg:border-r lg:p-12">
                  <div className="mb-6">
                    <h2 className="mb-2 text-3xl font-bold text-slate-900">{selectedProject.title}</h2>
                    <p className="font-medium text-teal-700">{selectedProject.subtitle}</p>
                  </div>

                  {selectedProject.videoUrl && (
                    <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
                      <iframe src={selectedProject.videoUrl} title="Video" className="h-full w-full" allowFullScreen />
                    </div>
                  )}

                  <div className="mb-8 flex gap-3">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700"
                      >
                        <Icon icon="mdi:youtube" className="text-lg" />
                        Watch Demo
                      </a>
                    )}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-900">Problem &amp; Solution</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{selectedProject.problem}</p>
                  <p className="rounded-lg border border-teal-100 bg-teal-50 p-4 text-sm font-medium leading-relaxed text-teal-900">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="bg-slate-50 p-8 lg:p-12">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Key Results</h3>
                  <ul className="mb-8 space-y-3">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <Icon icon="mdi:check-circle" className="mt-0.5 shrink-0 text-teal-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

