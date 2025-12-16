import React from 'react';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

const modules = [
  {
    title: 'System Infra & OS',
    icon: 'logos:linux-tux',
    desc: 'Ubuntu/Rocky Linux 서버 구축 및 RAID 스토리지, 사용자 권한 관리 실습',
    pdf: 'assets/edu-system.pdf',
  },
  {
    title: 'Network Engineering',
    icon: 'simple-icons:cisco',
    color: '#1BA0D7',
    desc: 'Cisco 패킷 트레이서를 활용한 라우팅/스위칭 설계 및 트러블슈팅',
    pdf: 'assets/edu-network.pdf',
  },
  {
    title: 'Cloud & Virtualization',
    icon: 'logos:docker-icon',
    desc: 'Docker 컨테이너 인프라 구축, 가상화 기술 및 서버 리소스 효율화',
    pdf: 'assets/edu-cloud.pdf',
  },
  {
    title: 'Security Operations',
    icon: 'mdi:shield-lock',
    color: '#0D9488',
    desc: '시스템/네트워크 보안 설정(UFW, iptables) 및 취약점 진단 실습',
    pdf: 'assets/edu-security.pdf',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-4 font-heading">
            Intensive <span className="text-primary-600">Training</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed break-keep">
            한국폴리텍대학 하이테크 과정(1,200시간)을 통해
            <br />
            <strong>실무에 필요한 핵심 인프라 기술</strong>을 체계적으로 습득했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <a
              key={idx}
              href={getAssetPath(mod.pdf)}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-primary-400 hover:-translate-y-2 transition-all group flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 transition-colors shadow-inner">
                <Icon icon={mod.icon} className="text-4xl" color={mod.color} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 font-heading">{mod.title}</h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium break-keep flex-grow">{mod.desc}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-primary-600 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                View Curriculum <Icon icon="mdi:arrow-right" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

