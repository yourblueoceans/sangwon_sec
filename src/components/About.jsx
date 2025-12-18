import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// 데이터는 기존 유지
const certifications = [
  { name: '정보보안기사', img: '/sangwon_sec/assets/cert-sec-engineer.jpg', date: '2025.11 (실기 응시)', issuer: 'KISA', desc: '정보보안 분야 최고 수준 자격' },
  { name: 'HSE 3급 (해킹보안전문가)', img: '/sangwon_sec/assets/cert-hse.jpg', date: '2025.12.18', issuer: '한국해킹보안협회', desc: '해킹 공격 기법 이해 및 보안 기초' },
  { name: '리눅스마스터 2급', img: '/sangwon_sec/assets/cert-linux.jpg', date: '2025.10', issuer: 'KAIT', desc: 'Linux 시스템 관리 및 명령어 활용' },
  { name: '네트워크관리사 2급', img: '/sangwon_sec/assets/cert-network.jpg', date: '2025.04', issuer: 'ICQA', desc: '네트워크 인프라 운용 실무' },
  { name: 'Cisco CCST', img: '/sangwon_sec/assets/cert-ccst.jpg', date: '2025.11', issuer: 'Cisco', desc: '글로벌 네트워크 보안 기초' },
  { name: 'Microsoft SC-900', img: '/sangwon_sec/assets/cert-sc900.jpg', date: '2025.12', issuer: 'Microsoft', desc: 'MS 클라우드 보안 및 컴플라이언스' },
  { name: 'TOEIC Speaking IH', img: '/sangwon_sec/assets/cert-toeic.jpg', date: '2024.09', issuer: 'ETS', desc: '실무 비즈니스 영어 구사력 (150점)' },
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
const techStack = [...techItems, ...techItems, ...techItems];

const experience = [
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: '총 1,200시간. AWS/Linux 기반 보안 인프라 구축. Drop the Port 프로젝트 팀장으로서 방화벽 정책 설계를 주도하고, 캡스톤 디자인 금상을 수상하며 실무 역량을 증명함.',
  },
  {
    role: '운영 지원 및 위기 관리',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 지역 항공 화물 데이터 분석 및 리포팅. 태풍으로 인한 공항 마비 시 12시간 동안 승객 안내 및 파트너사 비상 연락망을 가동하여 위기를 관리하고 운영 정상화를 지원함.',
  },
  {
    role: 'Tech Sales Specialist',
    company: 'Computer Ahnex (USA)',
    period: '2022.02 - 2022.09',
    desc: 'McAfee 등 보안 솔루션의 기술적 스펙을 비즈니스 언어로 번역하여 고객에게 제안. 입사 3개월 만에 매장 최고 매출을 달성하며 기술 영업 및 커뮤니케이션 능력을 입증함.',
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-20 md:py-32 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 font-heading leading-snug break-keep section-title-underline inline-block">
            성장을 향한 <span className="text-primary-600">증명</span>
          </h2>
        </div>

        {/* History */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-premium border border-white/50 relative hover:shadow-2xl transition-all duration-300 mb-16 md:mb-24 w-full">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-12 flex items-center gap-4 font-heading">
            <Icon icon="mdi:briefcase-clock-outline" className="text-primary-600 text-3xl md:text-4xl" />
            History
          </h3>
          <div className="space-y-12 md:space-y-16 border-l-[3px] md:border-l-[4px] border-slate-200 pl-6 md:pl-12 ml-1 md:ml-4">
            {experience.map((exp, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[35px] md:-left-[62px] top-1.5 md:top-2 w-5 h-5 md:w-8 md:h-8 rounded-full bg-white border-[4px] md:border-[6px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3 md:mb-4">
                  <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 break-keep">{exp.company}</h4>
                  <span className="text-slate-500 text-xs md:text-sm font-mono bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 w-fit">{exp.period}</span>
                </div>

                <p className="text-primary-700 font-bold text-base md:text-xl mb-3 md:mb-4 flex items-center gap-2">
                  <Icon icon="mdi:account-star" className="text-xl md:text-2xl" /> {exp.role}
                </p>

                <p className="text-slate-700 text-sm md:text-lg leading-relaxed md:leading-loose font-medium break-keep bg-slate-50/50 p-4 md:p-6 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-premium border border-white/50 group mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-10 flex items-center gap-4 font-heading">
            <Icon icon="mdi:toolbox-outline" className="text-primary-600 text-3xl md:text-4xl" />
            Technical Arsenal
          </h3>
          <div className="relative flex overflow-x-hidden py-4 md:py-8">
            <div className="animate-marquee whitespace-nowrap flex gap-10 md:gap-20 px-4">
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-3 md:gap-4 min-w-[80px] md:min-w-[120px] transition-all duration-500">
                  <Icon
                    icon={tech.icon}
                    className="text-5xl md:text-8xl filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-md"
                    color={tech.color}
                  />
                  <span className="text-xs md:text-base font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 md:p-10 text-white text-center shadow-2xl relative overflow-hidden group flex flex-col justify-center items-center">
            <div className="relative z-10">
              <Icon icon="mdi:earth" className="text-primary-400 text-6xl md:text-8xl mb-6 md:mb-8 mx-auto group-hover:rotate-12 transition-transform duration-700" />
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 font-heading leading-snug">Global<br/>Capability</h3>
              <p className="text-slate-300 text-base md:text-lg font-medium mb-6 md:mb-8 leading-relaxed">
                US Tech Sales &<br/>Airline Operation
              </p>
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-bold text-primary-200 backdrop-blur-sm">
                <Icon icon="mdi:translate" className="text-lg md:text-xl" /> English: Business Level
              </div>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-10 flex items-center gap-4 font-heading">
              <Icon icon="mdi:license" className="text-primary-600 text-3xl md:text-4xl" /> Certifications
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all overflow-hidden h-56 md:h-64"
                  onMouseEnter={() => setSelectedCert(cert.name)}
                  onMouseLeave={() => setSelectedCert(null)}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-300 group-hover:opacity-10">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="h-16 md:h-24 object-contain mb-3 md:mb-4 drop-shadow-sm"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center text-slate-300">
                      <Icon icon="mdi:file-certificate-outline" className="text-4xl md:text-5xl mb-2" />
                    </div>
                    <p className="text-xs md:text-sm font-extrabold text-slate-900 text-center leading-tight">{cert.name}</p>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-2 font-mono">{cert.date}</p>
                  </div>

                  <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center p-4 md:p-6 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <p className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2">{cert.name}</p>
                    <p className="text-primary-400 text-[10px] md:text-xs font-bold uppercase mb-2 md:mb-4 tracking-wider">{cert.issuer}</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed break-keep font-medium">{cert.desc}</p>
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
