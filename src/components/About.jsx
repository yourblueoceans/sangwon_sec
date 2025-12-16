import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

// 자격증 이미지 데이터
const certifications = [
  { name: '정보보안기사 (필기)', img: 'assets/cert-sc900.png' }, // 임시 매칭
  { name: '리눅스마스터 2급', img: 'assets/cert-linux.png' },
  { name: '네트워크관리사 2급', img: 'assets/cert-network.png' },
  { name: 'Cisco CCST', img: 'assets/cert-ccst.png' },
  { name: 'SC-900', img: 'assets/cert-sc900.png' },
  { name: '한국사 1급', img: 'assets/cert-korean-history.png' },
];

const techStack = [
  { icon: 'logos:aws', name: 'AWS' },
  { icon: 'logos:docker-icon', name: 'Docker' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:linux-tux', name: 'Linux' },
  { icon: 'logos:nginx', name: 'Nginx' },
  { icon: 'simple-icons:cisco', name: 'Cisco', color: '#1BA0D7' },
  { icon: 'logos:wireshark', name: 'Wireshark' },
  { icon: 'devicon:flask', name: 'Flask' },
  { icon: 'logos:elasticsearch', name: 'ELK' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header & Career Summary */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Professional <span className="text-teal-600">Journey</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-teal-500">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Icon icon="mdi:account-tie-voice" className="text-2xl text-teal-600" />
                From Sales to Security Specialist
              </h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                미국에서의 Sales 경험과 라오스에서의 PM 경험을 통해 비즈니스 커뮤니케이션 역량을 쌓았습니다.
                이후 보안 기술에 매료되어 1년간 1,400시간 이상의 몰입적인 학습을 통해
                실무에 즉시 투입 가능한 엔지니어링 역량을 확보했습니다.
              </p>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-800">대한항공 (미주본부)</span>
                  <span className="font-mono text-slate-500">2023.02 - 2023.09</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-800">Apotheco Pharmacy (USA)</span>
                  <span className="font-mono text-slate-500">2022.02 - 2023.02</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-teal-700">한국폴리텍대학 대전캠퍼스 (교육)</span>
                  <span className="font-mono text-teal-600">2025.03 - 2026.02</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 p-8 text-center text-white shadow-lg">
              <Icon icon="mdi:earth" className="mb-4 text-6xl text-teal-400" />
              <h3 className="mb-2 text-xl font-bold">Global Mindset</h3>
              <p className="text-sm text-slate-400">USA (Sales) → Laos (PM) → Korea (Security)</p>
              <div className="mt-6 rounded-full border border-teal-700 bg-teal-900/50 px-4 py-2 text-xs font-mono text-teal-300">
                English: Professional Working
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mb-20">
          <h3 className="mb-6 text-lg font-bold text-slate-900">Technical Arsenal</h3>
          <div className="group relative flex overflow-x-hidden rounded-2xl border border-slate-200 bg-white py-8 shadow-sm">
            <div className="animate-marquee flex whitespace-nowrap gap-16 px-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex min-w-[80px] flex-col items-center gap-2 grayscale transition-all duration-500 group-hover:grayscale-0"
                >
                  <Icon icon={tech.icon} className="text-5xl" color={tech.color} />
                  <span className="text-xs font-medium text-slate-500">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-slate-900">Certifications</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <img
                  src={getAssetPath(cert.img)}
                  alt={cert.name}
                  className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-900/80 p-2 text-center text-[10px] font-medium text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

