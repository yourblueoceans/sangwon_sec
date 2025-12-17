import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

const Intro = () => {
  useEffect(() => {
    // Unicorn Studio 스크립트 로드
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.body.appendChild(script);

      // 컴포넌트 언마운트 시 스크립트 제거 (선택사항)
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#0A0A0A] overflow-hidden">
      {/* Unicorn Studio Project Container */}
      {/* style을 width: 100%, height: 100vh로 변경하여 반응형으로 만듭니다 */}
      <div
        data-us-project="sJJdjuiSR1Pv4C1uZDK2"
        style={{ width: '100%', height: '100vh' }}
      ></div>

      {/* Scroll Down Indicator (오버레이) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-center z-10 animate-bounce">
        <p className="text-sm mb-2 font-mono tracking-widest">SCROLL DOWN</p>
        <Icon icon="mdi:chevron-down" className="text-3xl mx-auto" />
      </div>
    </section>
  );
};

export default Intro;
