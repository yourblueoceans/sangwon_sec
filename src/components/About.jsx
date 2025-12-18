import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 자격증 데이터 (수정 반영됨)
const certifications = [
  {
    name: "정보보안기사",
    img: "/sangwon_sec/assets/cert-sec-engineer.png",
    date: "2025.11.15 (실기 응시)",
    issuer: "KISA",
    desc: "정보보안 분야 최고 수준의 국가기술자격. 필기 합격 후 실기 응시 완료.",
  },
  {
    name: "리눅스마스터 2급",
    img: "/sangwon_sec/assets/cert-linux.png",
    date: "2025.10",
    issuer: "KAIT",
    desc: "Linux 시스템 관리 및 활용 능력 입증 (서버 구축 및 명령어 활용)",
  },
  {
    name: "네트워크관리사 2급",
    img: "/sangwon_sec/assets/cert-network.png",
    date: "2025.04",
    issuer: "ICQA",
    desc: "네트워크 인프라 전반의 실무 능력 및 케이블링/설정 능력 인증",
  },
  {
    name: "Cisco CCST Cybersecurity",
    img: "/sangwon_sec/assets/cert-ccst.png",
    date: "2025.11",
    issuer: "Cisco",
    desc: "글로벌 네트워크 보안 기초 역량 및 보안 위협 대응 능력 인증",
  },
  {
    name: "Microsoft SC-900",
    img: "/sangwon_sec/assets/cert-sc900.png",
    date: "2025.12",
    issuer: "Microsoft",
    desc: "MS 클라우드 보안, 컴플라이언스 및 자격 증명 기초 지식",
  },
  {
    name: "TOEIC Speaking IH",
    img: "/sangwon_sec/assets/cert-toeic.png",
    date: "150점",
    issuer: "ETS",
    desc: "실무 비즈니스 영어 커뮤니케이션 능력 (Intermediate High)",
  },
  {
    name: "한국사능력검정 1급",
    img: "/sangwon_sec/assets/cert-korean-history.png",
    date: "2017.02",
    issuer: "국사편찬위원회",
    desc: "인문학적 소양 및 역사적 사고력 인증",
  },
];

// 기술 스택 (ELK 제거, 아이콘 크기 확대)
const techItems = [
  { icon: "logos:linux-tux", name: "Linux" },
  { icon: "logos:docker-icon", name: "Docker" },
  { icon: "logos:aws", name: "AWS" },
  { icon: "logos:python", name: "Python" },
  { icon: "logos:react", name: "React" },
  { icon: "logos:nginx", name: "Nginx" },
  { icon: "simple-icons:cisco", name: "Cisco", color: "#1BA0D7" },
  { icon: "simple-icons:wireshark", name: "Wireshark", color: "#1679A7" },
  { icon: "devicon:flask", name: "Flask" },
  { icon: "logos:git-icon", name: "Git" },
  { icon: "logos:mysql", name: "MySQL" },
];
const techStack = [...techItems, ...techItems];

