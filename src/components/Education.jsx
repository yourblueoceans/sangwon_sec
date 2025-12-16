import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { getAssetPath } from '../utils/basePath';

// 7개 과목 전체 반영
const eduModules = [
  {
    id: 'cloud',
    title: 'Cloud Computing & Docker',
    icon: 'logos:docker-icon',
    summary: 'Docker 컨테이너 인프라 설계 및 IaC 기반 배포 자동화',
    details: [
      'Container Engineering: 이미지 관리 및 Dockerfile 최적화 (Multi-stage Build)',
      'Orchestration: Docker Compose를 활용한 다중 컨테이너(Web/DB) 일괄 배포',
      'Cloud Security: 책임 공유 모델 및 계층형 보안 아키텍처 설계',
      'Storage & Network: Volume/Bind Mount 영속성, Bridge 네트워크 구성',
    ],
    pdfUrl: 'assets/edu-cloud.pdf',
  },
  {
    id: 'vuln',
    title: 'Penetration Testing (Mock Hacking)',
    icon: 'mdi:ninja',
    color: '#DC2626',
    summary: 'Kali Linux 기반 공격 기법 실습 및 네트워크 취약점 분석',
    details: [
      'Information Gathering: Nmap 포트 스캔 및 배너 그래빙',
      'MITM: ARP/DNS Spoofing을 통한 중간자 공격',
      'Sniffing & Manipulation: Wireshark/Tcpdump 캡처 및 트래픽 조작',
      'Packet Analysis: Telnet 등 암호화되지 않은 프로토콜 취약점 검증',
    ],
    pdfUrl: 'assets/edu-vuln.pdf',
  },
  {
    id: 'net-sec',
    title: 'Network Security & Monitoring',
    icon: 'mdi:shield-search',
    color: '#059669',
    summary: 'Linux 방화벽 정책 수립 및 Zabbix 통합 모니터링',
    details: [
      'Firewall Policy: iptables 기본 정책 및 Stateful Inspection',
      'Traffic Control: TCP Flags 검사, Null/Xmas Scan 차단',
      'Monitoring: Zabbix 구축으로 CPU/Mem 장애 관제',
      'Availability: Stress 부하 테스트 및 임계치 알림',
    ],
    pdfUrl: 'assets/edu-network-sec.pdf',
  },
  {
    id: 'system',
    title: 'IT System Operation (Linux/Win)',
    icon: 'logos:linux-tux',
    summary: '이기종 서버 구축 및 핵심 네트워크 서비스 통합 운영',
    details: [
      'Server Infra: Ubuntu/Windows Server, RAID(0/1/5) 스토리지',
      'Network Services: DNS(Bind9), Mail(Sendmail), Web(LAMP), NFS',
      'Security Config: UFW 화이트리스트, SSH 보안 설정',
      'Automation: 사용자/권한 관리, Shell Scripting 자동화',
    ],
    pdfUrl: 'assets/edu-system.pdf',
  },
  {
    id: 'network',
    title: 'Network Operation Mgmt',
    icon: 'simple-icons:cisco',
    color: '#1BA0D7',
    summary: 'Cisco 장비 기반 네트워크 토폴로지 설계 및 트래픽 제어',
    details: [
      'Routing & Switching: 정적 라우팅, VLAN/Trunk 논리적 망분리',
      'Availability: STP 최적화로 루프 방지 및 안정성 확보',
      'Access Control: Standard/Extended ACL 패킷 필터링',
      'Architecture: OSI 7계층, DHCP Relay 등 인프라 서비스 구현',
    ],
    pdfUrl: 'assets/edu-network.pdf',
  },
  {
    id: 'db',
    title: 'Database System (SQL)',
    icon: 'logos:mysql',
    summary: 'RDBMS 데이터 모델링 및 SQL 쿼리 최적화',
    details: [
      'SQL: JOIN, Subquery, 집계 함수로 복합 조회',
      'Modeling: 정규화, PK/FK 설정으로 무결성 보장',
      'Schema: 테이블/뷰/인덱스 설계 및 관리',
      'CRUD: 대량 데이터 처리와 트랜잭션 관리 이해',
    ],
    pdfUrl: 'assets/edu-database.pdf',
  },
  {
    id: 'infosec',
    title: 'Information Security Theory',
    icon: 'mdi:lock-outline',
    color: '#4F46E5',
    summary: '정보보안 이론(CIA)과 암호학, 보안 거버넌스',
    details: [
      'Governance: 정보보호 5대 목표, 위험 관리, 책임추적성',
      'Cryptography: 대칭/공개키(RSA), 해시(SHA) 원리',
      'Threats: 악성코드, 사회공학, Covert Channel 이해',
      'Controls: 예방/탐지/교정 통제 및 법·관리 보안',
    ],
    pdfUrl: 'assets/edu-security.pdf',
  },
];

const Education = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <section id="education" className="py-24 relative bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4 font-heading">
                    Intensive <span className="text-primary-600">Training Modules</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    한국폴리텍대학 하이테크 과정(클라우드 보안 엔지니어)을 통해<br/>
                    총 7개 핵심 분야의 이론과 실무를 체계적으로 마스터했습니다.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {eduModules.map((mod) => (
                    <motion.div 
                        key={mod.id}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedModule(mod)}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-primary-400 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full blur-2xl -mr-12 -mt-12 transition-opacity opacity-0 group-hover:opacity-100"></div>

                        <div className="mb-5 p-3 rounded-xl bg-slate-50 w-14 h-14 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all z-10">
                            <Icon icon={mod.icon} className="text-3xl" color={mod.color} />
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading z-10 leading-tight">{mod.title}</h3>
                        <p className="text-slate-500 text-sm flex-grow leading-relaxed mb-4 z-10">{mod.summary}</p>
                        
                        <div className="flex items-center text-primary-600 font-bold text-xs gap-1 group-hover:gap-2 transition-all mt-auto">
                            View Curriculum <Icon icon="mdi:arrow-right" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <AnimatePresence>
            {selectedModule && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedModule(null)}
                        className="absolute inset-0"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden p-8 z-10"
                    >
                        <button onClick={() => setSelectedModule(null)} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
                            <Icon icon="mdi:close" className="text-xl" />
                        </button>

                        <div className="flex items-center gap-4 mb-6 pr-8">
                            <div className="p-3 rounded-full bg-slate-50 border border-slate-100">
                                <Icon icon={selectedModule.icon} className="text-3xl" color={selectedModule.color} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 font-heading">{selectedModule.title}</h3>
                        </div>
                        
                        <div className="mb-8">
                            <h4 className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-primary-100 pb-2">
                                <Icon icon="mdi:book-open-page-variant-outline" /> Key Learning Points
                            </h4>
                            <ul className="space-y-3">
                                {selectedModule.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
                                        <Icon icon="mdi:check-circle-outline" className="text-primary-500 mt-0.5 shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a 
                            href={getAssetPath(selectedModule.pdfUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Icon icon="mdi:file-pdf-box" className="text-xl" /> 
                            <span>Download Summary PDF</span>
                        </a>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </section>
  );
};

export default Education;

