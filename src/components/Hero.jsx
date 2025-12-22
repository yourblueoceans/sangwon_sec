import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const BASE_PATH = import.meta.env.BASE_URL;
const getPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

// 인터랙티브 파티클 배경
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = 'rgba(14, 165, 233, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.min(window.innerWidth / 10, 80);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let j = index; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 - distance / 1200})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Hero = () => {
  return (
    <section id="profile" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-bg-main overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-800 text-xs font-bold mb-10 shadow-sm uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Profile & Philosophy
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 font-heading">
              <span className="block mb-4">다양한 현장의 경험을</span>
              <span className="relative inline-block mb-4">
                <span className="absolute inset-x-0 bottom-2 h-4 bg-primary-200/50 -z-10"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-blue-700">
                  단단한 보안 기술로
                </span>
              </span>
              <span className="block">연결합니다.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-700 text-lg lg:text-xl leading-loose space-y-8 break-keep font-bold"
          >
            <p>
              창업부터 해외 근무까지, 다양한 비즈니스 현장에서 몸으로 부딪히며 <span className="text-primary-600 border-b-2 border-primary-200">'문제 해결력'</span>과 <span className="text-primary-600 border-b-2 border-primary-200">'소통의 유연함'</span>을 길러왔습니다.
            </p>
            <p>
              이제는 그 경험 위에 <strong>1,200시간</strong>의 몰입적인 기술 교육을 더해, 시스템의 안정성을 지키는 <strong>보안 엔지니어</strong>로서 새로운 도전을 시작합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold text-base rounded-2xl hover:bg-primary-600 transition-all shadow-xl hover:-translate-y-1"
            >
              프로젝트 보기 <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={getPath('assets/resume.pdf')}
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold text-base rounded-2xl hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm"
            >
              <Icon icon="mdi:file-document-outline" /> 이력서
            </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex flex-col items-center"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 group hover:scale-[1.02] transition-transform duration-500 mb-8 glass-panel">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster={getPath('assets/profile/hero-profile.png')}
            >
              <source src={getPath('assets/profile/hero-profile.mp4')} type="video/mp4" />
            </video>
            <img
              src={getPath('assets/profile/hero-profile.png')}
              alt="Sangwon Suh"
              className="absolute inset-0 w-full h-full object-cover -z-10"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
          <div className="text-center bg-white/30 backdrop-blur-md p-4 rounded-3xl border border-white/40 shadow-sm">
            <h3 className="text-3xl font-black text-slate-900 font-heading tracking-tight">SANGWON SUH</h3>
            <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mt-2">Cloud & Infra Security Engineer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
