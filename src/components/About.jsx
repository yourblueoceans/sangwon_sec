import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 자격증 데이터
const certifications = [
  { name: '정보보안기사 (필기)', img: '/sangwon_sec/assets/cert-sec-engineer.png', date: '2025.08 (예정)', issuer: 'KISA' },
  { name: '리눅스마스터 2급', img: '/sangwon_sec/assets/cert-linux.png', date: '2025.10', issuer: 'KAIT' },
  { name: '네트워크관리사 2급', img: '/sangwon_sec/assets/cert-network.png', date: '2025.07', issuer: 'ICQA' },
  { name: 'Cisco CCST', img: '/sangwon_sec/assets/cert-ccst.png', date: '2025.11', issuer: 'Cisco' },
  { name: 'Microsoft SC-900', img: '/sangwon_sec/assets/cert-sc900.png', date: '2025.12', issuer: 'Microsoft' },
  { name: '한국사 1급', img: '/sangwon_sec/assets/cert-korean-history.png', date: '2017.02', issuer: '국사편찬위원회' },
];

// 기술 스택
const techStack = [
  { icon: 'logos:linux-tux', name: 'Linux' },
  { icon: 'logos:docker-icon', name: 'Docker' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:nginx', name: 'Nginx' },
  { icon: 'simple-icons:cisco', name: 'Cisco', color: '#1BA0D7' },
  { icon: 'simple-icons:wireshark', name: 'Wireshark', color: '#1679A7' },
  { icon: 'devicon:flask', name: 'Flask' },
  { icon: 'logos:elasticsearch', name: 'ELK Stack' },
  { icon: 'logos:git-icon', name: 'Git' },
  { icon: 'logos:mysql', name: 'MySQL' },
];

// 경력 (카피라이팅 미세 조정)
const experience = [
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: '리눅스/윈도우 서버 및 가상화 인프라를 구축하고, 보안 관제 실습을 진행했습니다. 캡스톤 프로젝트 팀장으로서 아키텍처 설계를 주도하며 실무 감각을 익혔습니다.',
  },
  {
    role: '해외 영업 및 운영 지원 (Intern)',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 지역 항공 화물 데이터를 분석하고, 현지 파트너사와 적극적으로 소통하며 운영 이슈를 해결했습니다.',
  },
  {
    role: 'Pharmacy Technician / PM',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: '약국 운영 프로세스 개선 프로젝트에 참여하고, 고객 데이터 관리 시스템을 운영하며 데이터 관리의 중요성을 배웠습니다.',
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
            <div className="bg-white rounded-[2.5rem] p-10 shadow-glass border border-white/50 relative">
                <h3 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 font-heading">
                    <Icon icon="mdi:briefcase-check-outline" className="text-primary-600 text-4xl" />
                    Career Path
                </h3>
                <div className="space-y-14 border-l-[3px] border-slate-200 pl-10 ml-3">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative group">
                            <span className="absolute -left-[53px] top-2 w-7 h-7 rounded-full bg-white border-[6px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>
                            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">{exp.company}</h4>
                            <p className="text-primary-700 font-bold text-base mb-3 flex items-center gap-2">
                                <Icon icon="mdi:account-tie" className="text-xl" /> {exp.role}
                            </p>
                            <p className="text-slate-500 text-sm font-mono mb-4 bg-slate-100 inline-block px-3 py-1 rounded-lg">{exp.period}</p>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium break-keep">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech Stack & Certs */}
            <div className="space-y-12">
                {/* Tech Stack */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-glass border border-white/50">
                    <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4 font-heading">
                         <Icon icon="mdi:code-braces" className="text-primary-600 text-4xl" />
                         Technical Arsenal
                    </h3>
                    <div className="relative flex overflow-x-hidden py-6 group">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 px-4">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-4 min-w-[90px]">
                                    <Icon icon={tech.icon} className="text-7xl filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 drop-shadow-sm" color={tech.color} />
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{tech.name}</span>
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
                                <img src={cert.img} alt={cert.name} className="h-20 object-contain mb-4 group-hover:scale-105 transition-transform" onError={(e)=>e.target.style.display='none'}/>
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
                    className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl border border-white/50"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={selectedCert.img} alt={selectedCert.name} className="w-full h-48 object-contain mb-6" />
                    <h3 className="text-2xl font-extrabold text-center text-slate-900 font-heading mb-2">{selectedCert.name}</h3>
                    <p className="text-center text-base text-primary-600 font-bold mb-6 bg-primary-50 inline-block px-4 py-1 rounded-full mx-auto">{selectedCert.issuer} | {selectedCert.date}</p>
                    <button onClick={() => setSelectedCert(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all">닫기</button>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
