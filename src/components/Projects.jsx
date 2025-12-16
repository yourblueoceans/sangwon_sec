import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    subtitle: 'SecureDoc Cloud: AWS PII Masking Platform',
    category: 'Cloud Security',
    image: 'assets/project-lockument.jpg',
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videos: [
      { title: 'Project Presentation (PPT)', id: '6LKEwD0NfBc' },
      { title: 'System Demo', id: 'mvpLv-ug0m0' },
    ],
    period: '2025.08.18 - 2025.10.30',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.',
    problem: '기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협 및 컴플라이언스 이슈.',
    solution:
      'AWS Rekognition을 활용해 PII를 자동 식별/마스킹하고, AWS KMS Envelope Encryption을 적용하여 암호화 키를 격리 관리하는 아키텍처 설계.',
    results: [
      '🏆 2025 캡스톤 디자인 어워드 금상 수상',
      'PII 탐지율 99.7% 달성 (Regex + OCR 하이브리드 탐지)',
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
    solution: '공격자 관점의 모의해킹(Pentest)을 수행하여 취약점을 식별하고, 시큐어 코딩 및 서버 설정(Config) 강화를 통해 조치.',
    results: [
      'High Risk 취약점(SQLi, File Upload 등) 100% 조치 완료',
      '관리자 페이지 접근 통제 및 디렉터리 리스팅 제거',
      '시큐어 코딩 가이드라인 수립',
    ],
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const selectedProject = projectData.find((p) => p.id === selectedId);

  const openModal = (id) => {
    setSelectedId(id);
    setActiveVideoIndex(0);
  };

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading">
            Selected <span className="text-primary-600">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            문제를 정의하고 기술로 해결한 실무 프로젝트 케이스입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => openModal(project.id)}
              className="group cursor-pointer rounded-[2rem] bg-white border border-slate-200 overflow-hidden hover:border-primary-400 transition-all duration-300 hover:shadow-premium hover:-translate-y-2"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/640x360?text=No+Image')}
                />
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="px-5 py-2 bg-white rounded-full text-slate-900 text-sm font-bold shadow-lg flex items-center gap-2">
                    View Details <Icon icon="mdi:arrow-right" />
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-primary-600 uppercase">{project.category}</span>
                  <span className="text-[10px] font-mono text-slate-400">{project.period}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-bold text-slate-600 bg-slate-50 rounded border border-slate-200">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0"
            />
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
            >
              <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 z-10">
                <Icon icon="mdi:close" className="text-2xl" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                <div className="lg:col-span-7 p-8 bg-slate-50 border-r border-slate-100">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2 font-heading">{selectedProject.title}</h2>
                  <p className="text-primary-700 font-medium mb-6">{selectedProject.subtitle}</p>

                  {selectedProject.videos && (
                    <div className="mb-6">
                      <div className="flex gap-2 mb-3">
                        {selectedProject.videos.map((vid, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveVideoIndex(idx)}
                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                              activeVideoIndex === idx ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-slate-500 hover:bg-slate-100'
                            }`}
                          >
                            {vid.title}
                          </button>
                        ))}
                      </div>
                      <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg">
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedProject.videos[activeVideoIndex].id}`}
                          title="YouTube video player"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">Problem & Solution</h3>
                    <p className="text-slate-600 text-sm mb-4">{selectedProject.problem}</p>
                    <p className="text-primary-800 text-sm font-medium bg-primary-50 p-3 rounded-lg border border-primary-100">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Icon icon="mdi:check-decagram" className="text-primary-500" /> Key Results
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
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

