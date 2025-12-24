import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const BASE_PATH = import.meta.env.BASE_URL;
const CERT_BASE = `${BASE_PATH}assets/certs`;

// [전략적 데이터 배치] 3x3 그리드
const certifications = [
  // Row 1: Infra Basics
  { name: '리눅스마스터 2급', img: `${CERT_BASE}/cert-linux.jpg`, date: '2025.10', issuer: 'KAIT', licenseId: 'LMS-2053-00****', desc: 'Linux 시스템 설치, 운영, 관리 능력 입증.' },
  { name: '네트워크관리사 2급', img: `${CERT_BASE}/cert-network.jpg`, date: '2025.04', issuer: 'ICQA', licenseId: 'NT207****', desc: '네트워크 전송매체, 토폴로지 기술 실무.' },
  { name: 'Cisco CCST Cybersecurity', img: `${CERT_BASE}/cert-ccst.jpg`, date: '2025.11', issuer: 'Cisco', licenseId: 'waBsQ-****', desc: '글로벌 보안 위협 환경 이해.' },
  
  // Row 2: Core Security (Centerpiece)
  { 
    name: 'CPPG (개인정보관리사)', 
    img: `${CERT_BASE}/cert-cppg.jpg`,
    date: '2025.08', 
    issuer: 'CPO포럼', 
    licenseId: 'G25-046-01-*****', 
    desc: '개인정보보호 정책 수립 및 컴플라이언스 대응 능력.' 
  },
  { 
    name: '정보보안기사', 
    img: `${CERT_BASE}/cert-sec-engineer.jpg`,
    date: '2025.12', 
    issuer: 'KCA', 
    licenseId: '250A140****', 
    desc: '정보보안 분야 최고 수준 국가기술자격.',
    isMain: true
  },
  { 
    name: 'HSE 3급 (해킹보안전문가)', 
    img: `${CERT_BASE}/cert-hse.jpg`,
    date: '2025.12', 
    issuer: '한국해킹보안협회', 
    licenseId: 'HSE-2528-3****', 
    desc: '최신 해킹 기법 이해 및 침해사고 대응.' 
  },

  // Row 3: Cloud & Others
  { name: 'Microsoft SC-900', img: `${CERT_BASE}/cert-sc900.jpg`, date: '2025.12', issuer: 'Microsoft', licenseId: 'F4HN-****', desc: 'MS 클라우드 보안, 컴플라이언스 기본.' },
  { name: 'TOEIC Speaking IH', img: `${CERT_BASE}/cert-toeic.jpg`, date: '2024.09', issuer: 'ETS', licenseId: '10****', desc: '비즈니스 영어 의사소통 능력 (150점).' },
  { name: '한국사능력검정 1급', img: `${CERT_BASE}/cert-korean-history.jpg`, date: '2017.02', issuer: '국사편찬위원회', licenseId: '34-10****', desc: '인문학적 소양 및 역사적 사고력 함양.' },
];

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
const techStack = [...techItems, ...techItems, ...techItems];

