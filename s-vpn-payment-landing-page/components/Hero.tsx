
import React from 'react';
import { Lock, Shield, Zap, Star, Users, Award, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Spline Container */}
      <div className="absolute inset-0 z-0">
        {/* Stronger Masks for Readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-slate-50/60 z-10 lg:hidden backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 z-10" />
        
        <iframe 
          src='https://my.spline.design/40cryptocoinspackweb3library-xCNR1kxTaVEQ1a17qFMCcmZ3/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="S-VPN 3D Security Background"
          className="w-full h-full opacity-50 lg:opacity-100 scale-125 md:scale-110 pointer-events-auto"
        ></iframe>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-6 md:space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white shadow-xl border border-red-100 text-[#E53935] text-xs md:text-sm font-bold animate-bounce-subtle">
            <Award className="w-4 h-4" />
            🥇 대한민국 VPN 점유율 1위
          </div>
          
          <div className="bg-white/30 backdrop-blur-md p-4 md:p-6 rounded-3xl -ml-4 md:-ml-6 border border-white/50">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.2] md:leading-[1.1] drop-shadow-sm">
              당신의 온라인 자유,<br />
              <span className="text-[#E53935]">S-VPN</span>으로 완벽하게.
            </h1>
            
            <p className="text-base md:text-xl text-slate-800 mt-4 md:mt-6 max-w-xl leading-relaxed font-bold">
              어떤 기기에서도, 어떤 환경에서도 끊김 없는 속도와 철저한 익명성을 보장합니다.
            </p>
            <p className="text-sm md:text-base text-slate-600 mt-2 font-medium">지금 전 세계 100개국 이상의 보안 서버를 경험하세요.</p>
          </div>
          
          <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
            <button 
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-[#E53935] text-white font-bold rounded-2xl shadow-2xl shadow-red-500/40 hover:bg-[#D32F2F] hover:-translate-y-1 transition-all active:scale-95 text-sm md:text-base"
            >
              지금 시작하기 (첫 달 무료)
            </button>
            <button 
              className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-white/90 backdrop-blur-md text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm active:scale-95 text-sm md:text-base"
            >
              기능 자세히 보기
            </button>
          </div>

          {/* Trust Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-12">
            <div className="group flex items-center gap-4 p-4 md:p-5 bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all">
               <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center text-[#E53935]">
                 <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
               </div>
               <div>
                 <p className="text-lg md:text-2xl font-black text-slate-900 leading-none italic">4.9/5.0</p>
                 <p className="text-[10px] md:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">실제 사용자 평점</p>
               </div>
            </div>

            <div className="group flex items-center gap-4 p-4 md:p-5 bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all">
               <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center text-[#E53935]">
                 <Users className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <div>
                 <p className="text-lg md:text-2xl font-black text-slate-900 leading-none italic">3,842명</p>
                 <p className="text-[10px] md:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">오늘 한국인 연결 수</p>
               </div>
            </div>

            <div className="group flex items-center gap-4 p-4 md:p-5 bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
               <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center text-[#E53935]">
                 <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <div>
                 <p className="text-lg md:text-2xl font-black text-slate-900 leading-none italic">99.9%</p>
                 <p className="text-[10px] md:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">국내 업타임 보장</p>
               </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-500 font-medium italic animate-pulse">
             * 오늘 하루 3,842명의 한국인이 안전하게 연결되었습니다.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
