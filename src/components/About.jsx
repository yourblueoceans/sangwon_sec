import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const certifications = [
  { name: '정보보안기사 (필기)', img: 'assets/cert-sec-engineer.png', date: '2025.08 (예정)', issuer: 'KISA' },
  { name: '리눅스마스터 2급', img: 'assets/cert-linux.png', date: '2025.10', issuer: 'KAIT' },
  { name: '네트워크관리사 2급', img: 'assets/cert-network.png', date: '2025.07', issuer: 'ICQA' },
  { name: 'Cisco CCST', img: 'assets/cert-ccst.png', date: '2025.11', issuer: 'Cisco' },
  { name: 'Microsoft SC-900', img: 'assets/cert-sc900.png', date: '2025.12', issuer: 'Microsoft' },
  { name: '한국사 1급', img: 'assets/cert-korean-history.png', date: '2017.02', issuer: '국사편찬위원회' },
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
    desc: '총 1,200시간. 리눅스/윈도우 서버 구축, Docker 컨테이너 인프라 실습, 네트워크/시스템 보안 관제 및 캡스톤 프로젝트 수행.',
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
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
            Professional <span className="text-primary-600">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-primary-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-[2rem] p-10 shadow-glass border border-white/50 relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3 font-heading">
              <Icon icon="mdi:briefcase-check-outline" className="text-primary-600 text-3xl" />
              Career Path
            </h3>
            <div className="space-y-12 border-l-[3px] border-slate-100 pl-10 ml-3">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[51px] top-2 w-6 h-6 rounded-full bg-white border-[5px] border-primary-500 shadow-sm group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-extrabold text-slate-900 mb-1">{exp.company}</h4>
                  <p className="text-primary-700 font-bold text-sm mb-2">{exp.role}</p>
                  <p className="text-slate-400 text-xs font-mono mb-3 bg-slate-50 inline-block px-2 py-1 rounded">{exp.period}</p>
                  <p className="text-slate-600 text-base leading-relaxed break-keep">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white rounded-[2rem] p-10 shadow-glass border border-white/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-heading">
                <Icon icon="mdi:code-braces" className="text-primary-600 text-3xl" />
                Technical Arsenal
              </h3>
              <div className="relative flex overflow-x-hidden py-4 group">
                <div className="animate-marquee whitespace-nowrap flex gap-12 px-4">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 min-w-[80px]">
                      <Icon icon={tech.icon} className="text-6xl drop-shadow-sm filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" color={tech.color} />
                      <span className="text-xs font-bold text-slate-400 uppercase">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-10 text-white text-center shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <Icon icon="mdi:earth" className="text-primary-300 text-7xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-700" />
                <h3 className="text-2xl font-extrabold mb-4 font-heading">Global Communication</h3>
                <p className="text-slate-300 text-lg font-medium mb-6">USA (Sales) → Laos (PM) → Korea (Security)</p>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-primary-200">
                  English: Professional Working
                </div>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-heading">
            <Icon icon="mdi:certificate-outline" className="text-primary-600 text-3xl" /> Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-300 transition-all group relative"
              >
                <div className="aspect-[3/4] p-6 flex items-center justify-center bg-slate-50">
                  <img
                    src={getAssetPath(cert.img)}
                    alt={cert.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = '<span class="text-xs text-slate-400">Img Error</span>';
                    }}
                  />
                </div>
                <div className="p-4 bg-white text-center border-t border-slate-100">
                  <p className="text-xs font-extrabold text-slate-900 truncate">{cert.name}</p>
                  <p className="text-[10px] font-bold text-primary-600 mt-1">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm p-4" onClick={() => setSelectedCert(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 bg-slate-50 flex justify-center border-b border-slate-100">
                <img src={getAssetPath(selectedCert.img)} alt={selectedCert.name} className="h-40 object-contain" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150')} />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{selectedCert.name}</h3>
                <p className="text-primary-600 font-bold text-sm mb-6">{selectedCert.issuer}</p>
                <button onClick={() => setSelectedCert(null)} className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors">
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;

