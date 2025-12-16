import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Trust Grid
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Sales에서 Security로, 끊임없이 확장해온 여정.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">From Sales to <span className="text-mint-600">Security Specialist</span></h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              미국에서의 Sales 경험과 라오스에서의 PM 경험을 통해 비즈니스 커뮤니케이션 역량을 쌓았습니다.
              이후 보안 기술에 매료되어 1년간 1,400시간 이상의 몰입적인 학습을 통해
              실무에 즉시 투입 가능한 엔지니어링 역량을 확보했습니다.
            </p>
            <ul className="space-y-2 text-sm text-slate-500 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint-500"></span>
                Global Experience: USA → Laos → Korea
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint-500"></span>
                Award: 2025 Capstone Design Award (Gold)
              </li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {['리눅스마스터 2급', '네트워크관리사 2급', 'SC-900', 'CCST Cybersecurity', '한국사 1급'].map((cert) => (
                <span key={cert} className="px-3 py-1 rounded-lg bg-mint-50 border border-mint-100 text-xs font-medium text-mint-800">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Tech Stack</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-mint-700 mb-3 uppercase tracking-wider">Security & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS KMS', 'EC2', 'IAM', 'Burp Suite', 'Wireshark'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wider">Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Cisco L3/L2', 'Firewall', 'Docker', 'Nginx', 'Linux'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

