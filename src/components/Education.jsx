import React from 'react';
import { Icon } from '@iconify/react';

const modules = [
  {
    title: 'System Infra & OS',
    icon: 'logos:linux-tux',
    desc: 'Ubuntu/Rocky Linux 서버 구축 및 핵심 서비스(Web, DB, DNS) 운영 관리 실습',
    pdf: '/sangwon_sec/assets/edu-system.pdf',
  },
  {
    title: 'Network Engineering',
    icon: 'simple-icons:cisco',
    color: '#1BA0D7',
    desc: 'Cisco 장비 기반의 네트워크 설계, 패킷 분석 및 트러블슈팅 능력 배양',
    pdf: '/sangwon_sec/assets/edu-network.pdf',
  },
  {
    title: 'Virtualization & Cloud',
    icon: 'logos:docker-icon',
    desc: 'Docker 컨테이너 인프라 구축 및 가상화 기술을 활용한 서버 리소스 효율화',
    pdf: '/sangwon_sec/assets/edu-cloud.pdf',
  },
  {
    title: 'Security Operations',
    icon: 'mdi:shield-lock',
    color: '#0D9488',
    desc: '시스템/네트워크 보안 설정(방화벽 등) 및 기본적인 취약점 진단 실습',
    pdf: '/sangwon_sec/assets/edu-security.pdf',
  },
];

const Education = () => {
  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-heading">
            탄탄한 <span className="text-primary-600">기술적 기초</span>
          </h3>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed break-keep font-medium">
            한국폴리텍대학 하이테크 과정(1,200시간)을 통해,<br className="hidden md:block" />
            엔지니어로서 필요한 <strong>핵심 인프라 기술</strong>을 체계적으로 학습했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <a
              key={idx}
              href={mod.pdf}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-10 rounded-[2.5rem] shadow-premium border border-slate-100 hover-shimmer hover:-translate-y-3 transition-all group flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary-50 transition-colors shadow-inner group-hover:scale-110 duration-300">
                <Icon icon={mod.icon} className="text-5xl drop-shadow-sm" color={mod.color} />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-4 font-heading leading-tight">{mod.title}</h4>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium break-keep flex-grow">{mod.desc}</p>
              <span className="mt-auto inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white text-base font-bold group-hover:bg-primary-600 transition-all shadow-md">
                <Icon icon="mdi:file-pdf-box" className="text-xl" /> 커리큘럼 보기
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
