import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const certifications = [
  { name: '정보보안기사', img: '/sangwon_sec/assets/cert-sec-engineer.jpg', date: '2025.11 (실기 응시)', issuer: 'KISA' },
  { name: 'HSE 3급 (해킹보안전문가)', img: '/sangwon_sec/assets/cert-hse.jpg', date: '2025.12.18', issuer: '한국해킹보안협회' },
  { name: '리눅스마스터 2급', img: '/sangwon_sec/assets/cert-linux.jpg', date: '2025.10', issuer: 'KAIT' },
  { name: '네트워크관리사 2급', img: '/sangwon_sec/assets/cert-network.jpg', date: '2025.04', issuer: 'ICQA' },
  { name: 'Cisco CCST', img: '/sangwon_sec/assets/cert-ccst.jpg', date: '2025.11', issuer: 'Cisco' },
  { name: 'Microsoft SC-900', img: '/sangwon_sec/assets/cert-sc900.jpg', date: '2025.12', issuer: 'Microsoft' },
  { name: 'TOEIC Speaking IH', img: '/sangwon_sec/assets/cert-toeic.jpg', date: '2024.09', issuer: 'ETS' },
  { name: '한국사 1급', img: '/sangwon_sec/assets/cert-korean-history.jpg', date: '2017.02', issuer: '국사편찬위원회' },
];

