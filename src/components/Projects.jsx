import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const IMG_BASE = '/sangwon_sec/assets/projects';

// [스마트 함수] Lockument 처럼 규칙적인 경우만 사용
const generateGallery = (projectId, count, ext = 'png') => {
  return Array.from({ length: count }, (_, i) => `${IMG_BASE}/${projectId}/${i + 1}.${ext}`);
};

const projectData = [
  {
    id: 'lockument',
    title: 'LOCKUMENT',
    subtitle: 'SecureDoc Cloud: AWS PII Masking Platform',
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
    // [LOCKUMENT] 기존 규칙 유지 (1.png ~ 15.png)
    gallery: generateGallery('lockument', 15, 'png'),
    tags: ['AWS KMS', 'Python Flask', 'Docker', 'React', 'OCR'],
    videos: [
      { title: '발표 영상', id: '6LKEwD0NfBc' },
      { title: '시연 영상', id: 'mvpLv-ug0m0' }
    ],
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
    image: `${IMG_BASE}/droptheport/main.png`,
    docs: [
      { name: '발표 자료 (PPTX)', url: 'https://docs.google.com/presentation/d/1wKRqT4S5Jee_ecUnWhkwLLOOVu-7LlkY/edit?usp=drive_link&ouid=105295933511816127645&rtpof=true&sd=true', type: 'pptx' },
      { name: '프로젝트 보고서', url: `${IMG_BASE}/droptheport/report.pdf`, type: 'pdf' },
      { name: '프로젝트 요청서', url: `${IMG_BASE}/droptheport/requesting.pdf`, type: 'pdf' }
    ],
    // Drop the Port: 혼합 확장자 수동 지정
    gallery: [
      `${IMG_BASE}/droptheport/L3internal.webp`,
      `${IMG_BASE}/droptheport/rsyslog.webp`,
      `${IMG_BASE}/droptheport/VLAN.webp`,
      `${IMG_BASE}/droptheport/L2.webp`,
      `${IMG_BASE}/droptheport/1.png`,
      `${IMG_BASE}/droptheport/2.png`,
      `${IMG_BASE}/droptheport/3.png`,
      `${IMG_BASE}/droptheport/4.jpg`,
      `${IMG_BASE}/droptheport/5.jpg`,
      `${IMG_BASE}/droptheport/7.jpg`,
      `${IMG_BASE}/droptheport/8.jpg`,
      `${IMG_BASE}/droptheport/9.jpg`,
      `${IMG_BASE}/droptheport/10.jpg`,
      `${IMG_BASE}/droptheport/11.jpg`,
      `${IMG_BASE}/droptheport/12.jpg`,
      `${IMG_BASE}/droptheport/13.jpg`,
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
    // 썸네일: 0.jpg 사용 (필요 시 main.png로 교체)
    image: `${IMG_BASE}/webvuln/0.jpg`,
    docs: [
      { name: '취약점 진단 보고서', url: `${IMG_BASE}/webvuln/report.pdf`, type: 'pdf' }
    ],
    // WebVuln: 0,1은 jpg / 2~4는 png (필요 시 추가)
    gallery: [
      `${IMG_BASE}/webvuln/0.jpg`,
      `${IMG_BASE}/webvuln/1.jpg`,
      `${IMG_BASE}/webvuln/2.png`,
      `${IMG_BASE}/webvuln/3.png`,
      `${IMG_BASE}/webvuln/4.png`,
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
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 font-heading section-title-underline inline-block leading-snug">
            Selected <span className="text-primary-600">Projects</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed break-keep font-medium">
            이론을 넘어 실무 레벨의 문제를 해결한<br className="md:hidden" /> 치열한 고민의 기록들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => openModal(project.id)}
              className="group cursor-pointer rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden hover:border-primary-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 -z-10">
                    <Icon icon="mdi:image-off-outline" className="text-3xl text-slate-300 mb-2" />
                    <span className="text-xs text-slate-400 font-bold uppercase">Check Filename</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-extrabold text-primary-700 shadow-sm uppercase tracking-wider border border-white/50">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight font-heading break-keep">
                  {project.title}
                </h3>
                <p className="text-base text-slate-600 mb-6 font-medium line-clamp-2 leading-relaxed break-keep">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg border border-slate-200"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-xl overflow-hidden p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0"
            />
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col my-auto border border-white/40 max-h-[90vh]"
            >
              <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sticky top-0 z-10 shrink-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary-600 font-bold text-sm md:text-base">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200 self-start md:self-center shadow-inner">
                  {['overview', 'docs', 'gallery'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all capitalize ${
                        activeTab === tab
                          ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {tab === 'overview' ? 'Overview' : tab === 'docs' ? 'Documents' : 'Gallery'}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <Icon icon="mdi:close" className="text-2xl" />
                </button>
              </div>

              <div className="p-6 md:p-10 overflow-y-auto flex-grow bg-[#FAFAFA]">
                {activeTab === 'overview' && (
                  <div className="flex flex-col gap-10 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-[4rem] -mr-4 -mt-4 z-0" />
                        <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2 text-lg relative z-10">
                          <Icon icon="mdi:alert-decagram" className="text-red-500 text-2xl" /> Problem
                        </h4>
                        <p className="text-slate-600 text-base leading-relaxed relative z-10 font-medium break-keep">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-teal-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-[4rem] -mr-4 -mt-4 z-0" />
                        <h4 className="font-black text-teal-800 mb-4 flex items-center gap-2 text-lg relative z-10">
                          <Icon icon="mdi:checkbox-marked-circle" className="text-teal-500 text-2xl" /> Solution
                        </h4>
                        <p className="text-teal-900 text-base leading-relaxed relative z-10 font-medium break-keep">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    <hr className="border-slate-200/60" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                          <Icon icon="mdi:youtube-tv" className="text-red-600 text-2xl" /> Demo & Presentation
                        </h3>
                        {selectedProject.videos.length > 0 ? (
                          <div className="space-y-6">
                            {selectedProject.videos.map((vid, idx) => (
                              vid.id && (
                                <div key={idx} className="bg-white p-2 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="px-4 py-3 text-sm font-bold text-slate-700 flex items-center justify-between">
                                    <span>{vid.title}</span>
                                    <span className="flex h-2 w-2 relative">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                  </div>
                                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 relative">
                                    <iframe
                                      src={`https://www.youtube.com/embed/${vid.id}`}
                                      className="w-full h-full"
                                      allowFullScreen
                                      title={vid.title}
                                    />
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        ) : (
                          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                            <img src={selectedProject.image} alt="Main" className="w-full h-auto object-cover" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-8">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                          <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                            <Icon icon="mdi:trophy-award" className="text-yellow-500 text-2xl" /> Key Results
                          </h3>
                          <ul className="space-y-4">
                            {selectedProject.results.map((res, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                              >
                                <div className="p-1 bg-primary-100 text-primary-600 rounded-full mt-0.5">
                                  <Icon icon="mdi:check" className="text-sm" />
                                </div>
                                <span className="font-bold text-slate-700 text-sm leading-relaxed">{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2 px-2">
                            <Icon icon="mdi:code-braces" className="text-slate-400 text-2xl" /> Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((t) => (
                              <span
                                key={t}
                                className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-slate-600 border border-slate-200 shadow-sm hover:border-primary-300 hover:text-primary-600 transition-all cursor-default"
                              >
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                    {selectedProject.docs?.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-5 p-6 rounded-3xl bg-white border transition-all group hover:-translate-y-1 hover:shadow-lg ${
                            doc.type === 'pptx' ? 'border-orange-100 hover:border-orange-200' : 'border-slate-100 hover:border-primary-200'
                        }`}
                      >
                        <div className={`p-4 rounded-2xl transition-colors shadow-inner ${
                            doc.type === 'pptx' ? 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white' : 'bg-slate-50 text-slate-500 group-hover:bg-primary-600 group-hover:text-white'
                        }`}>
                          <Icon icon={doc.type === 'pptx' ? "mdi:microsoft-powerpoint" : "mdi:file-pdf-box"} className="text-3xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-extrabold text-slate-800 text-base mb-1 truncate group-hover:text-primary-700">
                            {doc.name}
                          </p>
                          <p className="text-xs text-slate-400 font-bold tracking-wider uppercase flex items-center gap-1">
                            {doc.type === 'pptx' ? 'Google Slides' : 'PDF Document'} <Icon icon="mdi:open-in-new" className="text-[10px]" />
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* Gallery: Masonry-like */}
                {activeTab === 'gallery' && (
                  <div className="columns-1 md:columns-2 gap-6 space-y-6 animate-fadeIn p-2">
                    {selectedProject.gallery?.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setViewImage(img)}
                        className="cursor-zoom-in rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-slate-100 group relative break-inside-avoid"
                      >
                        <img
                          src={img}
                          alt="Gallery"
                          className="w-full h-auto object-cover transition-all duration-700 group-hover:brightness-110"
                          onError={(e) => { 
                              e.target.style.display = 'none'; 
                              e.target.parentElement.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30">
                             <Icon icon="mdi:arrow-expand-all" className="text-white text-2xl drop-shadow-md" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {(!selectedProject.gallery || selectedProject.gallery.length === 0) && (
                        <div className="col-span-full text-center py-20 text-slate-400 font-bold">
                            등록된 갤러리 이미지가 없습니다.
                        </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {viewImage && (
          <div
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setViewImage(null)}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={viewImage}
              alt="Full View"
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
            />
            <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              <Icon icon="mdi:close" className="text-3xl" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
