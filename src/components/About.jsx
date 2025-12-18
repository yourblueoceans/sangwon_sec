import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 자격증 데이터 (.jpg 수정 완료)
const certifications = [
  { name: "정보보안기사", img: "/sangwon_sec/assets/cert-sec-engineer.jpg", date: "2025.11 (실기 응시)", issuer: "KISA", desc: "정보보안 분야 최고 수준의 국가기술자격" },
  { name: "리눅스마스터 2급", img: "/sangwon_sec/assets/cert-linux.jpg", date: "2025.10", issuer: "KAIT", desc: "Linux 시스템 관리 및 활용 능력 입증" },
  { name: "네트워크관리사 2급", img: "/sangwon_sec/assets/cert-network.jpg", date: "2025.04", issuer: "ICQA", desc: "네트워크 인프라 실무 능력 인증" },
  { name: "Cisco CCST", img: "/sangwon_sec/assets/cert-ccst.jpg", date: "2025.11", issuer: "Cisco", desc: "글로벌 네트워크 보안 기초 자격" },
  { name: "Microsoft SC-900", img: "/sangwon_sec/assets/cert-sc900.jpg", date: "2025.12", issuer: "Microsoft", desc: "MS 클라우드 보안 기초" },
  { name: "TOEIC Speaking IH", img: "/sangwon_sec/assets/cert-toeic.jpg", date: "150점", issuer: "ETS", desc: "실무 비즈니스 영어 구사력" },
  { name: "한국사 1급", img: "/sangwon_sec/assets/cert-korean-history.jpg", date: "2017.02", issuer: "국사편찬위원회", desc: "인문학적 소양 인증" },
];

const techStack = [
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

// 이력서 기반 경력 수정 (Fact 반영)
const experience = [
  {
    role: "교육생 (클라우드 보안 엔지니어 과정)",
    company: "한국폴리텍대학 대전캠퍼스",
    period: "2025.03 - 2026.02 (예정)",
    desc: "총 1,200시간. AWS/Linux 기반 보안 인프라 구축. Drop the Port 프로젝트 팀장으로서 방화벽 정책 설계를 주도하고, 캡스톤 디자인 금상을 수상하며 실무 역량을 증명함.",
  },
  {
    role: "운영 지원 및 위기 관리 (Intern)",
    company: "대한항공 (미주본부)",
    period: "2023.02 - 2023.09",
    desc: "태풍으로 인한 공항 마비 상황에서 12시간 동안 승객 안내 및 파트너사 비상 연락망을 가동하여 위기를 관리함. 데이터 기반 리포팅으로 지점 운영 효율화 지원.",
  },
  {
    role: "Tech Sales Specialist",
    company: "Computer Ahnex (USA)",
    period: "2022.02 - 2022.09", // 이력서 기간 (7개월)
    desc: "McAfee 등 보안 솔루션의 기술적 스펙을 비즈니스 언어로 번역하여 고객에게 제안. 입사 3개월 만에 매장 최고 매출 달성 및 고객 신뢰 확보.",
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
            성장을 향한 <span className="text-primary-600">증명</span>
          </h2>
          <div className="h-2 w-24 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            
            {/* Experience */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 relative hover:shadow-2xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 font-heading">
                    <Icon icon="mdi:briefcase-clock-outline" className="text-primary-600 text-4xl" />
                    History
                </h3>
                <div className="space-y-12 border-l-[3px] border-slate-200 pl-10 ml-3">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative group">
                            <span className="absolute -left-[53px] top-2 w-7 h-7 rounded-full bg-white border-[6px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>
                            <h4 className="text-2xl font-extrabold text-slate-900 mb-2 break-keep">{exp.company}</h4>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="text-primary-700 font-bold text-lg flex items-center gap-2">
                                    <Icon icon="mdi:account-star-outline" className="text-xl" /> {exp.role}
                                </span>
                                <span className="text-slate-500 text-xs font-mono bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">{exp.period}</span>
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium break-keep bg-slate-50/50 p-4 rounded-xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                {exp.desc}
                            </p>
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
                    
                    <div className="relative flex overflow-x-hidden py-8">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 px-4">
                            {[...techStack, ...techStack].map((tech, index) => (
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
                        <h3 className="text-2xl font-extrabold mb-4 font-heading">Global Capability</h3>
                        <p className="text-slate-300 text-lg font-medium mb-6">
                            US Tech Sales & Airline Operation<br/>
                            <span className="text-sm opacity-80 font-normal">위기 상황 대처 및 비즈니스 커뮤니케이션</span>
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-primary-200 backdrop-blur-sm">
                            <Icon icon="mdi:translate" /> English: Professional Working
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>

        {/* Certifications (Grid - .jpg 적용) */}
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
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

      {/* Cert Modal */}
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
                                e.target.parentElement.innerHTML = '<div class="flex flex-col items-center text-slate-400"><Icon icon="mdi:image-off-outline" class="text-5xl mb-2" /><span>이미지 없음</span></div>';
                            }} 
                        />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-3 font-heading break-keep">{selectedCert.name}</h3>
                    <div className="flex justify-center mb-6">
                        <p className="text-center text-sm text-primary-700 font-bold bg-primary-50 inline-block px-5 py-2 rounded-full border border-primary-100">
                            {selectedCert.issuer} | {selectedCert.date}
                        </p>
                    </div>
                    {selectedCert.desc && (
                        <p className="text-slate-600 text-center leading-relaxed text-base break-keep bg-slate-50 p-4 rounded-2xl mb-6 font-medium">
                            {selectedCert.desc}
                        </p>
                    )}
                    <button onClick={() => setSelectedCert(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-primary-600 transition-all shadow-md">닫기</button>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
