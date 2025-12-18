import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 자격증 데이터 (.png 확인 완료)
const certifications = [
  { name: '정보보안기사 (필기)', img: '/sangwon_sec/assets/cert-sec-engineer.png', date: '2025.08 (예정)', issuer: 'KISA' },
  { name: '리눅스마스터 2급', img: '/sangwon_sec/assets/cert-linux.png', date: '2025.10', issuer: 'KAIT' },
  { name: '네트워크관리사 2급', img: '/sangwon_sec/assets/cert-network.png', date: '2025.07', issuer: 'ICQA' },
  { name: 'Cisco CCST', img: '/sangwon_sec/assets/cert-ccst.png', date: '2025.11', issuer: 'Cisco' },
  { name: 'Microsoft SC-900', img: '/sangwon_sec/assets/cert-sc900.png', date: '2025.12', issuer: 'Microsoft' },
  { name: '한국사 1급', img: '/sangwon_sec/assets/cert-korean-history.png', date: '2017.02', issuer: '국사편찬위원회' },
];

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

const experience = [
  {
    role: '교육생 (클라우드 보안 엔지니어 과정)',
    company: '한국폴리텍대학 대전캠퍼스',
    period: '2025.03 - 2026.02 (예정)',
    desc: '총 1,200시간. 리눅스/윈도우 서버 및 가상화 인프라 구축, 보안 관제 실습, 캡스톤 프로젝트 리딩.',
  },
  {
    role: '해외 영업 및 운영 지원 (Intern)',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 지역 항공 화물 데이터 분석 및 글로벌 파트너사 커뮤니케이션 지원.',
  },
  {
    role: 'Pharmacy Technician / PM',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: '약국 운영 프로세스 개선 및 고객 데이터 관리 시스템 운영.',
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-24 relative bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            My <span className="text-primary-600">Journey</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-heading">
              <Icon icon="mdi:briefcase-check-outline" className="text-primary-600 text-2xl" />
              Career Path
            </h3>
            <div className="space-y-10 border-l-2 border-slate-100 pl-8 ml-2">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-sm group-hover:scale-110 transition-transform"></span>
                  <h4 className="text-lg font-bold text-slate-900">{exp.company}</h4>
                  <p className="text-primary-700 font-bold text-xs mb-2">{exp.role}</p>
                  <p className="text-slate-400 text-xs font-mono mb-3">{exp.period}</p>
                  <p className="text-slate-600 text-sm leading-relaxed break-keep">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Tech Stack (수정됨: 영역 호버 시 전체 색상 활성화) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 group cursor-default hover:border-primary-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-heading">
                <Icon icon="mdi:code-braces" className="text-primary-600 text-2xl" />
                Technical Arsenal
              </h3>
              <div className="relative flex overflow-x-hidden py-4">
                <div className="animate-marquee whitespace-nowrap flex gap-12 px-4">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 min-w-[70px]">
                      {/* 아이콘: 기본 grayscale, 부모(group) 호버 시 grayscale-0 */}
                      <Icon
                        icon={tech.icon}
                        className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                        color={tech.color}
                      />
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-700 transition-colors uppercase">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-heading">
                <Icon icon="mdi:certificate-outline" className="text-primary-600 text-2xl" /> Certifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCert(cert)}
                    className="cursor-pointer bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-300 transition-all flex flex-col items-center text-center group"
                  >
                    {/* 이미지 경로 확인 및 에러 핸들링 */}
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="h-16 object-contain mb-2 group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += '<span class="text-xs text-slate-400 my-4">이미지 없음</span>';
                      }}
                    />
                    <p className="text-[10px] font-bold text-slate-800 truncate w-full">{cert.name}</p>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
              <div className="w-full h-40 bg-slate-50 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src={selectedCert.img}
                  alt={selectedCert.name}
                  className="h-full object-contain"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=No+Image')}
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900">{selectedCert.name}</h3>
              <p className="text-center text-xs text-primary-600 font-bold mb-4">{selectedCert.issuer} | {selectedCert.date}</p>
              <button onClick={() => setSelectedCert(null)} className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-bold">닫기</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
