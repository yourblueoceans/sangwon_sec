import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const certifications = [
  { name: '정보보안기사 (필기)', img: 'assets/cert-sec-engineer.png', date: '2025.08 (예정)', issuer: 'KISA', desc: '정보보안 분야 최고 수준의 국가기술자격으로, 시스템/네트워크/애플리케이션 보안 이론 및 실무 능력을 입증합니다.' },
  { name: '리눅스마스터 2급', img: 'assets/cert-linux.jpg', date: '2025.10', issuer: 'KAIT', desc: 'Linux 시스템 관리 및 활용 능력을 평가하며, 서버 운영을 위한 필수적인 OS 이해도를 증명합니다.' },
  { name: '네트워크관리사 2급', img: 'assets/cert-network.jpg', date: '2025.07', issuer: 'ICQA', desc: '네트워크 인프라 전반에 대한 실무 능력을 인증합니다.' },
  { name: 'Cisco CCST', img: 'assets/cert-ccst.jpg', date: '2025.11', issuer: 'Cisco', desc: '보안 원칙, 네트워크/엔드포인트 보안의 기초를 다지는 글로벌 인증.' },
  { name: 'SC-900', img: 'assets/cert-sc900.jpg', date: '2025.12', issuer: 'Microsoft', desc: 'MS 클라우드 환경의 보안·규정 준수 기본 지식을 입증합니다.' },
  { name: '한국사 1급', img: 'assets/cert-korean-history.jpg', date: '2017.02', issuer: '국사편찬위원회', desc: '한국사 전반에 대한 심층 이해를 평가하는 최고 등급 자격.' },
  { name: 'TOEIC Speaking (IH)', img: 'assets/cert-toeic.jpg', date: '2024.09', issuer: 'ETS', desc: '비즈니스 영어 커뮤니케이션 능력을 검증하는 국제 공인 시험.' },
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
    company: '한국폴리텍대학 대전캠퍼스 (하이테크)',
    period: '2025.03 - 2026.02 (예정)',
    desc: 'AWS 클라우드 인프라 구축 및 보안 관제 실습, 캡스톤 프로젝트 팀장 수행',
  },
  {
    role: '해외 영업 및 운영 지원 (Intern)',
    company: '대한항공 (미주본부)',
    period: '2023.02 - 2023.09',
    desc: '미주 지역 항공 화물 데이터 분석 및 글로벌 커뮤니케이션 지원',
  },
  {
    role: 'Pharmacy Technician / PM',
    company: 'Apotheco Pharmacy (USA)',
    period: '2022.02 - 2023.02',
    desc: '미국 현지 약국 운영 프로세스 관리 및 고객 데이터 처리',
  },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6 font-heading">
            Professional <span className="text-primary-600">Journey</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:border-primary-200 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Icon icon="mdi:briefcase-outline" className="text-primary-600 text-2xl" />
                    Career History
                </h3>
                <div className="space-y-8 border-l-2 border-primary-100 pl-6 ml-2">
                    {experience.map((exp, idx) => (
                        <div key={idx} className="relative">
                            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary-500"></span>
                            <h4 className="text-lg font-bold text-slate-900">{exp.company}</h4>
                            <p className="text-primary-700 font-medium text-sm mb-1">{exp.role}</p>
                            <p className="text-slate-400 text-xs font-mono mb-2">{exp.period}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-slate-900 rounded-3xl p-8 text-white text-center shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <Icon icon="mdi:earth" className="text-primary-400 text-6xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Global Mindset</h3>
                        <p className="text-slate-400 text-sm">USA (Sales) → Laos (PM) → Korea (Security)</p>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Technical Arsenal</h3>
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee whitespace-nowrap flex gap-12">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 min-w-[60px] grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                                    <Icon icon={tech.icon} className="text-4xl" color={tech.color} />
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading flex items-center gap-2">
             <Icon icon="mdi:certificate-outline" className="text-primary-600" /> Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="aspect-[3/4] bg-slate-50 p-2 flex items-center justify-center overflow-hidden">
                    <img src={getAssetPath(cert.img)} alt={cert.name} className="w-full h-full object-contain transition-transform group-hover:scale-105" 
                         onError={(e) => e.currentTarget.src='https://via.placeholder.com/150?text=CERT'} />
                </div>
                <div className="p-3 bg-white border-t border-slate-100 text-center">
                    <p className="text-[10px] font-bold text-slate-800 truncate">{cert.name}</p>
                    <p className="text-[9px] text-slate-500">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <AnimatePresence>
        {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white p-2 rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={getAssetPath(selectedCert.img)} alt={selectedCert.name} className="w-full rounded-xl" onError={(e) => e.currentTarget.src='https://via.placeholder.com/300?text=CERT'} />
                    <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-slate-900">{selectedCert.name}</h3>
                        <p className="text-primary-600 font-medium">{selectedCert.issuer}</p>
                        <p className="text-slate-400 text-sm mt-1">{selectedCert.date}</p>
                        <p className="text-slate-600 text-sm mt-4">{selectedCert.desc}</p>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;

