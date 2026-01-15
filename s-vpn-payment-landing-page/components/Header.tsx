
import React from 'react';
import { ShieldCheck, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-[#E53935]" />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">S-VPN</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#E53935] transition-colors">내 지갑</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#E53935] transition-colors">고객지원</a>
          <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
            <Globe className="w-4 h-4" />
            KR
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-all">로그인</button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded-lg transition-all shadow-sm">무료 시작하기</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
