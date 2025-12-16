import React from 'react';

const Timeline = () => {
  const events = [
    {
      period: '2025.10 - 2025.11',
      title: 'Project Leadership',
      role: 'Project Leader',
      desc: 'Practical Application & Awards',
    },
    {
      period: '2025.08 - 2025.11',
      title: 'Security Specialization',
      role: 'Cloud Security Course (Semester 2)',
      desc: 'Offensive Security & Monitoring (Network Security, Penetration Testing)',
    },
    {
      period: '2025.03 - 2025.07',
      title: 'Engineering Foundation',
      role: 'Cloud Security Course (Semester 1)',
      desc: 'Server, Network, DB, Cloud Fundamentals (Linux, Cisco, Docker)',
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Learning Journey</h2>
        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-white border-4 border-mint-500"></span>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <span className="text-sm font-mono text-mint-700 font-bold bg-mint-50 px-2 py-0.5 rounded">
                  {event.period}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider mt-1 md:mt-0">{event.role}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
              <p className="text-slate-600 leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

