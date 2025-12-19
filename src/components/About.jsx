import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 하드코딩 자격증 경로 (코드는 .jpg 기준)
const CERT_BASE = '/sangwon_sec/assets/certs';
const certifications = [
  { name: '정보보안기사', img: `${CERT_BASE}/cert-sec-engineer.jpg`, date: '2025.12.19 (최종 합격)', issuer: 'KISA', licenseId: '250A140****', desc: '정보보안 분야 최고 수준 국가기술자격.' },
  { name: 'HSE 3급 (해킹보안전문가)', img: `${CERT_BASE}/cert-hse.jpg`, date: '2025.12.22 (발급 예정)', issuer: '한국해킹보안협회', licenseId: '발급 대기 중', desc: '최신 해킹 기법 이해 및 침해사고 대응 기초 실무 능력 인증.' },
  { name: '리눅스마스터 2급', img: `${CERT_BASE}/cert-linux.jpg`, date: '2025.10', issuer: 'KAIT', licenseId: 'LMS-2053-00****', desc: 'Linux 시스템 설치, 운영, 관리 능력 입증.' },
  { name: '네트워크관리사 2급', img: `${CERT_BASE}/cert-network.jpg`, date: '2025.04', issuer: 'ICQA', licenseId: 'NT207****', desc: '네트워크 전송매체, 토폴로지 기술 실무.' },
  { name: 'Cisco CCST Cybersecurity', img: `${CERT_BASE}/cert-ccst.jpg`, date: '2025.11', issuer: 'Cisco', licenseId: 'waBsQ-****', desc: '글로벌 보안 위협 환경 이해 및 엔드포인트 보안.' },
  { name: 'Microsoft SC-900', img: `${CERT_BASE}/cert-sc900.jpg`, date: '2025.12', issuer: 'Microsoft', licenseId: 'F4HN-****', desc: 'MS 클라우드 보안, 컴플라이언스 기본 사항.' },
  { name: 'TOEIC Speaking IH', img: `${CERT_BASE}/cert-toeic.jpg`, date: '2024.09', issuer: 'ETS', licenseId: '10****', desc: '비즈니스 영어 의사소통 능력 인증 (150점).' },
  { name: '한국사능력검정 1급', img: `${CERT_BASE}/cert-korean-history.jpg`, date: '2017.02', issuer: '국사편찬위원회', licenseId: '34-10****', desc: '인문학적 소양 및 역사적 사고력 함양.' },
];

// [Tech Arsenal: 컬러 복구] 전체 hover 시 일괄 컬러 노출
const techItems = [
  { icon: 'logos:linux-tux', name: 'Linux', color: '#FCC624' },
  { icon: 'logos:docker-icon', name: 'Docker', color: '#2496ED' },
  { icon: 'logos:aws', name: 'AWS', color: '#FF9900' },
  { icon: 'logos:python', name: 'Python', color: '#3776AB' },
  { icon: 'logos:react', name: 'React', color: '#61DAFB' },
  { icon: 'logos:nginx', name: 'Nginx', color: '#009639' },
  { icon: 'simple-icons:cisco', name: 'Cisco', color: '#1BA0D7' },
  { icon: 'simple-icons:wireshark', name: 'Wireshark', color: '#1679A7' },
  { icon: 'devicon:flask', name: 'Flask', color: '#000000' },
  { icon: 'logos:git-icon', name: 'Git', color: '#F05032' },
  { icon: 'logos:mysql', name: 'MySQL', color: '#4479A1' },
];
const techStack = [...techItems, ...techItems, ...techItems, ...techItems];

