import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 프로젝트 데이터 (public/assets/projects/ 경로 매핑)
const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    subtitle: 'SecureDoc Cloud: AWS PII Masking Platform',
    category: 'Cloud Security',
    image: '/assets/projects/lockument/lockument.png',
    docs: [
      { name: '01 PII 구분 및 조사', url: '/assets/projects/lockument/01 PII 구분_개인정보 유출사례 및 주요 PII 구분 조사.pdf' },
      { name: '02 DB 구축 보고서', url: '/assets/projects/lockument/02_DB_구축_보고서.pdf' },
      { name: '03 웹 GUI 구성 보고서', url: '/assets/projects/lockument/03 웹_GUI_구성_보고서.pdf' },
      { name: '04 플랫폼 아키텍처 운영', url: '/assets/projects/lockument/04_LDIP_보고서_A_플랫폼아키텍처운영.pdf' },
    ],
    gallery: [
      '/assets/projects/lockument/booth.jpg',
      '/assets/projects/lockument/audit.png',
      '/assets/projects/lockument/main.png',
      '/assets/projects/lockument/mobile_main.png',
    ],
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videos: [{ title: '발표 영상', id: '6LKEwD0NfBc' }],
    period: '2025.08.18 - 2025.10.30',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.',
    problem: '기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협.',
    solution: 'AWS Rekognition PII 식별 및 KMS Envelope Encryption을 통한 데이터 암호화 격리.',
    results: ['🏆 2025 캡스톤 금상', 'PII 탐지율 99.7%', 'RBAC 구현'],
  },
  {
    id: 'droptheport',
    title: 'Drop the Port!',
    subtitle: 'Defense in Depth: 3-Zone Network Architecture',
    category: 'Network Infrastructure',
    image: '/assets/projects/droptheport/LOGO.png',
    docs: [{ name: '프로젝트 요청서', url: '/assets/projects/droptheport/requesting.pdf' }],
    gallery: [
      '/assets/projects/droptheport/main.jpg',
      '/assets/projects/droptheport/eq1.jpg',
      '/assets/projects/droptheport/eq2.jpg',
      '/assets/projects/droptheport/meeting (1).jpg',
    ],
    tags: ['Cisco L3/L2', 'Firewall', 'ELK Stack', 'VPN'],
    videos: [],
    period: '2025.08.21 - 2025.11.03',
    overview: '사이버 위협에 대응하는 방어 심층(Defense in Depth) 기반의 3-Zone 엔터프라이즈 네트워크 구축.',
    problem: '플랫(Flat)한 네트워크 구조로 인한 횡적 이동 취약점 및 로그 가시성 부재.',
    solution: 'DMZ, Internal, External 3계층 망분리 설계 및 ELK Stack 로그 중앙화.',
    results: ['방화벽 정책 12종 수립', 'Kibana 대시보드 구축', 'VLAN 망분리'],
  },
  {
    id: 'webvuln',
    title: 'Web Vulnerability Assessment',
    subtitle: 'Penetration Testing & Secure Coding Report',
    category: 'Offensive Security',
    image: '/assets/projects/webvuln/report cover.jpg',
    docs: [{ name: '취약점 진단 결과 보고서', url: '/assets/projects/webvuln/report.pdf' }],
    gallery: [
      '/assets/projects/webvuln/main.jpg',
      '/assets/projects/webvuln/captured (1).png',
      '/assets/projects/webvuln/captured (2).png',
      '/assets/projects/webvuln/sqlmap_--current-db.png',
    ],
    tags: ['OWASP Top 10', 'Burp Suite', 'Linux', 'Apache/PHP'],
    videos: [],
    period: '2025.11.28 (보고서 기준)',
    overview: '주요정보통신기반시설 기술적 취약점 가이드를 기준으로 수행한 웹 애플리케이션 모의해킹.',
    problem: '레거시 웹(LAMP)에 존재하는 SQL Injection, XSS 등 주요 취약점 방치.',
    solution: '공격자 관점 모의해킹(Pentest) 및 시큐어 코딩/서버 설정 강화 조치.',
    results: ['High Risk 취약점 100% 조치', '관리자 페이지 접근 통제', '시큐어 코딩 가이드'],
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const selectedProject = projectData.find((p) => p.id === selectedId);

  const openModal = (id) => {
    setSelectedId(id);
    setActiveVideoIndex(0);
    setActiveTab('overview');
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading mb-6 section-title-underline inline-block leading-snug">
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
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-50">
                  <Icon icon="mdi:image-off-outline" className="text-5xl mb-2 opacity-50" />
                  <span className="text-xs font-bold">Image Preview</span>
                </div>

                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
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

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-xl overflow-y-auto py-6 md:py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0"
            />
            <motion.div
              layoutId={selectedId}
              className="relative w-[95%] md:w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col my-auto border border-white/20 max-h-[90vh]"
            >
              <div className="bg-slate-50 border-b border-slate-200 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 sticky top-0 z-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{selectedProject.title}</h2>
                  <p className="text-primary-700 font-bold text-sm md:text-base">{selectedProject.subtitle}</p>
                </div>

                <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm w-full md:w-auto overflow-x-auto">
                  {['overview', 'docs', 'gallery'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all capitalize whitespace-nowrap ${
                        activeTab === tab
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {tab === 'overview' ? 'Overview' : tab === 'docs' ? 'Docs' : 'Gallery'}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white text-slate-400 hover:text-slate-900 border border-slate-100"
                >
                  <Icon icon="mdi:close" className="text-xl md:text-2xl" />
                </button>
              </div>

              <div className="p-6 md:p-12 overflow-y-auto flex-grow bg-white">
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      {selectedProject.videos && selectedProject.videos.length > 0 && (
                        <div className="space-y-4">
                          <div className="flex gap-3 mb-2 flex-wrap">
                            {selectedProject.videos.map((video, index) => (
                              <button
                                key={index}
                                onClick={() => setActiveVideoIndex(index)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                                  activeVideoIndex === index
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                <Icon icon="mdi:play-circle-outline" className="text-lg" /> {video.title}
                              </button>
                            ))}
                          </div>
                          <div className="aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-lg relative border-[6px] border-white">
                            <iframe
                              src={`https://www.youtube.com/embed/${selectedProject.videos[activeVideoIndex].id}?rel=0`}
                              className="w-full h-full absolute inset-0"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Icon icon="mdi:alert-circle" className="text-red-500" /> Problem
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.problem}</p>
                        </div>
                        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Icon icon="mdi:check-circle" className="text-primary-600" /> Solution
                          </h4>
                          <p className="text-primary-900 text-sm leading-relaxed">{selectedProject.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 mb-6">Key Results</h3>
                        <ul className="space-y-4">
                          {selectedProject.results.map((res, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                            >
                              <Icon icon="mdi:trophy" className="text-yellow-500 text-xl shrink-0" />
                              <span className="font-bold text-slate-700">{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 mb-6">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((t) => (
                            <span key={t} className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'docs' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedProject.docs?.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-lg transition-all group bg-white"
                      >
                        <div className="p-3 bg-red-50 text-red-500 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                          <Icon icon="mdi:file-pdf-box" className="text-3xl" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-primary-700">{doc.name}</p>
                          <p className="text-xs text-slate-400">PDF Document</p>
                        </div>
                        <Icon icon="mdi:download" className="ml-auto text-slate-300 group-hover:text-primary-500" />
                      </a>
                    ))}
                    {(!selectedProject.docs || selectedProject.docs.length === 0) && (
                      <p className="col-span-full text-center text-slate-400 py-16">등록된 문서가 없습니다.</p>
                    )}
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.gallery?.map((img, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                        <img
                          src={img}
                          alt="Project Screenshot"
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => (e.target.style.display = 'none')}
                        />
                      </div>
                    ))}
                    {(!selectedProject.gallery || selectedProject.gallery.length === 0) && (
                      <p className="col-span-full text-center text-slate-400 py-16">등록된 추가 이미지가 없습니다.</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
