import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const BASE_PATH = import.meta.env.BASE_URL;
const getPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

const schools = [
  {
    name: '한국폴리텍대학 대전캠퍼스',
    major: '클라우드 보안 엔지니어 과정',
    period: '2025.03 - 2026.02 (예정)',
    desc: 'AWS 클라우드 인프라 구축 및 정보보안 실무 집중 훈련 (1,200시간)',
    icon: 'mdi:school-outline',
    type: "Job Training",
  },
  {
    name: '대전대학교',
    major: "경영학과 (Business Administration)",
    period: '2007.03 - 2014.08 (졸업)',
    desc: '비즈니스 프로세스 이해 및 조직 관리 기초 역량 함양',
    icon: 'mdi:academic-cap-outline',
    type: "Bachelor's Degree",
  },
];

const modules = [
  { title: 'System Infra & OS', icon: 'logos:linux-tux', desc: 'Ubuntu/Rocky Linux 서버 구축 및 핵심 서비스(Web, DB, DNS) 운영 관리 실습', pdf: 'assets/edu-system.pdf' },
  { title: 'Network Engineering', icon: 'simple-icons:cisco', color: '#1BA0D7', desc: 'Cisco 장비 기반의 네트워크 설계, 패킷 분석 및 트러블슈팅 능력 배양', pdf: 'assets/edu-network.pdf' },
  { title: 'Virtualization & Cloud', icon: 'logos:docker-icon', desc: 'Docker 컨테이너 인프라 구축 및 가상화 기술을 활용한 서버 리소스 효율화', pdf: 'assets/edu-cloud.pdf' },
  { title: 'Security Operations', icon: 'mdi:shield-lock', color: '#0D9488', desc: '시스템/네트워크 보안 설정(방화벽 등) 및 기본적인 취약점 진단 실습', pdf: 'assets/edu-security.pdf' },
];

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="education" className="py-20 md:py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 font-heading section-title-underline inline-block break-keep leading-snug">
            Education & <span className="text-primary-600">Academic Background</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto break-keep leading-relaxed px-4">
            비즈니스 이해도를 갖춘 <span className="font-bold text-slate-900">경영학 학사</span> 역량 위에,<br className="hidden md:block"/> 
            1,200시간의 <span className="font-bold text-slate-900">클라우드 보안 전문 기술</span>을 더했습니다.
          </p>
        </div>

        {/* Academic & Training Institutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-24">
          {schools.map((school, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary-300 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon icon={school.icon} className="text-9xl text-slate-400" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${school.type.includes('Degree') ? 'bg-blue-50 text-blue-600' : 'bg-teal-50 text-teal-600'}`}>
                    {school.type}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner group-hover:bg-primary-50 transition-colors">
                    <Icon icon={school.icon} className="text-2xl text-slate-400 group-hover:text-primary-500 transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-1 break-keep leading-tight">{school.name}</h3>
                <p className="text-primary-600 font-bold text-sm mb-4 break-keep">{school.major}</p>

                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-4 break-keep">
                  <Icon icon="mdi:calendar-clock" />
                  {school.period}
                </div>

                <hr className="border-slate-100 my-4" />
                <p className="text-slate-600 text-sm font-medium leading-relaxed break-keep">
                  {school.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <span className="bg-slate-100 px-4 py-1 rounded-full text-slate-500 font-bold text-xs uppercase tracking-widest">
            Detailed Curriculum Modules
          </span>
        </div>

        {/* Modules */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <EduCard key={idx} mod={mod} />
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <Icon icon={mod.icon} className="text-2xl" color={mod.color || undefined} />
                  <span className="font-extrabold text-slate-900 text-lg break-keep">{mod.title}</span>
                </div>
                <Icon icon="mdi:chevron-down" className={`text-2xl text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 mt-4 font-medium break-keep">
                        {mod.desc}
                      </p>
                      <a
                        href={getPath(mod.pdf)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-primary-600 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm"
                      >
                        <Icon icon="mdi:file-pdf-box" /> 커리큘럼 확인
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EduCard = ({ mod }) => (
  <a
    href={getPath(mod.pdf)}
    target="_blank"
    rel="noreferrer"
    className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-3 transition-all group flex flex-col items-center text-center relative overflow-hidden hover:shadow-2xl hover:border-primary-200"
  >
    <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 transition-colors shadow-inner group-hover:scale-110 duration-300">
      <Icon icon={mod.icon} className="text-4xl drop-shadow-sm" color={mod.color} />
    </div>
    <h4 className="text-xl font-extrabold text-slate-900 mb-4 font-heading leading-tight break-keep">{mod.title}</h4>
    <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium break-keep flex-grow">{mod.desc}</p>

    <span className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold group-hover:bg-primary-600 transition-colors relative overflow-hidden">
      <div className="animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="relative z-10 flex items-center gap-2">
        <Icon icon="mdi:file-pdf-box" className="text-base" /> 커리큘럼
      </span>
    </span>
  </a>
);

export default Education;
