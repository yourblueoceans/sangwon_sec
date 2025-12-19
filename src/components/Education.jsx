import React from 'react';
import { Icon } from '@iconify/react';

// 자동 경로 변수
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
  return (
    <section id="education" className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6 font-heading section-title-underline inline-block">
            Intensive <span className="text-primary-600">Education</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto break-keep leading-relaxed">
            1,200시간의 고강도 훈련을 통해 실무에 즉시 투입 가능한<br/> 
            <strong>핵심 인프라 기술</strong>을 체계적으로 학습했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <a
              key={idx}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
