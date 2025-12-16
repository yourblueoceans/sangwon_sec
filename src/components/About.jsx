import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Trust Grid
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            비전공자의 한계를 1년 만에 캡스톤 금상으로 증명한 집요함.<br/>
            Sales에서 Security로, 끊임없이 확장해온 저의 여정입니다.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: Profile Summary */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-cyan-500/20"></div>
            <h3 className="text-2xl font-bold text-white mb-4">From Sales to Security Specialist</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              미국에서의 Sales 경험과 라오스에서의 PM 경험을 통해 비즈니스 커뮤니케이션 역량을 쌓았습니다.
              이후 보안 기술에 매료되어 1년간 1,400시간 이상의 몰입적인 학습과 프로젝트 수행을 통해
              실무에 즉시 투입 가능한 엔지니어링 역량을 확보했습니다.
            </p>
            <ul className="space-y-2 text-sm text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Global Experience: USA(Sales) → Laos(PM) → Korea(Security)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Award: 2025 Capstone Design Award (Gold)
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Certifications */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {['리눅스마스터 2급', '네트워크관리사 2급', 'SC-900', 'CCST Cybersecurity', '한국사 1급'].map((cert) => (
                <span key={cert} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Tech Stack */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 glass-panel rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Security & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS KMS', 'EC2', 'IAM', 'Burp Suite', 'Wireshark'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-cyan-950/50 text-cyan-200 text-xs rounded border border-cyan-500/20">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Cisco L3/L2', 'Firewall', 'Docker', 'Nginx', 'Linux (Ubuntu)'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-950/50 text-blue-200 text-xs rounded border border-blue-500/20">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">Dev & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'React', 'Git', 'ELK Stack'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-emerald-950/50 text-emerald-200 text-xs rounded border border-emerald-500/20">{tag}</span>
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