const experience = [
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: "총 1,200시간. AWS/Linux 기반 보안 인프라 구축. 캡스톤 프로젝트 팀장으로 'LOCKUMENT' 개발 및 금상 수상."
  },
  {
    role: '개인사업자 (해외구매대행)',
    company: '스마트스토어 운영',
    period: '2024.01 - 현재',
    desc: '상품 소싱부터 통관, CS까지 이커머스 전 과정 1인 운영. 고객 클레임 대응 및 프로세스 관리.'
  },
  {
    role: 'Passenger Traffic Agent',
    company: '대한항공 (San Francisco)',
    period: '2023.02 - 2023.08',
    desc: '공항 현장 운영 및 위기 관리. CBP 인터뷰 통역 지원, 태풍 결항 시 승객 안내 및 대체편 조율.'
  },
  {
    role: 'Pharmacy Clerk',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.03 - 2023.01',
    desc: '처방전 접수 및 전산 관리. 약품 재고 관리 및 배송 포장 업무 수행.'
  },
  {
    role: 'Manager (Tech Sales)',
    company: 'Computer Ahnex (LA)',
    period: '2021.01 - 2021.08',
    desc: 'PC 조립 및 수리, 보안 S/W 기술 영업. 고객 맞춤형 견적 상담 및 매장 관리.'
  },
  {
    role: '공동 사장',
    company: '하얀책상 4호점 (Cafe)',
    period: '2017.05 - 2018.03',
    desc: '매장 운영 총괄 및 마케팅 기획. 매출 관리 및 고객 서비스 품질 유지.'
  },
  {
    role: 'Research Team Leader',
    company: 'LKSTC (Laos)',
    period: '2015.02 - 2016.09',
    desc: '현지 시장 조사 및 데이터 분석. 프로젝트 제안서 작성 및 현지 파트너 협업 조율.'
  }
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 font-heading leading-snug break-keep section-title-underline inline-block">
            성장을 향한 <span className="text-primary-600">증명</span>
          </h2>
        </div>
        
        {/* 1. History (가독성 개선: break-keep 적용) */}
        <div className="relative mb-32">
            <div className="hidden md:block timeline-line"></div>
            <div className="space-y-12 md:space-y-0">
                {experience.map((exp, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="hidden md:block w-1/2" />
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full shadow-md z-10 items-center justify-center">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        </div>
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel bg-white p-6 md:p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                            >
                                <div className="md:hidden absolute left-[-10px] top-8 w-5 h-5 bg-white border-4 border-primary-500 rounded-full shadow-sm z-10"></div>
                                <span className="text-primary-600 text-[10px] md:text-xs font-bold font-mono uppercase tracking-wider mb-2 block">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1 break-keep leading-tight">
                                    {exp.company}
                                </h3>
                                <p className="text-base md:text-lg font-bold text-teal-700 mb-3 flex items-center gap-2 md:justify-start justify-start">
                                    <Icon icon="mdi:account-star-outline" /> {exp.role}
                                </p>
                                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed break-keep">
                                    {exp.desc}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Separator */}
        <div className="relative flex items-center justify-center py-16 md:py-24">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-3xl absolute"></div>
            <span className="relative z-10 bg-[#F8FAFC] px-6 text-slate-400 font-mono text-sm uppercase tracking-widest">
                Technical Expertise & Credentials
            </span>
        </div>

        {/* 2. Technical Arsenal (전체 컬러 변환) */}
        <div className="mb-24 w-full">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center flex items-center justify-center gap-4 font-heading">
                    <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-4xl" />
                    Technical Arsenal
            </h3>
            <div className="glass-panel rounded-[3rem] p-8 md:p-12 bg-white/70 shadow-xl border border-white/50 w-full overflow-hidden">
                <div className="relative flex overflow-x-hidden py-4 group/track">
                    <div className="animate-marquee whitespace-nowrap flex gap-20 px-4" style={{ animationDuration: '80s' }}>
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 min-w-[100px] transition-all duration-300">
                                <Icon 
                                    icon={tech.icon} 
                                    className="text-6xl transition-all duration-500 transform drop-shadow-md filter grayscale opacity-60 group-hover/track:grayscale-0 group-hover/track:opacity-100 group-hover/track:scale-110" 
                                    style={{ color: tech.color }}
                                />
                                <span className="text-xs font-bold text-slate-400 group-hover/track:text-slate-800 transition-colors uppercase tracking-wider">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* 3. Certifications (글자 크기 확대) */}
        <div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-10 text-center flex items-center justify-center gap-4 font-heading">
                <Icon icon="mdi:license" className="text-primary-600 text-4xl" /> Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {certifications.map((cert, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="glass-panel cursor-pointer bg-white/80 p-5 rounded-[2rem] hover:border-primary-400 transition-all flex flex-col items-center text-center group relative overflow-hidden h-72 justify-between shadow-sm hover:shadow-lg"
                    >
                        <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 transition-opacity duration-300 group-hover:opacity-10">
                            <img 
                                src={cert.img} 
                                alt={cert.name} 
                                className="h-20 object-contain mb-4 drop-shadow-sm" 
                                onError={(e)=>{ e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                            />
                            <div className="hidden flex-col items-center justify-center text-slate-300">
                                <Icon icon="mdi:file-certificate-outline" className="text-5xl mb-2" />
                                <span className="text-[10px] mt-2">이미지 준비중</span>
                            </div>
                            
                            <p className="text-lg font-black text-slate-900 truncate w-full mb-1">{cert.name}</p>
                            <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">{cert.issuer}</p>
                            
                            {cert.licenseId && (
                                <div className="bg-slate-100 text-slate-500 text-[10px] font-mono px-2 py-1 rounded-md border border-slate-200 flex items-center gap-1">
                                    <Icon icon="mdi:check-decagram" className="text-teal-500" />
                                    {cert.licenseId}
                                </div>
                            )}
                        </div>

                        <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                            <p className="text-white font-bold text-lg mb-2 break-keep">{cert.name}</p>
                            <p className="text-teal-400 text-sm font-bold uppercase mb-4 tracking-wider">{cert.issuer}</p>
                            <div className="w-8 h-0.5 bg-teal-500/50 mb-4"></div>
                            <p className="text-slate-300 text-sm leading-relaxed break-keep font-medium line-clamp-5">
                                {cert.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