const techStack = [
  { icon: 'logos:linux-tux', name: 'Linux' },
  { icon: 'logos:docker-icon', name: 'Docker' },
  { icon: 'logos:aws', name: 'AWS' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:nginx', name: 'Nginx' },
  { icon: 'simple-icons:cisco', name: 'Cisco', color: '#1BA0D7' },
  { icon: 'simple-icons:wireshark', name: 'Wireshark', color: '#1679A7' },
  { icon: 'devicon:flask', name: 'Flask' },
  { icon: 'logos:git-icon', name: 'Git' },
  { icon: 'logos:mysql', name: 'MySQL' },
];

// 7-step career path
const experience = [
  {
    role: '운영자 (E-Commerce)',
    company: '스마트스토어 (Personal)',
    period: '2015.01 - 2016.01',
    desc: '상품 소싱부터 판매, CS까지 이커머스 전 과정 1인 운영. 온라인 유통 프로세스 경험.'
  },
  {
    role: '대표 (운영 및 마케팅)',
    company: '하얀책상 4호점 (Cafe)',
    period: '2016.03 - 2018.02',
    desc: '매장 운영 총괄 및 로컬 마케팅 기획. 월 매출 200% 신장 달성 및 단골 고객 유치 전략 실행.'
  },
  {
    role: '해외 현지 관리자 (PM)',
    company: 'LKSTC (Laos)',
    period: '2019.01 - 2020.06',
    desc: '현지 인력 관리 및 프로젝트 일정 조율. 한국 본사와의 커뮤니케이션 브릿지 역할 수행.'
  },
  {
    role: 'Tech Sales Specialist',
    company: 'Computer Ahnex (USA)',
    period: '2021.05 - 2021.12',
    desc: '보안 소프트웨어(McAfee) 및 하드웨어 기술 영업. 입사 3개월 차 매장 최고 매출 달성.'
  },
  {
    role: 'Pharmacy Clerk',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: '처방전 접수 및 고객 데이터 관리. 약국 내 재고 관리 및 워크플로우 효율화.'
  },
  {
    role: '운영 지원 및 위기 관리',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 지역 화물 데이터 분석 및 리포팅. 태풍 위기 시 비상 연락망 가동 및 파트너사 조율.'
  },
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: '총 1,200시간 클라우드/보안 인프라 교육, Linux/Windows 서버, Docker 실습, 캡스톤 금상.'
  }
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 mb-8 font-heading leading-relaxed break-keep section-title-underline inline-block">
            성장을 향한 <span className="text-primary-600">증명</span>
          </h2>
        </div>

        {/* History */}
        <div className="glass-panel rounded-[2.5rem] p-12 lg:p-16 relative mb-24 w-full bg-white/60">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-16 flex items-center gap-4 font-heading">
            <Icon icon="mdi:briefcase-clock-outline" className="text-primary-600 text-4xl" />
            History Timeline
          </h3>

          <div className="space-y-16 border-l-[4px] border-slate-300/50 pl-8 md:pl-12 ml-2 md:ml-4">
            {experience.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[43px] md:-left-[60px] top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-[6px] border-primary-500 shadow-md group-hover:scale-125 transition-transform duration-300 z-10"></div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 mb-4">
                  <h4 className="text-2xl md:text-3xl font-black text-slate-800 break-keep">{exp.company}</h4>
                  <span className="text-slate-500 text-xs md:text-sm font-bold font-mono bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm w-fit">{exp.period}</span>
                </div>

                <p className="text-primary-700 font-extrabold text-lg md:text-xl mb-4 flex items-center gap-2">
                  <Icon icon="mdi:account-star" className="text-2xl" /> {exp.role}
                </p>

                <p className="text-slate-600 text-base md:text-lg leading-loose font-medium break-keep bg-white/50 p-6 rounded-3xl border border-slate-100 hover:bg-white transition-colors shadow-sm">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal & Global */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="glass-panel rounded-[2.5rem] p-12 bg-white/70">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center gap-4 font-heading">
              <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-4xl" />
              Technical Arsenal
            </h3>
            <div className="relative flex overflow-x-hidden py-4">
              <div className="animate-marquee whitespace-nowrap flex gap-16 px-4" style={{ animationDuration: '60s' }}>
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 min-w-[100px] transition-all duration-500">
                    <Icon
                      icon={tech.icon}
                      className="text-7xl filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-md"
                      color={tech.color}
                    />
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent z-10"></div>
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-[2.5rem] p-12 text-white text-center shadow-2xl relative overflow-hidden group flex flex-col justify-center border border-white/10">
            <div className="relative z-10">
              <Icon icon="mdi:earth" className="text-primary-400 text-8xl mb-8 mx-auto group-hover:rotate-12 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
              <h3 className="text-3xl font-extrabold mb-6 font-heading leading-snug">Global<br/>Capability</h3>
              <p className="text-slate-300 text-lg font-medium mb-8 leading-relaxed">
                USA & Laos Experience<br />
                <span className="text-sm opacity-70 font-normal">Diverse Business Environment</span>
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-base font-bold text-primary-200 backdrop-blur-sm">
                <Icon icon="mdi:translate" className="text-xl" /> English: Business Level
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center gap-4 font-heading">
            <Icon icon="mdi:license" className="text-primary-600 text-4xl" /> Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-panel cursor-pointer bg-white/80 p-6 rounded-[2rem] hover:border-primary-400 transition-all flex flex-col items-center text-center group relative overflow-hidden h-64 justify-between"
              >
                <div className="flex-1 flex items-center justify-center w-full relative z-10">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="max-h-24 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-slate-300">
                    <Icon icon="mdi:file-certificate-outline" className="text-5xl mb-2" />
                  </div>
                </div>
                <div className="relative z-10 w-full mt-4">
                  <p className="text-sm font-black text-slate-900 truncate w-full">{cert.name}</p>
                  <p className="text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-wider">{cert.date}</p>
                </div>

                <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                  <p className="text-white font-bold text-base mb-2 break-keep">{cert.name}</p>
                  <p className="text-primary-400 text-xs font-bold uppercase mb-4 tracking-wider">{cert.issuer}</p>
                  <p className="text-slate-300 text-xs leading-relaxed break-keep font-medium">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-md p-4" onClick={() => setSelectedCert(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl border border-white/50 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-56 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center p-6 border border-slate-100 relative">
                <img
                  src={selectedCert.img}
                  alt={selectedCert.name}
                  className="h-full object-contain drop-shadow-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = 'Image Not Found';
                  }}
                />
              </div>
              <h3 className="text-2xl font-black text-center text-slate-900 mb-3 font-heading break-keep">{selectedCert.name}</h3>
              <p className="text-center text-sm text-primary-600 font-bold mb-6 bg-primary-50 inline-block px-4 py-1 rounded-full">
                {selectedCert.issuer} | {selectedCert.date}
              </p>
              <p className="text-slate-600 text-center leading-relaxed text-base bg-slate-50 p-4 rounded-2xl mb-6">{selectedCert.desc}</p>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-4 bg-[#0F172A] text-white rounded-2xl text-lg font-bold hover:bg-primary-600 transition-all shadow-md"
              >
                닫기
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
