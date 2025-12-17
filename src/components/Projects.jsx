import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    subtitle: 'SecureDoc Cloud: AWS PII Masking Platform',
    category: 'Cloud Security',
    image: '/sangwon_sec/assets/project-lockument.png',
    pdfUrl: '/sangwon_sec/assets/lockument.pdf',
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videos: [
      { title: '발표 영상 (PPT)', id: '6LKEwD0NfBc' },
      { title: '시스템 시연', id: 'mvpLv-ug0m0' },
    ],
    period: '2025.08 - 2025.10',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.',
    problem: '기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협.',
    solution: 'AWS Rekognition PII 식별 및 KMS Envelope Encryption을 통한 데이터 암호화 격리.',
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
    image: '/sangwon_sec/assets/project-droptheport.png',
    pdfUrl: '/sangwon_sec/assets/drop the port.pdf',
    tags: ['Cisco L3/L2', 'Firewall', 'ELK Stack', 'VPN'],
    period: '2025.05 - 2025.07',
    overview: '사이버 위협에 대응하는 방어 심층(Defense in Depth) 기반의 3-Zone 엔터프라이즈 네트워크 구축.',
    problem: '플랫(Flat)한 네트워크 구조로 인한 횡적 이동 취약점 및 로그 가시성 부재.',
    solution: 'DMZ, Internal, External 3계층 망분리 설계 및 ELK Stack 로그 중앙화.',
    results: [
      '방화벽 정책 12종 수립 및 적용 (Whitelist)',
      'Kibana 대시보드 실시간 트래픽 모니터링',
      'VLAN 기반 논리적 망분리',
    ],
  },
  {
    id: 'webvuln',
    title: 'Web Vulnerability Assessment',
    subtitle: 'Penetration Testing & Secure Coding Report',
    category: 'Offensive Security',
    image: '/sangwon_sec/assets/project-webvuln.png',
    pdfUrl: '/sangwon_sec/assets/web vuln.pdf',
    tags: ['OWASP Top 10', 'Burp Suite', 'Linux', 'Apache/PHP'],
    period: '2025.09 - 2025.10',
    overview: '주요정보통신기반시설 기술적 취약점 가이드를 기준으로 수행한 웹 애플리케이션 모의해킹.',
    problem: '레거시 웹(LAMP)에 존재하는 SQL Injection, XSS 등 주요 취약점 방치.',
    solution: '공격자 관점 모의해킹(Pentest) 및 시큐어 코딩/서버 설정 강화 조치.',
    results: [
      'High Risk 취약점 100% 조치 완료',
      '관리자 페이지 접근 통제 적용',
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
    <section id="projects" className="py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading mb-6">
            Selected <span className="text-primary-600">Projects</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed break-keep font-medium">
            배운 지식을 실무에 적용해보며, <br className="md:hidden" />문제를 해결해나가는 과정의 기록입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => openModal(project.id)}
              className="group cursor-pointer rounded-[3rem] bg-white border border-slate-200 overflow-hidden hover:border-primary-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-8 py-4 bg-white/95 rounded-full text-slate-900 text-base font-extrabold shadow-xl flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    자세히 보기 <Icon icon="mdi:arrow-right" className="text-primary-600 text-xl" />
                  </span>
                </div>
                <div className="absolute top-6 left-6 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full text-sm font-extrabold text-primary-700 shadow-sm uppercase tracking-wider border border-white/50">
                  {project.category}
                </div>
              </div>

              <div className="p-10">
                <div className="flex justify-between items-center mb-5">
                  <div className="text-xs font-mono text-slate-500 bg-slate-100 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Icon icon="mdi:calendar-clock" className="text-lg" /> {project.period}
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight font-heading break-keep">{project.title}</h3>
                <p className="text-lg text-slate-600 mb-8 font-medium line-clamp-2 leading-relaxed break-keep">{project.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-4 py-2 text-sm font-bold text-slate-700 bg-white rounded-xl border-2 border-slate-100 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-xl overflow-y-auto py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0"
            />
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col my-auto border border-white/20"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white text-slate-500 hover:bg-slate-100 z-10 transition-colors shadow-sm"
              >
                <Icon icon="mdi:close" className="text-3xl" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                {/* Left Content */}
                <div className="lg:col-span-7 p-12 lg:p-16 bg-slate-50 border-r border-slate-100 flex flex-col">
                  <div className="mb-10">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 font-heading leading-tight break-keep">{selectedProject.title}</h2>
                    <p className="text-2xl text-primary-700 font-bold break-keep">{selectedProject.subtitle}</p>
                  </div>

                  {/* Video Tabs */}
                  {selectedProject.videos && selectedProject.videos.length > 0 && (
                    <div className="mb-12">
                      <div className="flex gap-3 mb-5 p-2 bg-slate-200/50 rounded-2xl w-fit">
                        {selectedProject.videos.map((video, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveVideoIndex(index)}
                            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                              activeVideoIndex === index
                                ? 'bg-white text-primary-700 shadow-md'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                            }`}
                          >
                            <Icon icon="mdi:play-circle-outline" className="text-xl" /> {video.title}
                          </button>
                        ))}
                      </div>
                      <div className="aspect-video w-full rounded-3xl overflow-hidden bg-slate-900 shadow-lg relative border-[6px] border-white">
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedProject.videos[activeVideoIndex].id}?rel=0`}
                          className="w-full h-full absolute inset-0"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-auto space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                      <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                        <Icon icon="mdi:alert-circle-outline" className="text-red-500 text-2xl" /> Problem
                      </h3>
                      <p className="text-slate-700 text-lg leading-relaxed font-medium break-keep">{selectedProject.problem}</p>
                    </div>
                    <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100 shadow-sm">
                      <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                        <Icon icon="mdi:lightbulb-on-outline" className="text-primary-600 text-2xl" /> Solution
                      </h3>
                      <p className="text-primary-900 text-lg font-bold leading-relaxed break-keep">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-5 p-12 lg:p-16 bg-white flex flex-col">
                  {selectedProject.pdfUrl && (
                    <a
                      href={selectedProject.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-4 py-6 rounded-3xl bg-slate-900 text-white font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:-translate-y-1 mb-12"
                    >
                      <Icon icon="mdi:file-document-outline" className="text-3xl" />
                      <span>프로젝트 보고서(PDF) 보기</span>
                    </a>
                  )}

                  <div className="mb-12">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 font-heading">
                      <Icon icon="mdi:trophy-award" className="text-primary-600 text-3xl" /> Key Results
                    </h3>
                    <ul className="space-y-6">
                      {selectedProject.results.map((result, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-100"
                        >
                          <Icon icon="mdi:check-circle" className="text-primary-500 mt-0.5 text-2xl shrink-0" />
                          <span className="font-bold text-lg leading-relaxed break-keep">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 font-heading">
                      <Icon icon="mdi:code-tags" className="text-primary-600 text-3xl" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-5 py-2.5 bg-white rounded-2xl text-sm font-bold text-slate-600 border-2 border-slate-100 shadow-sm flex items-center gap-2"
                        >
                          <Icon icon="mdi:checkbox-marked-circle-outline" className="text-primary-400 text-lg" /> {tag}
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
