import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const certifications = [
  { name: '정보보안기사', img: '/sangwon_sec/assets/cert-sec-engineer.jpg', date: '2025.11 (실기 응시)', issuer: 'KISA', desc: '정보보안 분야 최고 수준 자격' },
  { name: 'HSE 3급 (해킹보안전문가)', img: '/sangwon_sec/assets/cert-hse.jpg', date: '2025.12.18', issuer: '한국해킹보안협회', desc: '해킹 공격 기법 이해 및 보안 기초' },
  { name: '리눅스마스터 2급', img: '/sangwon_sec/assets/cert-linux.jpg', date: '2025.10', issuer: 'KAIT', desc: 'Linux 시스템 관리 및 명령어 활용' },
  { name: '네트워크관리사 2급', img: '/sangwon_sec/assets/cert-network.jpg', date: '2025.04', issuer: 'ICQA', desc: '네트워크 인프라 운용 실무' },
  { name: 'Cisco CCST', img: '/sangwon_sec/assets/cert-ccst.jpg', date: '2025.11', issuer: 'Cisco', desc: '글로벌 네트워크 보안 기초' },
  { name: 'Microsoft SC-900', img: '/sangwon_sec/assets/cert-sc900.jpg', date: '2025.12', issuer: 'Microsoft', desc: 'MS 클라우드 보안 및 컴플라이언스' },
  { name: 'TOEIC Speaking IH', img: '/sangwon_sec/assets/cert-toeic.jpg', date: '2024.09 (150점)', issuer: 'ETS', desc: '실무 비즈니스 영어 구사력' },
  { name: '한국사 1급', img: '/sangwon_sec/assets/cert-korean-history.jpg', date: '2017.02', issuer: '국사편찬위원회', desc: '인문학적 소양 인증' },
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

// 요청 순서: Ahnex → Apotheco → Korean Air → Polytechnic (최신)
const experience = [
  {
    role: 'Tech Sales Specialist',
    company: 'Computer Ahnex (USA)',
    period: '2021.05 - 2021.12',
    desc: [
      '보안 소프트웨어(McAfee, V3) 및 하드웨어 기술 영업',
      '고객 니즈 파악 후 맞춤형 PC 조립 및 기술 지원(Troubleshooting)',
      '입사 3개월 차 매장 최고 매출 달성'
    ]
  },
  {
    role: 'Pharmacy Clerk',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: [
      '처방전 접수 및 고객 데이터 전산 관리 (HIPAA 준수)',
      '의약품 재고 관리 및 발주 업무',
      '고객 응대 및 클레임 1차 처리'
    ]
  },
  {
    role: '일반직 (운영지원 및 행정)',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: [
      '미주 지역 화물 데이터 집계 및 본사 리포팅',
      '태풍 위기 상황 시 비상 연락망 가동 및 파트너사 협업 조율',
      '지점 행정 업무 및 스케줄 관리 지원'
    ]
  },
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: [
      '1,200시간 클라우드/보안 인프라 집중 교육 이수',
      'Linux/Windows 서버 구축 및 가상화(Docker) 실습',
      'Drop the Port 등 실무형 프로젝트 팀장 수행 (캡스톤 금상)'
    ]
  }
];

const About = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  return (
    <section id="about" className="py-32 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 font-heading leading-snug break-keep section-title-underline inline-block">
            성장을 향한 <span className="text-primary-600">증명</span>
          </h2>
        </div>

        {/* History */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative mb-24 w-full">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-12 flex items-center gap-3 font-heading">
            <Icon icon="mdi:briefcase-clock-outline" className="text-primary-600 text-4xl" />
            History
          </h3>

          <div className="relative border-l-[3px] border-slate-200 ml-4 md:ml-6 space-y-16">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-2 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-sm z-10"></div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                  <h4 className="text-2xl font-extrabold text-slate-900">{exp.company}</h4>
                  <span className="text-sm font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 w-fit">{exp.period}</span>
                </div>

                <p className="text-lg font-bold text-primary-700 mb-4 flex items-center gap-2">
                  <Icon icon="mdi:account-star" /> {exp.role}
                </p>

                <ul className="space-y-2">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="text-slate-600 text-base md:text-lg leading-relaxed font-medium break-keep flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-10 mb-20">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 font-heading">
            <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-4xl" />
            Technical Arsenal
          </h3>
          <div className="relative flex overflow-x-hidden py-4">
            <div className="animate-marquee whitespace-nowrap flex gap-16 px-4" style={{ animationDuration: '60s' }}>
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-3 min-w-[100px] group transition-all">
                  <Icon
                    icon={tech.icon}
                    className="text-6xl filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-md"
                    color={tech.color}
                  />
                  <span className="text-sm font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>

        {/* Global & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 glass-panel-dark rounded-[2.5rem] p-10 text-white text-center shadow-2xl relative overflow-hidden group flex flex-col justify-center items-center">
            <div className="relative z-10">
              <Icon icon="mdi:earth" className="text-primary-400 text-8xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-700" />
              <h3 className="text-3xl font-extrabold mb-4 font-heading leading-snug">Global<br/>Experience</h3>
              <p className="text-slate-300 text-lg font-medium mb-8 leading-relaxed">
                USA 1.5 Years<br/>
                <span className="text-sm opacity-70 font-normal">Tech Sales & Admin</span>
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-primary-200 backdrop-blur-sm">
                <Icon icon="mdi:chat-processing-outline" className="text-xl" /> Practical Comm. (IH)
              </div>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 font-heading">
              <Icon icon="mdi:license" className="text-primary-600 text-4xl" /> Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all overflow-hidden h-60"
                  onMouseEnter={() => setHoveredCert(cert.name)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:opacity-10 bg-white">
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
                    <p className="text-sm font-extrabold text-slate-900 text-center leading-tight break-keep">{cert.name}</p>
                    <p className="text-xs text-slate-400 mt-2 font-mono">{cert.date}</p>
                  </div>

                  <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <p className="text-white font-bold text-base mb-2 break-keep">{cert.name}</p>
                    <p className="text-primary-400 text-[10px] font-bold uppercase mb-3 tracking-wider">{cert.issuer}</p>
                    {cert.desc && <p className="text-slate-300 text-xs leading-relaxed break-keep font-medium">{cert.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
