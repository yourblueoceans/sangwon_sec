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
    image: 'assets/project-lockument.png',
    pdfUrl: 'assets/lockument.pdf',
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videos: [
      { title: '발표 영상 (PPT)', id: '6LKEwD0NfBc' },
      { title: '시스템 시연', id: 'mvpLv-ug0m0' },
    ],
    period: '2025.08 - 2025.10',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.',
    problem: '기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협.',
    solution: 'AWS Rekognition을 활용해 PII를 자동 식별/마스킹하고, AWS KMS를 적용하여 암호화 키를 안전하게 격리 관리하는 아키텍처를 구현했습니다.',
    results: [
      '🏆 2025 캡스톤 디자인 어워드 금상 수상',
      'PII 탐지율 99.7% 달성 (Regex + OCR 하이브리드 탐지)',
      'RBAC(역할 기반 접근 제어) 및 감사 로그 구현',
    ],
  },
  {
    id: 'droptheport',
    title: 'Drop the Port!',
    subtitle: 'Defense in Depth: 3-Zone Network Architecture',
    category: 'Network Infrastructure',
    image: 'assets/project-droptheport.png',
    pdfUrl: 'assets/drop%20the%20port.pdf',
    tags: ['Cisco L3/L2', 'Firewall', 'ELK Stack', 'VPN'],
    period: '2025.05 - 2025.07',
    overview: '사이버 위협에 대응하는 방어 심층(Defense in Depth) 기반의 3-Zone 엔터프라이즈 네트워크 구축 프로젝트입니다.',
    problem: '플랫(Flat)한 네트워크 구조로 인한 횡적 이동(Lateral Movement) 취약점 존재.',
    solution: 'DMZ, Internal, External 3계층 망분리 구조를 설계하고, ELK Stack을 통한 전사적 로그 중앙화 및 시각화를 구현했습니다.',
    results: [
      '방화벽 정책 12종 수립 및 적용 (Whitelist 기반)',
      'Kibana 대시보드를 통한 실시간 트래픽 모니터링 환경 구축',
      'VLAN 기반 논리적 망분리 및 VPN 원격 접속 보안 적용',
    ],
  },
  {
    id: 'webvuln',
    title: 'Web Vulnerability Assessment',
    subtitle: 'Penetration Testing & Secure Coding Report',
    category: 'Offensive Security',
    image: 'assets/project-webvuln.png',
    pdfUrl: 'assets/web%20vuln.pdf',
    tags: ['OWASP Top 10', 'Burp Suite', 'Linux', 'Apache/PHP'],
    period: '2025.09 - 2025.10',
    overview: '주요정보통신기반시설 기술적 취약점 가이드를 기준으로 수행한 웹 애플리케이션 모의해킹 및 조치 보고서입니다.',
    problem: '레거시 웹 애플리케이션(LAMP)에 존재하는 SQL Injection 등 주요 취약점 방치.',
    solution: '공격자 관점의 모의해킹(Pentest)으로 취약점을 식별하고, 시큐어 코딩 및 서버 설정 강화를 통해 근본적인 조치를 수행했습니다.',
    results: [
      'High Risk 취약점(SQLi, File Upload 등) 100% 조치 완료',
      '관리자 페이지 접근 통제 및 디렉터리 리스팅 제거',
      '시큐어 코딩 가이드라인 수립 및 개발팀 공유',
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
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading mb-6 break-keep">
            Selected <span className="text-primary-600">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl leading-relaxed break-keep">
            배운 지식을 실무에 적용하며, <br className="md:hidden" />
            문제를 해결해나가는 과정입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => openModal(project.id)}
              className="group cursor-pointer rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden hover:border-primary-400 transition-all duration-500 hover:shadow-premium hover:-translate-y-3 hover-shimmer"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-50">
                  <Icon icon="mdi:image-off-outline" className="text-5xl mb-2 opacity-50" />
                  <span className="text-sm font-bold">Image Not Found</span>
                </div>

                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-6 py-3 bg-white/95 rounded-full text-slate-900 text-sm font-extrabold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    자세히 보기 <Icon icon="mdi:arrow-right" className="text-primary-600" />
                  </span>
                </div>
                <div className="absolute top-5 left-5 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-extrabold text-primary-700 shadow-sm uppercase tracking-wider border border-white/50">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[11px] font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-bold flex items-center gap-2">
                    <Icon icon="mdi:calendar-clock" /> {project.period}
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight font-heading group-hover:text-primary-700 transition-colors break-keep">
                  {project.title}
                </h3>
                <p className="text-base text-slate-600 mb-6 font-medium line-clamp-2 leading-relaxed break-keep">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white rounded-lg border-2 border-slate-100 shadow-sm">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-xl overflow-y-auto py-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0" />
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col my-auto border border-white/20"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 z-10 transition-colors shadow-sm border border-slate-100"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                <div className="lg:col-span-7 p-10 lg:p-12 bg-slate-50 border-r border-slate-100 flex flex-col">
                  <div className="mb-8">
                    <span className="inline-block text-sm font-extrabold text-primary-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Icon icon="mdi:folder-open-outline" /> {selectedProject.category}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 font-heading leading-tight break-keep">{selectedProject.title}</h2>
                    <p className="text-xl text-slate-600 font-medium break-keep">{selectedProject.subtitle}</p>
                  </div>

                  {selectedProject.videos && selectedProject.videos.length > 0 && (
                    <div className="mb-10">
                      <div className="flex gap-3 mb-4 p-1.5 bg-slate-200/50 rounded-2xl w-fit">
                        {selectedProject.videos.map((video, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveVideoIndex(index)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                              activeVideoIndex === index ? 'bg-white text-primary-700 shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                            }`}
                          >
                            <Icon icon={index === 0 ? 'mdi:presentation-play' : 'mdi:monitor-dashboard'} className="text-lg" />
                            {video.title}
                          </button>
                        ))}
                      </div>
                      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg relative border-4 border-white">
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedProject.videos[activeVideoIndex].id}?rel=0&modestbranding=1`}
                          title={selectedProject.videos[activeVideoIndex].title}
                          className="w-full h-full absolute inset-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-auto space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Icon icon="mdi:alert-circle-outline" className="text-red-500 text-xl" /> Problem
                      </h3>
                      <p className="text-slate-700 text-base leading-relaxed font-medium break-keep">{selectedProject.problem}</p>
                    </div>
                    <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-primary-500" />
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Icon icon="mdi:lightbulb-on-outline" className="text-primary-600 text-xl" /> Solution
                      </h3>
                      <p className="text-primary-900 text-base leading-relaxed font-bold break-keep">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-10 lg:p-12 bg-white flex flex-col">
                  {selectedProject.pdfUrl && (
                    <a
                      href={getAssetPath(selectedProject.pdfUrl)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-900 text-white font-bold text-base hover:bg-primary-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 mb-10"
                    >
                      <Icon icon="mdi:file-pdf-box" className="text-2xl" />
                      <span>프로젝트 PDF 보기/다운로드</span>
                    </a>
                  )}

                  <div className="mb-12">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-heading">
                      <Icon icon="mdi:trophy-award" className="text-primary-600 text-2xl" />
                      Key Results
                    </h3>
                    <ul className="space-y-5">
                      {selectedProject.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <Icon icon="mdi:check-circle" className="text-primary-500 mt-1 text-xl shrink-0" />
                          <span className="font-bold leading-relaxed text-base break-keep">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-heading">
                      <Icon icon="mdi:code-json" className="text-primary-600 text-2xl" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-slate-600 border-2 border-slate-100 shadow-sm flex items-center gap-2">
                          <Icon icon="mdi:checkbox-marked-circle-outline" className="text-primary-400" /> {tag}
                        </span>
                      ))}
                    </div>
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

