import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const certifications = [
  { name: '정보보안기사', img: '/sangwon_sec/assets/cert-sec-engineer.jpg', date: '2025.11 (실기 응시)', issuer: 'KISA', desc: '정보보안 분야 최고 수준 국가기술자격. 시스템, 네트워크, 애플리케이션 보안 실무 능력 검증.' },
  { name: 'HSE 3급 (해킹보안전문가)', img: '/sangwon_sec/assets/cert-hse.jpg', date: '2025.12.18', issuer: '한국해킹보안협회', desc: '최신 해킹 기법 이해 및 침해사고 대응 기초 실무 능력 인증.' },
  { name: '리눅스마스터 2급', img: '/sangwon_sec/assets/cert-linux.jpg', date: '2025.10', issuer: 'KAIT', desc: 'Linux 시스템 설치, 운영, 관리 및 트러블슈팅 능력 입증.' },
  { name: '네트워크관리사 2급', img: '/sangwon_sec/assets/cert-network.jpg', date: '2025.04', issuer: 'ICQA', desc: '네트워크 전송매체, 토폴로지 기술 및 엔지니어링 기초 실무 능력.' },
  { name: 'Cisco CCST Cybersecurity', img: '/sangwon_sec/assets/cert-ccst.jpg', date: '2025.11', issuer: 'Cisco', desc: '글로벌 보안 위협 환경 이해 및 네트워크 엔드포인트 보안 기초 역량.' },
  { name: 'Microsoft SC-900', img: '/sangwon_sec/assets/cert-sc900.jpg', date: '2025.12', issuer: 'Microsoft', desc: 'MS 클라우드(Azure) 보안, 컴플라이언스 및 ID 기본 사항 이해.' },
  { name: 'TOEIC Speaking IH', img: '/sangwon_sec/assets/cert-toeic.jpg', date: '2024.09 (150점)', issuer: 'ETS', desc: '비즈니스 환경에서의 효과적인 영어 의사소통 능력 인증 (중상급).' },
  { name: '한국사능력검정 1급', img: '/sangwon_sec/assets/cert-korean-history.jpg', date: '2017.02', issuer: '국사편찬위원회', desc: '한국사 심화 과정 인증. 인문학적 소양 및 역사적 사고력 함양.' },
];

