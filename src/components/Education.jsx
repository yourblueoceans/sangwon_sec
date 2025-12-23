import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const BASE_PATH = import.meta.env.BASE_URL;
const getPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

const modules = [
  {
    title: 'System Infra & OS',
    icon: 'logos:linux-tux',
    desc: 'Ubuntu/Rocky Linux 서버 구축 및 핵심 서비스(Web, DB, DNS) 운영 관리 실습',
    pdf: 'assets/edu-system.pdf',
  },
  {
    title: 'Network Engineering',
    icon: 'simple-icons:cisco',
    color: '#1BA0D7',
    desc: 'Cisco 장비 기반의 네트워크 설계, 패킷 분석 및 트러블슈팅 능력 배양',
    pdf: 'assets/edu-network.pdf',
  },
  {
    title: 'Virtualization & Cloud',
    icon: 'logos:docker-icon',
    desc: 'Docker 컨테이너 인프라 구축 및 가상화 기술을 활용한 서버 리소스 효율화',
    pdf: 'assets/edu-cloud.pdf',
  },
  {
    title: 'Security Operations',
    icon: 'mdi:shield-lock',
    color: '#0D9488',
    desc: '시스템/네트워크 보안 설정(방화벽 등) 및 기본적인 취약점 진단 실습',
    pdf: 'assets/edu-security.pdf',
  },
];

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="education" className="py-20 md:py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 font-heading section-title-underline inline-block">
            Intensive <span className="text-primary-600">Education</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto break-keep leading-relaxed px-4">
            1,200시간의 고강도 훈련과 실무 중심의 프로젝트를 통해<br className="hidden md:block"/> 
            <strong>현업의 문제를 해결할 준비가 된 엔지니어</strong>로 성장했습니다.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <EduCard key={idx} mod={mod} />
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-4">
            {modules.map((mod, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <button 
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-center justify-between p-5 text-left"
                    >
                        <div className="flex items-center gap-4">
                            <Icon icon={mod.icon} className="text-2xl" color={mod.color || undefined} />
                            <span className="font-extrabold text-slate-900 text-lg">{mod.title}</span>
                        </div>
                        <Icon 
                            icon="mdi:chevron-down" 
                            className={`text-2xl text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
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
      className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:-translate-y-3 transition-all group flex flex-col items-center text-center relative overflow-hidden hover:shadow-2xl hover:border-primary-200"
    >
      <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary-50 transition-colors shadow-inner group-hover:scale-110 duration-300">
        <Icon icon={mod.icon} className="text-5xl drop-shadow-sm" color={mod.color} />
      </div>
      <h4 className="text-2xl font-extrabold text-slate-900 mb-4 font-heading leading-tight">{mod.title}</h4>
      <p className="text-base text-slate-500 mb-8 leading-relaxed font-medium break-keep flex-grow">{mod.desc}</p>
      
      <span className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold group-hover:bg-primary-600 transition-colors">
        <Icon icon="mdi:file-pdf-box" className="text-lg" /> 커리큘럼 보기
      </span>
    </a>
);

export default Education;
