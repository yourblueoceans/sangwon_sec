import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetPath } from '../utils/basePath';

const projectData = [
  {
    id: "lockument",
    title: "LOCKUMENT",
    category: "Cloud Security / DevSecOps",
    subtitle: "AWS KMS PII Masking & Encryption Platform",
    image: "assets/project-lockument.jpg",
    tags: ["AWS KMS", "Python Flask", "Docker", "React", "OCR"],
    videoUrl: "https://www.youtube.com/embed/6LKEwD0NfBc", 
    overview: "개인정보(PII) 유출 사고 방지를 위한 AWS 기반 자동 마스킹 및 암호화 웹 서비스입니다.",
    problem: "기업 내 개인정보가 포함된 문서가 평문으로 저장되어 발생하는 내부 유출 위협 및 컴플라이언스 이슈.",
    solution: "AWS Rekognition을 활용해 PII를 자동 식별/마스킹하고, AWS KMS Envelope Encryption을 적용하여 암호화 키를 격리 관리하는 아키텍처 설계.",
    results: [
      "🏆 2025 캡스톤 디자인 어워드 금상 수상",
      "PII 탐지율 99.7% 달성 (Regex + OCR 하이브리드 탐지)",
      "Role-Based Access Control (RBAC) 및 감사 로그 구현"
    ]
  },
  {
    id: "droptheport",
    title: "Drop the Port!",
    category: "Network Infrastructure",
    subtitle: "Defense in Depth: 3-Zone Network Architecture",
    image: "assets/project-droptheport.jpg",
    tags: ["Cisco L3/L2", "Firewall", "ELK Stack", "VPN"],
    overview: "사이버 위협에 대응하는 방어 심층(Defense in Depth) 기반의 3-Zone 엔터프라이즈 네트워크 구축 프로젝트입니다.",
    problem: "플랫(Flat)한 네트워크 구조로 인한 횡적 이동(Lateral Movement) 취약점 및 로그 가시성 부재.",
    solution: "DMZ, Internal, External 3계층 망분리 구조를 설계하고, ELK Stack을 통한 전사적 로그 중앙화 및 시각화 구현.",
    results: [
      "방화벽 정책 12종 수립 및 적용 (Whitelist 기반)",
      "Kibana 대시보드를 통한 실시간 트래픽 모니터링",
      "VLAN 기반 논리적 망분리 및 VPN 원격 접속 보안 체계 구축"
    ]
  },
  {
    id: "webvuln",
    title: "Web Vulnerability Assessment",
    category: "Offensive Security",
    subtitle: "Penetration Testing & Secure Coding Report",
    image: "assets/project-webvuln.jpg",
    tags: ["OWASP Top 10", "Burp Suite", "Linux", "Apache/PHP"],
    overview: "주요정보통신기반시설 기술적 취약점 가이드를 기준으로 수행한 웹 애플리케이션 모의해킹 및 조치 보고서입니다.",
    problem: "레거시 웹 애플리케이션(LAMP)에 존재하는 SQL Injection, XSS 등 5대 주요 취약점 방치.",
    solution: "공격자 관점의 모의해킹(Pentest)을 수행하여 취약점을 식별하고, 시큐어 코딩 및 서버 설정(Config) 강화를 통해 조치.",
    results: [
      "High Risk 취약점(SQLi, File Upload 등) 100% 조치 완료",
      "관리자 페이지 접근 통제 및 디렉터리 리스팅 제거",
      "시큐어 코딩 가이드라인 수립 및 개발팀 공유"
    ]
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projectData.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            문제를 정의하고 기술로 해결한 실무 프로젝트 케이스입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer rounded-2xl bg-slate-800/50 border border-white/5 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={getAssetPath(project.image)} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm font-semibold border border-white/20">
                     {project.videoUrl ? 'Play Video' : 'View Case Study'}
                   </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-mono text-cyan-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold text-slate-300 bg-slate-700/50 rounded">
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={selectedId}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0F172A] rounded-3xl border border-slate-700 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-700">
                   <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                   <p className="text-cyan-400 font-mono mb-6">{selectedProject.subtitle}</p>
                   
                   {selectedProject.videoUrl && (
                     <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mb-8 border border-slate-700">
                        <iframe 
                          src={selectedProject.videoUrl} 
                          title="Project Video"
                          className="w-full h-full" 
                          allowFullScreen 
                        />
                     </div>
                   )}

                   <div className="space-y-6">
                     <div>
                       <h3 className="text-lg font-semibold text-white mb-2">The Problem</h3>
                       <p className="text-slate-400 leading-relaxed">{selectedProject.problem}</p>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                       <p className="text-slate-400 leading-relaxed">{selectedProject.solution}</p>
                     </div>
                   </div>
                </div>

                <div className="p-8 lg:p-12 bg-slate-800/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Results</h3>
                  <ul className="space-y-3 mb-8">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-700 rounded-md text-sm text-slate-200 border border-slate-600">{tag}</span>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-700">
                    <button className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-colors shadow-lg shadow-cyan-900/20">
                      View Full PDF Report (Coming Soon)
                    </button>
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