const techItems = [
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
const techStack = [...techItems, ...techItems, ...techItems, ...techItems];

const experience = [
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: '총 1,200시간. AWS/Linux 기반 보안 인프라 구축 교육 이수. 캡스톤 프로젝트 팀장으로 “LOCKUMENT” 개발 및 금상 수상.'
  },
  {
    role: '일반직 (운영지원 및 위기관리)',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 화물 데이터 분석 및 리포팅. 태풍 천재지변 시 비상 연락망 가동 및 파트너사(GSA/조업사) 협업 조율.'
  },
  {
    role: 'Pharmacy Clerk',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: '처방전 데이터 전산 관리(HIPAA 준수) 및 재고 관리. 현지 고객 응대 및 클레임 처리.'
  },
  {
    role: 'Tech Sales Specialist',
    company: 'Computer Ahnex (USA)',
    period: '2021.05 - 2021.12',
    desc: '보안 소프트웨어(McAfee) 및 하드웨어 기술 영업. 맞춤 제안으로 입사 3개월 차 매장 최고 매출 달성.'
  },
  {
    role: '해외 현지 관리자 (PM)',
    company: 'LKSTC (Laos)',
    period: '2019.01 - 2020.06',
    desc: '현지 인력 채용/관리 및 공정 스케줄링. 한국 본사와 현장 간 커뮤니케이션 브릿지 역할.'
  },
  {
    role: '대표 (운영 및 마케팅)',
    company: '하얀책상 4호점 (Cafe)',
    period: '2016.03 - 2018.02',
    desc: '매장 운영 총괄 및 로컬 마케팅 기획. 월 매출 200% 신장 달성 및 단골 고객 확보.'
  },
  {
    role: '운영자 (E-Commerce)',
    company: '스마트스토어 (Personal)',
    period: '2015.01 - 2016.01',
    desc: '상품 소싱부터 판매, CS, 배송까지 이커머스 전 과정 1인 운영.'
  }
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-32 text-center">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 font-heading leading-tight break-keep section-title-underline inline-block">
            성장을 향한 <span className="text-primary-600">여정</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl mt-4 font-medium break-keep">
            다양한 비즈니스 현장에서 쌓은 경험은, <br className="md:hidden" />보안 엔지니어로서의 단단한 기반이 되었습니다.
          </p>
        </div>

        {/* History: Zig-Zag Timeline */}
        <div className="relative mb-32">
          <div className="hidden md:block timeline-line"></div>
          <div className="space-y-12 md:space-y-0">
            {experience.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2" />
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full shadow-md z-10 items-center justify-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-panel bg-white p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                  >
                    <div className="md:hidden absolute left-[-10px] top-8 w-5 h-5 bg-white border-4 border-primary-500 rounded-full shadow-sm z-10"></div>
                    <span className="text-primary-600 text-xs font-bold font-mono uppercase tracking-wider mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-black text-slate-900 mb-1 break-keep leading-tight">{exp.company}</h3>
                    <p className={`text-lg font-bold text-teal-700 mb-4 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end justify-start' : 'justify-start'}`}>
                      {index % 2 !== 0 && <Icon icon="mdi:account-star" />}
                      {exp.role}
                      {index % 2 === 0 && <Icon icon="mdi:account-star" />}
                    </p>
                    <p className="text-slate-600 text-base font-medium leading-relaxed break-keep">{exp.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-16 md:py-24">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-3xl absolute"></div>
          <span className="relative z-10 bg-[#F8FAFC] px-6 text-slate-400 font-mono text-sm uppercase tracking-widest">
            Technical Expertise & Credentials
          </span>
        </div>

        {/* Technical Arsenal */}
        <div className="mb-24 w-full">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center flex items-center justify-center gap-4 font-heading">
            <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-4xl" /> Technical Arsenal
          </h3>
          <div className="glass-panel rounded-[3rem] p-8 md:p-12 bg-white/70 shadow-xl border border-white/50 w-full overflow-hidden">
            <div className="relative flex overflow-x-hidden py-4">
              <div className="animate-marquee whitespace-nowrap flex gap-20 px-4" style={{ animationDuration: '80s' }}>
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 min-w-[120px] transition-all duration-500">
                    <Icon
                      icon={tech.icon}
                      className="text-8xl filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-md"
                      color={tech.color}
                    />
                    <span className="text-base font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-wider">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-10 text-center flex items-center justify-center gap-4 font-heading">
            <Icon icon="mdi:license" className="text-primary-600 text-4xl" /> Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-panel cursor-pointer bg-white/80 p-6 rounded-[2rem] hover:border-primary-400 transition-all flex flex-col items-center text-center group relative overflow-hidden h-72 justify-between shadow-sm hover:shadow-xl"
              >
                <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 transition-opacity duration-300 group-hover:opacity-10">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="h-20 object-contain mb-4 drop-shadow-sm"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-slate-300">
                    <Icon icon="mdi:file-certificate-outline" className="text-5xl mb-2" />
                  </div>
                  <p className="text-sm font-black text-slate-900 truncate w-full mb-1">{cert.name}</p>
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-full">{cert.date}</p>
                </div>

                <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                  <p className="text-white font-bold text-base mb-2 break-keep">{cert.name}</p>
                  <p className="text-teal-400 text-xs font-bold uppercase mb-4 tracking-wider">{cert.issuer}</p>
                  <div className="w-8 h-0.5 bg-teal-500/50 mb-4"></div>
                  <p className="text-slate-300 text-sm leading-relaxed break-keep font-medium line-clamp-5">{cert.desc}</p>
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
              <p className="text-center text-sm text-primary-600 font-bold mb-6 bg-primary-50 inline-block px-4 py-1 rounded-full">{selectedCert.issuer} | {selectedCert.date}</p>
              {selectedCert.desc && <p className="text-slate-600 text-center leading-relaxed text-base bg-slate-50 p-4 rounded-2xl mb-6">{selectedCert.desc}</p>}
              <button onClick={() => setSelectedCert(null)} className="w-full py-4 bg-[#0F172A] text-white rounded-2xl text-lg font-bold hover:bg-primary-600 transition-all shadow-md">닫기</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