// 경력 데이터
const experience = [
  {
    role: "교육생 (클라우드 보안 엔지니어 과정)",
    company: "한국폴리텍대학 대전캠퍼스",
    period: "2025.03 - 2026.02 (예정)",
    desc: "총 1,200시간. 리눅스/윈도우 서버 및 가상화 인프라 구축, 보안 관제 실습. 캡스톤 프로젝트 팀장으로 아키텍처 설계 주도.",
  },
  {
    role: "해외 지점 운영 지원 (Intern)",
    company: "대한항공 (미주본부)",
    period: "2023.02 - 2023.09",
    desc: "미주 지역 항공 화물 데이터 집계 및 분석 리포팅. 현지 파트너사(GSA)와의 커뮤니케이션 및 지점 행정 업무 지원.",
  },
  {
    role: "Pharmacy Clerk",
    company: "Apotheco Pharmacy (USA)",
    period: "2022.02 - 2023.02",
    desc: "처방전 접수 및 고객 데이터 관리. 약국 내 재고 관리(Inventory) 및 워크플로우 효율화를 위한 현장 업무 수행.",
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
            성장을 향한 <span className="text-primary-600">기록</span>
          </h2>
          <div className="h-2 w-24 bg-primary-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            
            {/* Experience (Career Path) */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 relative hover:shadow-2xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 font-heading">
                    <Icon icon="mdi:briefcase-clock-outline" className="text-primary-600 text-4xl" />
                    History
                </h3>
                <div className="space-y-14 border-l-[3px] border-slate-200 pl-10 ml-3">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative group">
                            <span className="absolute -left-[53px] top-2 w-7 h-7 rounded-full bg-white border-[6px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>
                            <h4 className="text-2xl font-extrabold text-slate-900 mb-2 break-keep">{exp.company}</h4>
                            <p className="text-primary-700 font-bold text-lg mb-3 flex items-center gap-2">
                                <Icon icon="mdi:account-hard-hat" className="text-xl" /> {exp.role}
                            </p>
                            <p className="text-slate-500 text-sm font-mono mb-4 bg-slate-100 inline-block px-3 py-1 rounded-lg border border-slate-200">{exp.period}</p>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium break-keep">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Arsenal (Marquee) */}
            <div className="space-y-12">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 group">
                    <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4 font-heading">
                         <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-4xl" />
                         Technical Arsenal
                    </h3>
                    
                    {/* Marquee Container */}
                    <div className="relative flex overflow-x-hidden py-8">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 px-4 group-hover:[animation-play-state:paused]">
                            {techStack.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-4 min-w-[100px] transition-all duration-500">
                                    <Icon 
                                        icon={tech.icon} 
                                        className="text-7xl filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-md" 
                                        color={tech.color} 
                                    />
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-wider">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
                    </div>
                    
                    <p className="text-center text-slate-400 text-sm mt-4 font-medium">
                        * 마우스를 올리면 전체 스택이 활성화됩니다.
                    </p>
                </div>

                {/* Global Mindset Badge */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 text-white text-center shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <Icon icon="mdi:earth" className="text-primary-400 text-7xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-700" />
                        <h3 className="text-2xl font-extrabold mb-4 font-heading">Global Communication</h3>
                        <p className="text-slate-300 text-lg font-medium mb-6">USA (Intern/Work) & Laos (PM)</p>
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-primary-200 backdrop-blur-sm">
                            <Icon icon="mdi:translate" /> English: Professional Working
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>

        {/* Certifications (Grid) */}
        <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4 font-heading">
                <Icon icon="mdi:license" className="text-primary-600 text-4xl" /> Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certifications.map((cert, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -8 }}
                        onClick={() => setSelectedCert(cert)}
                        className="cursor-pointer bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all flex flex-col items-center text-center group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="h-24 w-full flex items-center justify-center mb-6 relative z-10">
                            <img 
                                src={cert.img} 
                                alt={cert.name} 
                                className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
                                onError={(e)=>{
                                    e.target.style.display='none';
                                    e.target.nextSibling.style.display='flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center text-slate-300 group-hover:text-primary-400 transition-colors">
                                <Icon icon="mdi:file-certificate-outline" className="text-5xl mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">No Image</span>
                            </div>
                        </div>
                        
                        <div className="relative z-10 w-full">
                            <p className="text-base font-extrabold text-slate-900 truncate">{cert.name}</p>
                            <p className="text-xs text-primary-600 font-bold mt-1 uppercase tracking-wide">{cert.issuer}</p>
                            <p className="text-xs text-slate-400 mt-2 font-mono bg-slate-50 py-1 px-2 rounded-lg inline-block">{cert.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>

      {/* Cert Modal (이미지 연동 & Fallback) */}
      <AnimatePresence>
        {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-md p-4" onClick={() => setSelectedCert(null)}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl border border-white/50 relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10">
                        <Icon icon="mdi:close" className="text-2xl" />
                    </button>
                    
                    <div className="w-full h-56 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center p-6 border border-slate-100 relative">
                        <img 
                            src={selectedCert.img} 
                            alt={selectedCert.name} 
                            className="h-full object-contain drop-shadow-md" 
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }} 
                        />
                        <div className="hidden flex-col items-center text-slate-400">
                            <Icon icon="mdi:image-off-outline" className="text-5xl mb-2" />
                            <span className="text-sm font-bold">이미지를 불러올 수 없습니다</span>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-3 font-heading break-keep">{selectedCert.name}</h3>
                    <div className="flex justify-center mb-6">
                        <p className="text-center text-sm text-primary-700 font-bold bg-primary-50 inline-block px-5 py-2 rounded-full border border-primary-100">
                            {selectedCert.issuer} | {selectedCert.date}
                        </p>
                    </div>
                    <p className="text-slate-600 text-center leading-relaxed text-base break-keep bg-slate-50 p-4 rounded-2xl mb-6">
                        {selectedCert.desc}
                    </p>
                    <button onClick={() => setSelectedCert(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-primary-600 transition-all shadow-md">닫기</button>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
