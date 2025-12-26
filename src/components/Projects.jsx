import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

const IMG_BASE = '/sangwon_sec/assets/projects';

const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    subtitle: 'SecureDoc Cloud: AWS PII Masking',
    category: 'Cloud Security',
    image: `${IMG_BASE}/lockument/main.png`,
    docs: [
      { name: '발표 자료 (PPTX)', url: 'https://docs.google.com/presentation/d/1OQjpDeIZ-SR2JQZf-gSj7b22bpQ02eop/edit?usp=drive_link&ouid=105295933511816127645&rtpof=true&sd=true', type: 'pptx' },
      { name: '01 PII 구분 및 조사', url: `${IMG_BASE}/lockument/01 PII 구분_개인정보 유출사례 및 주요 PII 구분 조사.pdf`, type: 'pdf' },
      { name: '01-1 부록 NIST Guide', url: `${IMG_BASE}/lockument/01-1 부록_NIST Guide.pdf`, type: 'pdf' },
      { name: '02 DB 구축 보고서', url: `${IMG_BASE}/lockument/02_DB_구축_보고서.pdf`, type: 'pdf' },
      { name: '03 웹 GUI 구성 보고서', url: `${IMG_BASE}/lockument/03 웹_GUI_구성_보고서.pdf`, type: 'pdf' },
      { name: '03-1 GUI 경쟁사/사례 조사', url: `${IMG_BASE}/lockument/03-1 GUI_경쟁사 및 사례조사(수정).pdf`, type: 'pdf' },
      { name: '04 플랫폼 아키텍처 운영', url: `${IMG_BASE}/lockument/04_LDIP_보고서_A__플랫폼아키텍처운영.pdf`, type: 'pdf' },
      { name: '04 모듈별 상세 사양', url: `${IMG_BASE}/lockument/04_LDIP_보고서_B__모듈별_상세_사양.pdf`, type: 'pdf' },
      { name: '04 거버넌스/배포/운영', url: `${IMG_BASE}/lockument/04_LDIP_보고서_C__거버넌스배포운영(정책키프로필DevOps).pdf`, type: 'pdf' }
    ],
    gallery: Array.from({ length: 14 }, (_, i) => `${IMG_BASE}/lockument/${i}.png`),
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React'],
    videos: [
      { title: '발표 영상', id: '6LKEwD0NfBc' },
      { title: '시연 영상', id: 'mvpLv-ug0m0' }
    ],
    period: '2025.08 - 2025.10',
    overview: '개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스.',
    problem: '기업 내 개인정보 문서의 평문 저장으로 인한 내부 유출 위협.',
    solution: 'AWS Rekognition 및 KMS 암호화를 통한 데이터 격리.',
    results: ['🏆 2025 캡스톤 금상', 'PII 탐지율 99.7%'],
  },
  {
    id: 'droptheport',
    title: 'Drop the Port!',
    subtitle: 'Defense in Depth: 3-Zone Network',
    category: 'Network Infra',
    image: `${IMG_BASE}/droptheport/main.png`,
    docs: [
      { name: '발표 자료 (PPTX)', url: 'https://docs.google.com/presentation/d/1wKRqT4S5Jee_ecUnWhkwLLOOVu-7LlkY/edit?usp=drive_link&ouid=105295933511816127645&rtpof=true&sd=true', type: 'pptx' },
      { name: '프로젝트 보고서', url: `${IMG_BASE}/droptheport/report.pdf`, type: 'pdf' },
      { name: '프로젝트 요청서', url: `${IMG_BASE}/droptheport/requesting.pdf`, type: 'pdf' }
    ],
    gallery: [
      `${IMG_BASE}/droptheport/0.png`,
      `${IMG_BASE}/droptheport/1.png`,
      `${IMG_BASE}/droptheport/2.png`,
      `${IMG_BASE}/droptheport/3.png`,
      `${IMG_BASE}/droptheport/4.jpg`,
      `${IMG_BASE}/droptheport/5.jpg`,
      `${IMG_BASE}/droptheport/6.png`,
      `${IMG_BASE}/droptheport/7.jpg`,
      `${IMG_BASE}/droptheport/8.jpg`,
      `${IMG_BASE}/droptheport/9.jpg`,
      `${IMG_BASE}/droptheport/10.jpg`,
      `${IMG_BASE}/droptheport/11.jpg`,
      `${IMG_BASE}/droptheport/12.jpg`,
      `${IMG_BASE}/droptheport/13.jpg`,
      `${IMG_BASE}/droptheport/14.png`,
    ],
    tags: ['Cisco L3/L2', 'Firewall', 'ELK Stack'],
    videos: [],
    period: '2025.08 - 2025.11',
    overview: '사이버 위협에 대응하는 방어 심층 기반의 3-Zone 엔터프라이즈 네트워크 구축.',
    problem: '플랫한 네트워크 구조로 인한 횡적 이동 취약점.',
    solution: 'DMZ, Internal, External 3계층 망분리 설계.',
    results: ['방화벽 정책 12종 수립', 'Kibana 대시보드 구축'],
  },
  {
    id: 'webvuln',
    title: 'Web Vuln Assessment',
    subtitle: 'Pentest & Secure Coding',
    category: 'Offensive Security',
    image: `${IMG_BASE}/webvuln/main.png`,
    docs: [{ name: '취약점 진단 보고서', url: `${IMG_BASE}/webvuln/report.pdf`, type: 'pdf' }],
    gallery: [
      `${IMG_BASE}/webvuln/0.jpg`,
      `${IMG_BASE}/webvuln/1.jpg`,
      `${IMG_BASE}/webvuln/2.png`,
      `${IMG_BASE}/webvuln/3.png`,
      `${IMG_BASE}/webvuln/4.png`,
      `${IMG_BASE}/webvuln/5.png`,
      `${IMG_BASE}/webvuln/6.png`,
      `${IMG_BASE}/webvuln/7.png`,
      `${IMG_BASE}/webvuln/8.png`,
      `${IMG_BASE}/webvuln/9.png`,
      `${IMG_BASE}/webvuln/10.png`,
    ],
    tags: ['OWASP Top 10', 'Burp Suite', 'Linux'],
    videos: [],
    period: '2025.11 (Report)',
    overview: '주요정보통신기반시설 취약점 가이드 기준 웹 애플리케이션 모의해킹.',
    problem: '레거시 웹(LAMP)에 존재하는 SQL Injection, XSS 등.',
    solution: '공격자 관점 모의해킹 및 시큐어 코딩.',
    results: ['High Risk 취약점 100% 조치', '관리자 접근 통제'],
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [viewImage, setViewImage] = useState(null);

  const selectedProject = projectData.find((p) => p.id === selectedId);

  const openModal = (id) => {
    setSelectedId(id);
    setActiveTab('overview');
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 font-heading section-title-underline inline-block leading-snug">
            Selected <span className="text-primary-600">Projects</span>
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed break-keep font-medium">
            이론을 넘어 실무 레벨의 문제를 해결한<br className="md:hidden" /> 치열한 고민의 기록들입니다.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => openModal(project.id)} />
          ))}
        </div>

        {/* [Improved] Mobile Slider with CSS Snap */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-6 px-4 -mx-4 pb-8 scrollbar-hide">
          {projectData.map((project) => (
            <div key={project.id} className="min-w-[85vw] snap-center">
              <ProjectCard project={project} onClick={() => openModal(project.id)} isMobile />
            </div>
          ))}
        </div>
        <p className="md:hidden text-center text-slate-400 text-xs mt-6 flex items-center justify-center gap-1 animate-pulse">
          <Icon icon="mdi:gesture-swipe-horizontal" /> 옆으로 넘겨보세요
        </p>
      </div>

      {/* Responsive Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center md:px-4 bg-slate-900/60 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0" />

            <motion.div
              layoutId={selectedId}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full bg-white shadow-2xl overflow-hidden flex flex-col border border-white/40 fixed bottom-0 left-0 rounded-t-[2rem] h-[85vh] md:h-auto md:max-h-[85vh] md:static md:rounded-[2.5rem] md:max-w-6xl"
            >
              <div className="md:hidden w-full flex justify-center pt-3 pb-1" onClick={() => setSelectedId(null)}>
                <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
              </div>

              {/* Header */}
              <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 p-5 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-0 z-10 shrink-0">
                <div className="flex-1 min-w-0 pr-8 md:pr-0">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-1 truncate">{selectedProject.title}</h2>
                  <p className="text-primary-600 font-bold text-xs md:text-base truncate">{selectedProject.subtitle}</p>
                </div>

                <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 self-stretch md:self-center shadow-inner overflow-x-auto">
                  {['overview', 'docs', 'gallery'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all capitalize whitespace-nowrap ${
                        activeTab === tab ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 transition-colors"
                >
                  <Icon icon="mdi:close" className="text-2xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 md:p-10 overflow-y-auto flex-grow bg-[#FAFAFA] pb-24 md:pb-10">
                {activeTab === 'overview' && (
                  <div className="flex flex-col gap-8 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-3xl border border-red-100 shadow-sm">
                        <h4 className="font-black text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <Icon icon="mdi:alert-decagram" className="text-red-500 text-xl" /> Problem
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium break-keep">{selectedProject.problem}</p>
                      </div>
                      <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-sm">
                        <h4 className="font-black text-teal-800 mb-2 flex items-center gap-2 text-base">
                          <Icon icon="mdi:checkbox-marked-circle" className="text-teal-500 text-xl" /> Solution
                        </h4>
                        <p className="text-teal-900 text-sm leading-relaxed font-medium break-keep">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-base md:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                          <Icon icon="mdi:youtube-tv" className="text-red-600 text-xl" /> Demo
                        </h3>
                        {selectedProject.videos.length > 0 ? (
                          <div className="space-y-4">
                            {selectedProject.videos.map((vid, idx) => (
                              vid.id && (
                                <div key={idx} className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
                                  <div className="px-3 py-2 text-xs font-bold text-slate-700 flex items-center justify-between">
                                    <span>{vid.title}</span>
                                  </div>
                                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-900 relative">
                                    <iframe src={`https://www.youtube.com/embed/${vid.id}`} className="w-full h-full" allowFullScreen title={vid.title} />
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        ) : (
                          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <img src={selectedProject.image} alt="Main" className="w-full h-auto object-cover" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                          <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                            <Icon icon="mdi:trophy-award" className="text-yellow-500 text-xl" /> Key Results
                          </h3>
                          <ul className="space-y-3">
                            {selectedProject.results.map((res, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <Icon icon="mdi:check" className="text-primary-600 mt-0.5" />
                                <span className="font-bold text-slate-700 leading-relaxed">{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                            <Icon icon="mdi:code-braces" className="text-slate-400 text-xl" /> Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((t) => (
                              <span key={t} className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-slate-600 border border-slate-200 shadow-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'docs' && (
                  <div className="grid grid-cols-1 gap-3 animate-fadeIn">
                    {selectedProject.docs.map((doc, idx) => (
                      <a key={idx} href={doc.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:bg-slate-50">
                        <Icon icon="mdi:file-document" className="text-3xl text-primary-500" />
                        <div>
                          <p className="font-bold text-sm text-slate-800">{doc.name}</p>
                          <p className="text-xs text-slate-400">Click to view</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-fadeIn">
                    {selectedProject.gallery.map((img, i) => (
                      <div key={i} onClick={() => setViewImage(img)} className="aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer border border-slate-200">
                        <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {viewImage && (
          <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4" onClick={() => setViewImage(null)}>
            <img src={viewImage} alt="" className="max-w-full max-h-full object-contain rounded-lg" />
            <button className="absolute top-6 right-6 text-white">
              <Icon icon="mdi:close" className="text-3xl" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// 3D Tilt 카드
const ProjectCard = ({ project, onClick, isMobile = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layoutId={project.id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={!isMobile ? { rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: 'preserve-3d' } : {}}
      whileHover={!isMobile ? { scale: 1.02, z: 50 } : {}}
      className="group cursor-pointer rounded-[2rem] bg-white border border-slate-200 overflow-hidden hover:border-primary-400 transition-shadow duration-500 hover:shadow-2xl h-full flex flex-col relative"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 shrink-0 transform-gpu">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.style.display = 'none'; }} />
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-extrabold text-primary-700 uppercase tracking-wider border border-white/50 z-10">
          {project.category}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-0">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight font-heading group-hover:text-primary-600 transition-colors">{project.title}</h3>
        <p className="text-sm md:text-base text-slate-600 mb-4 font-medium line-clamp-2">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-bold text-slate-600 bg-slate-100 rounded-lg border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
