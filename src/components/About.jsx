import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const certifications = [
  { name: '정보보안기사 (필기)', img: 'assets/cert-sec-engineer.png', date: '2025.08 (예정)', issuer: 'KISA', desc: '정보보안 분야 최고 수준의 국가기술자격 (필기 합격)' },
  { name: '리눅스마스터 2급', img: 'assets/cert-linux.png', date: '2025.10', issuer: 'KAIT', desc: 'Linux 시스템 관리 및 활용 능력 입증' },
  { name: '네트워크관리사 2급', img: 'assets/cert-network.png', date: '2025.07', issuer: 'ICQA', desc: '네트워크 인프라 전반의 실무 능력 인증' },
  { name: 'Cisco CCST Cybersecurity', img: 'assets/cert-ccst.png', date: '2025.11', issuer: 'Cisco', desc: '글로벌 네트워크 보안 기초 역량 인증' },
  { name: 'Microsoft SC-900', img: 'assets/cert-sc900.png', date: '2025.12', issuer: 'Microsoft', desc: 'MS 클라우드 보안 및 컴플라이언스 기초' },
  { name: '한국사 1급', img: 'assets/cert-korean-history.png', date: '2017.02', issuer: '국사편찬위원회', desc: '인문학적 소양 및 역사적 사고력 인증' },
];

const techStack = [
  { icon: 'logos:aws', name: 'AWS' },
  { icon: 'logos:docker-icon', name: 'Docker' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:linux-tux', name: 'Linux' },
  { icon: 'logos:nginx', name: 'Nginx' },
  { icon: 'simple-icons:cisco', name: 'Cisco', color: '#1BA0D7' },
  { icon: 'simple-icons:wireshark', name: 'Wireshark', color: '#1679A7' },
  { icon: 'devicon:flask', name: 'Flask' },
  { icon: 'logos:elasticsearch', name: 'ELK Stack' },
];

const experience = [
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: 'AWS 중심의 클라우드 인프라 구축 및 보안 관제 실습. 캡스톤 프로젝트 팀장으로 아키텍처 설계 주도.',
  },
  {
    role: '해외 영업 및 운영 지원 (Intern)',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 지역 항공 화물 데이터 분석 및 현지 파트너사와의 비즈니스 커뮤니케이션 지원.',
  },
  {
    role: 'Pharmacy Technician / PM',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: '미국 현지 약국 운영 프로세스 개선 프로젝트 참여 및 고객 데이터 관리 시스템 운영.',
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading break-keep">
            성장을 향한 여정, <br className="md:hidden" />
            <span className="text-primary-600">My Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed break-keep">
            다양한 비즈니스 필드에서 익힌 유연함에,<br className="hidden md:block" /> 집요하게 파고든 기술적 깊이를 더해가고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-[3rem] p-10 shadow-premium border border-slate-100 hover-shimmer transition-all">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3 font-heading">
              <Icon icon="mdi:map-marker-path" className="text-primary-600 text-3xl" />
              Career Path
            </h3>
            <div className="space-y-12 border-l-[3px] border-slate-100 pl-10 ml-3">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[51px] top-2 w-6 h-6 rounded-full bg-white border-[5px] border-primary-500 shadow-sm" />
                  <h4 className="text-xl font-extrabold text-slate-900 mb-1">{exp.company}</h4>
                  <p className="text-primary-700 font-bold text-base mb-2 flex items-center gap-2">
                    <Icon icon="mdi:account-tie" /> {exp.role}
                  </p>
                  <p className="text-slate-400 text-sm font-mono mb-4 bg-slate-50 inline-block px-3 py-1 rounded-lg">{exp.period}</p>
                  <p className="text-slate-600 text-base leading-relaxed font-medium break-keep">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white rounded-[3rem] p-10 shadow-premium border border-slate-100 hover-shimmer">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3 font-heading">
                <Icon icon="mdi:layers-triple" className="text-primary-600 text-3xl" />
                Building Technical Foundation
              </h3>
              <div className="relative flex overflow-x-hidden py-6 group">
                <div className="animate-marquee whitespace-nowrap flex gap-20 px-6">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 min-w-[100px] opacity-60 group-hover:opacity-100 transition-opacity">
                      <Icon icon={tech.icon} className="text-7xl drop-shadow-sm filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110" color={tech.color} />
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 text-white text-center shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <Icon icon="mdi:earth" className="text-primary-300 text-7xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-700" />
                <h3 className="text-2xl font-extrabold mb-4 font-heading">Global Perspective</h3>
                <p className="text-slate-300 text-lg font-medium mb-6">USA (Sales) → Laos (PM) → Korea (Security)</p>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-primary-200 backdrop-blur-sm">
                  <Icon icon="mdi:translate" /> English: Professional Working
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all" />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-10 font-heading flex items-center gap-3">
            <Icon icon="mdi:medal-outline" className="text-primary-600" /> Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer bg-white rounded-3xl border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-300 transition-all group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="aspect-[3/4] p-6 flex items-center justify-center relative z-10">
                  <img
                    src={getAssetPath(cert.img)}
                    alt={cert.name}
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.classList.add('bg-slate-100');
                      e.currentTarget.parentElement.innerHTML = '<span class="text-xs text-slate-400">Image N/A</span>';
                    }}
                  />
                </div>
                <div className="p-5 bg-white text-center relative z-10 border-t border-slate-50">
                  <p className="text-sm font-extrabold text-slate-900 truncate">{cert.name}</p>
                  <p className="text-xs font-bold text-primary-600 mt-1">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-md p-4" onClick={() => setSelectedCert(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] max-w-md w-full shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-blue-500" />
              <div className="p-8 bg-slate-50 flex justify-center border-b border-slate-100 relative">
                <img
                  src={getAssetPath(selectedCert.img)}
                  alt={selectedCert.name}
                  className="h-40 object-contain filter drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150?text=No+Image';
                  }}
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm"
                >
                  <Icon icon="mdi:close" className="text-xl" />
                </button>
              </div>
              <div className="p-10 text-center">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 font-heading">{selectedCert.name}</h3>
                <p className="text-primary-700 font-bold text-base mb-6 bg-primary-50 inline-block px-4 py-1 rounded-full">{selectedCert.issuer}</p>
                <p className="text-slate-600 text-base leading-relaxed font-medium break-keep bg-slate-50 p-6 rounded-2xl">{selectedCert.desc}</p>
                <p className="text-slate-400 text-sm font-mono mt-6 flex items-center justify-center gap-2">
                  <Icon icon="mdi:calendar-check" /> 취득일: {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;