const experience = [
  { role: "교육생 (클라우드 보안 엔지니어 과정)", company: "한국폴리텍대학 대전캠퍼스", period: "2025.03 - 2026.02 (예정)", desc: "총 1,200시간. AWS/Linux 기반 보안 인프라 구축. 캡스톤 프로젝트 팀장으로 'LOCKUMENT' 개발 및 금상 수상." },
  { role: "개인사업자 (해외구매대행)", company: "스마트스토어 운영", period: "2024.01 - 현재", desc: "상품 소싱부터 통관, CS까지 이커머스 전 과정 1인 운영. 고객 클레임 대응 및 프로세스 관리." },
  { role: "Passenger Traffic Agent", company: "대한항공 (San Francisco)", period: "2023.02 - 2023.08", desc: "공항 현장 운영 및 위기 관리. CBP 인터뷰 통역 지원, 태풍 결항 시 승객 안내 및 대체편 조율." },
  { role: "Pharmacy Clerk", company: "Apotheco Pharmacy (USA)", period: "2022.03 - 2023.01", desc: "처방전 접수 및 전산 관리. 약품 재고 관리 및 배송 포장 업무 수행." },
  { role: "Manager (Tech Sales)", company: "Computer Ahnex (LA)", period: "2021.01 - 2021.08", desc: "PC 조립 및 수리, 보안 S/W 기술 영업. 고객 맞춤형 견적 상담 및 매장 관리." },
  { role: "공동 사장", company: "하얀책상 4호점 (Cafe)", period: "2017.05 - 2018.03", desc: "매장 운영 총괄 및 마케팅 기획. 매출 관리 및 고객 서비스 품질 유지." },
  { role: "Research Team Leader", company: "LKSTC (Laos)", period: "2015.02 - 2016.09", desc: "현지 시장 조사 및 데이터 분석. 프로젝트 제안서 작성 및 현지 파트너 협업 조율." }
];

