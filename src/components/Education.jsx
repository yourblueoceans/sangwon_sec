import React from 'react';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const modules = [
  {
    title: 'System Infra & OS',
    icon: 'logos:linux-tux',
    desc: 'Linux/Windows Server 구축 및 핵심 서비스(Web, DB, DNS) 운영 관리',
    pdf: 'assets/edu-system.pdf',
  },
  {
    title: 'Network Engineering',
    icon: 'simple-icons:cisco',
    color: '#1BA0D7',
    desc: 'Cisco 장비 기반 네트워크 설계, 패킷 분석 및 트러블슈팅',
    pdf: 'assets/edu-network.pdf',
  },
  {
    title: 'Cloud Architecture',
    icon: 'logos:aws',
    desc: 'AWS 핵심 서비스 활용 및 고가용성 클라우드 인프라 설계',
    pdf: 'assets/edu-cloud.pdf',
  },
  {
    title: 'Information Security',
    icon: 'mdi:shield-lock',
    color: '#0D9488',
    desc: '시스템/네트워크 보안 설정, 취약점 진단 및 대응 실습',
    pdf: 'assets/edu-security.pdf',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-heading">
            Intensive <span className="text-primary-600">Training</span>
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed break-keep">
            한국폴리텍대학 하이테크 과정(1,200시간)을 통해
            <br className="hidden md:block" />
            엔지니어링에 필요한 <strong>탄탄한 이론과 실무 기초</strong>를 다졌습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <a
              key={idx}
              href={getAssetPath(mod.pdf)}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-100 hover-shimmer hover:-translate-y-2 transition-all group flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 transition-colors shadow-sm group-hover:shadow-md group-hover:scale-110 duration-300">
                <Icon icon={mod.icon} className="text-4xl drop-shadow-sm" color={mod.color} />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">{mod.title}</h4>
              <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium break-keep flex-grow">{mod.desc}</p>
              <span className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold group-hover:bg-primary-600 transition-all shadow-md">
                <Icon icon="mdi:file-pdf-box" className="text-lg" /> PDF 커리큘럼 보기
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

