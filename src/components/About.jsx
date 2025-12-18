import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 자격증 데이터 (.png 경로 확인)
const certifications = [
  { name: "정보보안기사 (필기)", img: "/sangwon_sec/assets/cert-sec-engineer.png", date: "2025.08 (예정)", issuer: "KISA" },
  { name: "리눅스마스터 2급", img: "/sangwon_sec/assets/cert-linux.png", date: "2025.10", issuer: "KAIT" },
  { name: "네트워크관리사 2급", img: "/sangwon_sec/assets/cert-network.png", date: "2025.07", issuer: "ICQA" },
  { name: "Cisco CCST", img: "/sangwon_sec/assets/cert-ccst.png", date: "2025.11", issuer: "Cisco" },
  { name: "Microsoft SC-900", img: "/sangwon_sec/assets/cert-sc900.png", date: "2025.12", issuer: "Microsoft" },
  { name: "한국사 1급", img: "/sangwon_sec/assets/cert-korean-history.png", date: "2017.02", issuer: "국사편찬위원회" },
];

const techStack = [
  { icon: "logos:linux-tux", name: "Linux" },
  { icon: "logos:docker-icon", name: "Docker" },
  { icon: "logos:python", name: "Python" },
  { icon: "logos:react", name: "React" },
  { icon: "logos:nginx", name: "Nginx" },
  { icon: "simple-icons:cisco", name: "Cisco", color: "#1BA0D7" },
  { icon: "simple-icons:wireshark", name: "Wireshark", color: "#1679A7" },
  { icon: "devicon:flask", name: "Flask" },
  { icon: "logos:elasticsearch", name: "ELK Stack" },
  { icon: "logos:git-icon", name: "Git" },
  { icon: "logos:mysql", name: "MySQL" },
];

// 경력 (팩트 체크 및 수정 완료)
const experience = [
  {
    role: "교육생 (클라우드 보안 엔지니어 과정)",
    company: "한국폴리텍대학 대전캠퍼스",
    period: "2025.03 - 2026.02 (예정)",
    desc: "총 1,200시간. 리눅스/윈도우 서버 및 가상화 인프라 구축, 보안 관제 실습. 캡스톤 프로젝트 팀장으로 아키텍처 설계 주도.",
  },
  {
    role: "해외 영업 및 운영 지원 (Intern)",
    company: "대한항공 (미주본부)",
    period: "2023.02 - 2023.09",
    desc: "미주 지역 항공 화물 데이터 분석 리포팅, 지점 운영 지원 및 현지 파트너사 커뮤니케이션 담당.",
  },
  {
    role: "Pharmacy Clerk",
    company: "Apotheco Pharmacy (USA)",
    period: "2022.02 - 2023.02",
    desc: "처방전 접수 및 고객 데이터 관리, 약국 내 재고 관리 및 운영 프로세스 효율화 업무 수행.",
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
            성장을 향한 <span className="text-primary-600">기록</span>
          </h2>
          <div className="h-2 w-24 bg-primary-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Experience */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 relative">
                <h3 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 font-heading">
                    <Icon icon="mdi:briefcase-clock-outline" className="text-primary-600 text-4xl" />
                    Career Path
                </h3>
                <div className="space-y-14 border-l-[3px] border-slate-200 pl-10 ml-3">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative group">
                            <span className="absolute -left-[53px] top-2 w-7 h-7 rounded-full bg-white border-[6px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>
                            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">{exp.company}</h4>
                            <p className="text-primary-700 font-bold text-lg mb-3 flex items-center gap-2">
                                <Icon icon="mdi:account-badge-outline" className="text-xl" /> {exp.role}
                            </p>
                            <p className="text-slate-500 text-sm font-mono mb-4 bg-slate-100 inline-block px-3 py-1 rounded-lg border border-slate-200">{exp.period}</p>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium break-keep">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech Stack & Certs */}
            <div className="space-y-12">
                {/* Tech Stack */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 group hover:border-primary-200 transition-colors">
                    <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4 font-heading">
                         <Icon icon="mdi:code-braces" className="text-primary-600 text-4xl" />
                         Technical Arsenal
                    </h3>
                    {/* 마우스 호버 시 아이콘 전체 활성화 */}
                    <div className="relative flex overflow-x-hidden py-6">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 px-4">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-4 min-w-[90px]">
                                    <Icon 
                                        icon={tech.icon} 
                                        className="text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform hover:scale-110 drop-shadow-sm" 
                                        color={tech.color} 
                                    />
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-slate-700 transition-colors uppercase tracking-wider">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4 font-heading">
                        <Icon icon="mdi:certificate-outline" className="text-primary-600 text-4xl" /> Certifications
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <div 
                                key={idx}
                                onClick={() => setSelectedCert(cert)}
                                className="cursor-pointer bg-white p-5 rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all flex flex-col items-center text-center group"
                            >
                                <img 
                                    src={cert.img} 
                                    alt={cert.name} 
                                    className="h-20 object-contain mb-4 group-hover:scale-105 transition-transform" 
                                    onError={(e)=>{
                                        e.target.style.display='none';
                                        e.target.parentElement.innerHTML += '<span class="text-xs text-slate-400 my-4 block">이미지 없음</span>';
                                    }}
                                />
                                <p className="text-sm font-extrabold text-slate-900 truncate w-full">{cert.name}</p>
                                <p className="text-xs text-slate-500 mt-2 font-medium">{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Cert Modal */}
      <AnimatePresence>
        {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl border border-white/50 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
                        <Icon icon="mdi:close" className="text-3xl" />
                    </button>
                    <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4 border border-slate-100">
                        <img 
                            src={selectedCert.img} 
                            alt={selectedCert.name} 
                            className="h-full object-contain" 
                            onError={(e) => e.target.src='https://via.placeholder.com/300x200?text=Image+Not+Found'} 
                        />
                    </div>
                    <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-2 font-heading">{selectedCert.name}</h3>
                    <p className="text-center text-sm text-primary-600 font-bold mb-8 bg-primary-50 inline-block px-4 py-1 rounded-full mx-auto">{selectedCert.issuer} | {selectedCert.date}</p>
                    <button onClick={() => setSelectedCert(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all shadow-lg">닫기</button>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