const About = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [isExpExpanded, setIsExpExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleExperience = (isMobile && !isExpExpanded) ? experience.slice(0, 3) : experience;

  return (
    <section id="about" className="py-20 md:py-32 relative bg-bg-main overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-100/30 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 font-heading leading-snug break-keep section-title-underline inline-block">
            성장을 향한 <span className="text-primary-600">증명</span>
          </h2>
        </div>
        
        {/* History */}
        <div className="relative mb-24 md:mb-32">
          <div className="hidden md:block timeline-line"></div>
          <div className="space-y-8 md:space-y-0">
            <AnimatePresence>
              {visibleExperience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full shadow-md z-10 items-center justify-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="glass-panel bg-white p-6 md:p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <div className="md:hidden text-center pt-4">
              <button 
                onClick={() => setIsExpExpanded(!isExpExpanded)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-colors relative overflow-hidden group"
              >
                <div className="animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {isExpExpanded ? '접기 (Show Less)' : '전체 경력 보기 (Show More)'}
                  <Icon icon="mdi:chevron-down" className={`transition-transform duration-300 ${isExpExpanded ? 'rotate-180' : ''}`} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="section-divider"></div>
        <div className="text-center mb-12">
          <span className="bg-[#F8FAFC] px-6 text-slate-400 font-mono text-xs md:text-sm uppercase tracking-widest relative -top-[44px]">
            Technical Expertise & Credentials
          </span>
        </div>

        {/* Tech Arsenal */}
        <div className="mb-20 md:mb-24 w-full">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-12 text-center flex items-center justify-center gap-2 font-heading">
            <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-3xl md:text-4xl" />
            Technical Arsenal
          </h3>
          <div className="glass-panel rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 bg-white/70 shadow-xl border border-white/50 w-full overflow-hidden group/track">
            <div className="relative flex overflow-x-hidden py-2 md:py-4">
              <div className="animate-marquee whitespace-nowrap flex gap-12 md:gap-20 px-4" style={{ animationDuration: '80s' }}>
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 md:gap-4 min-w-[80px] md:min-w-[100px] transition-all duration-300 relative group/icon">
                    <Icon 
                      icon={tech.icon} 
                      className="text-4xl md:text-6xl transition-all duration-500 transform drop-shadow-md filter grayscale opacity-60 group-hover/track:grayscale-0 group-hover/track:opacity-100 group-hover/track:scale-110" 
                      style={{ color: tech.color }} 
                    />
                    <span className="text-[10px] md:text-xs font-bold text-slate-400 group-hover/track:text-slate-800 transition-colors uppercase tracking-wider">{tech.name}</span>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-10 text-center flex items-center justify-center gap-2 font-heading">
            <Icon icon="mdi:license" className="text-primary-600 text-3xl md:text-4xl" /> Certifications
          </h3>
          
          {/* Desktop: 3x3 Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto items-stretch">
            {certifications.map((cert, idx) => (
              <CertCard key={idx} cert={cert} />
            ))}
          </div>

          {/* Mobile: Snap Scroll Slider */}
          <motion.div ref={carouselRef} className="md:hidden overflow-hidden cursor-grab active:cursor-grabbing px-2 pb-10">
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="flex gap-4 snap-x snap-mandatory"
            >
              {certifications.map((cert, idx) => (
                <div key={idx} className="min-w-[280px] h-72 snap-center">
                  <CertCard cert={cert} />
                </div>
              ))}
            </motion.div>
            <p className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-1 animate-pulse">
              <Icon icon="mdi:gesture-swipe-horizontal" /> 옆으로 넘겨보세요
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// [High-End] Premium Card Component with Rotating Border Logic
const CertCard = ({ cert }) => {
  const isMain = cert.isMain; 

  return (
    <motion.div
      animate={isMain ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ y: -8 }}
      className={`
        relative overflow-hidden rounded-[2rem] h-full flex flex-col items-center text-center p-[2px] transition-all duration-500 group
        ${isMain ? 'shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)] z-10' : 'shadow-lg hover:shadow-2xl border border-slate-200/60 bg-white'}
      `}
    >
      {/* [MAIN ONLY] Rotating Gradient Border Background */}
      {isMain && (
        <div
          className="absolute inset-0 bg-[conic-gradient(from_var(--angle),transparent_20%,#F59E0B_50%,transparent_80%)] animate-border-spin"
          style={{ '--angle': '0deg' }}
        />
      )}

      {/* Card Content Container */}
      <div className={`
        relative w-full h-full rounded-[1.9rem] flex flex-col items-center justify-between p-6 z-10
        ${isMain ? 'bg-white/95 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-md'}
      `}>
        {/* Main Badge */}
        {isMain && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-2xl shadow-sm uppercase tracking-widest flex items-center gap-1">
            <Icon icon="mdi:crown" /> Core
          </div>
        )}

        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <img 
            src={cert.img} 
            alt={cert.name} 
            className={`object-contain mb-4 drop-shadow-sm transition-transform duration-500 ${isMain ? 'h-24 group-hover:scale-110' : 'h-20 group-hover:scale-105'}`}
            onError={(e)=>{ e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
          />
          
          <div className="hidden flex-col items-center justify-center text-slate-300">
            <Icon icon="mdi:file-certificate-outline" className="text-5xl mb-2" />
            <span className="text-[10px] mt-2 font-bold uppercase text-slate-400">이미지 없음</span>
          </div>
          
          <p className={`font-black truncate w-full mb-1 break-keep ${isMain ? 'text-xl text-slate-900' : 'text-lg text-slate-800'}`}>
            {cert.name}
          </p>
          <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">{cert.issuer}</p>
          
          {cert.licenseId && (
            <div className={`text-[10px] font-mono px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${isMain ? 'bg-amber-50 text-amber-700 border-amber-200 font-bold shadow-sm' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
              <Icon icon="mdi:check-decagram" className={isMain ? "text-amber-500" : "text-teal-500"} />
              {cert.licenseId}
            </div>
          )}
        </div>
        
        {/* Hover Reveal Overlay */}
        <div className={`
          absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 translate-y-full group-hover:translate-y-0
          ${isMain ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-[#0F172A]/95 backdrop-blur-sm'}
        `}>
          <p className={`font-bold text-lg mb-2 break-keep ${isMain ? 'text-amber-400' : 'text-white'}`}>{cert.name}</p>
          <p className="text-teal-400 text-sm font-bold uppercase mb-4 tracking-wider break-keep">{cert.issuer}</p>
          <div className={`w-10 h-0.5 mb-4 ${isMain ? 'bg-amber-500' : 'bg-teal-500/50'}`}></div>
          <p className="text-slate-300 text-sm leading-relaxed break-keep font-medium line-clamp-5">
            {cert.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
