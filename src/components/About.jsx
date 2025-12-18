import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 자격증 데이터 (경로 재확인 완료)
const certifications = [
  { name: "정보보안기사 (필기)", img: "/sangwon_sec/assets/cert-sec-engineer.png", date: "2025.08 (예정)", issuer: "KISA" },
  { name: "리눅스마스터 2급", img: "/sangwon_sec/assets/cert-linux.png", date: "2025.10", issuer: "KAIT" },
  { name: "네트워크관리사 2급", img: "/sangwon_sec/assets/cert-network.png", date: "2025.07", issuer: "ICQA" },
  { name: "Cisco CCST", img: "/sangwon_sec/assets/cert-ccst.png", date: "2025.11", issuer: "Cisco" },
  { name: "Microsoft SC-900", img: "/sangwon_sec/assets/cert-sc900.png", date: "2025.12", issuer: "Microsoft" },
  { name: "한국사 1급", img: "/sangwon_sec/assets/cert-korean-history.png", date: "2017.02", issuer: "국사편찬위원회" },
];

// 기술 스택 데이터
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
  { icon: "logos:aws", name: "AWS (Basic)" },
];

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
    <section id="about" className="py-32 relative bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading leading-tight break-keep">
            책상이 아닌 <span className="text-primary-600">현장</span>에서,<br/>
            이론이 아닌 <span className="text-blue-600">실전</span>으로 배웠습니다.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed break-keep font-medium">
            다양한 비즈니스 현장에서 익힌 유연한 소통 능력에,<br className="hidden md:block"/> 
            집요하게 파고든 엔지니어링 기술을 더해 <strong>'말이 통하는 보안 전문가'</strong>가 되겠습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Experience */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 relative">
                <h3 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 font-heading">
                    <Icon icon="mdi:history" className="text-primary-600 text-4xl" />
                    History
                </h3>
                <div className="space-y-14 border-l-[3px] border-slate-200 pl-10 ml-3">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative group">
                            <span className="absolute -left-[53px] top-2 w-7 h-7 rounded-full bg-white border-[6px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>
                            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">{exp.company}</h4>
                            <p className="text-primary-700 font-bold text-lg mb-3 flex items-center gap-2">
                                <Icon icon="mdi:account-hard-hat" className="text-xl" /> {exp.role}
                            </p>
                            <p className="text-slate-500 text-sm font-mono mb-4 bg-slate-100 inline-block px-3 py-1 rounded-lg border border-slate-200">{exp.period}</p>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium break-keep">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Tech & Certs */}
            <div className="space-y-12">
                
                {/* Technical Arsenal (개선된 그리드 레이아웃) */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-white/50 relative overflow-hidden">
                    <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4 font-heading relative z-10">
                         <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-4xl" />
                         Technical Arsenal
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 relative z-10">
                        {techStack.map((tech, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="flex flex-col items-center gap-3 group p-2 rounded-xl transition-all"
                            >
                                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Icon 
                                        icon={tech.icon} 
                                        className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                                        color={tech.color} 
                                    />
                                </div>
                                <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors text-center break-keep">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    {/* 배경 장식 */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50/50 rounded-full blur-3xl -z-0 pointer-events-none"></div>
                </div>

                {/* Certifications (개선된 카드 디자인 및 버그 수정) */}
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4 font-heading">
                        <Icon icon="mdi:license" className="text-primary-600 text-4xl" /> Certifications
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedCert(cert)}
                                className="cursor-pointer bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-20 w-full flex items-center justify-center mb-4 relative z-10">
                                    <img 
                                        src={cert.img} 
                                        alt={cert.name} 
                                        className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform" 
                                        onError={(e)=>{
                                            e.target.style.display='none';
                                            e.target.parentElement.innerHTML = '<Icon icon="mdi:file-document-alert-outline" class="text-4xl text-slate-300" />';
                                        }}
                                    />
                                </div>
                                <p className="text-sm font-extrabold text-slate-900 truncate w-full relative z-10">{cert.name}</p>
                                <p className="text-xs text-slate-500 mt-2 font-medium relative z-10">{cert.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Cert Modal (이미지 연동 수정됨) */}
      <AnimatePresence>
        {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-[3rem] max-w-md w-full p-8 shadow-2xl border border-white/50 relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10">
                        <Icon icon="mdi:close" className="text-2xl" />
                    </button>
                    
                    <div className="w-full h-56 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center p-6 border border-slate-100 relative">
                        {/* 이미지 경로가 올바른지 확인하고, 실패 시 대체 이미지 표시 */}
                        <img 
                            src={selectedCert.img} 
                            alt={selectedCert.name} 
                            className="h-full object-contain drop-shadow-md" 
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="flex flex-col items-center text-slate-400"><Icon icon="mdi:image-off-outline" class="text-5xl mb-2" /><span>이미지를 찾을 수 없습니다.</span></div>';
                            }} 
                        />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-3 font-heading break-keep">{selectedCert.name}</h3>
                    <div className="flex justify-center mb-8">
                        <p className="text-center text-sm text-primary-700 font-bold bg-primary-50 inline-block px-5 py-2 rounded-full border border-primary-100">
                            {selectedCert.issuer} | {selectedCert.date}
                        </p>
                    </div>
                    <button onClick={() => setSelectedCert(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-primary-600 transition-all shadow-md">닫기</button>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
