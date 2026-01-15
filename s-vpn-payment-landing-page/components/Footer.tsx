
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { ShieldCheck, Mail, Phone, MapPin, Printer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 md:pt-16 pb-8 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Logo & Slogan */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-[#E53935]" />
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white italic">S-VPN</span>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
              최첨단 암호화 기술과 2026년형 차세대 보안 프로토콜을 기반으로 당신의 온라인 활동을 보호합니다.
            </p>
            <div className="p-3 md:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1.5 md:space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Bank Info</p>
              <p className="text-xs md:text-sm font-medium text-white break-all leading-relaxed">{COMPANY_INFO.bankAccount}</p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-1 md:mb-2">Legal</h4>
            <a href="#" className="text-xs md:text-sm hover:text-[#E53935] transition-colors font-medium">이용약관</a>
            <a href="#" className="text-xs md:text-sm hover:text-[#E53935] transition-colors font-medium">개인정보 취급방침</a>
            <a href="#" className="text-xs md:text-sm hover:text-[#E53935] transition-colors font-medium">이메일 무단수집거부</a>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-1 md:mb-2">Company Info</h4>
              <div className="space-y-2.5 md:space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-slate-500 flex-shrink-0" />
                  <p className="text-xs md:text-sm leading-relaxed font-medium">{COMPANY_INFO.address}</p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 uppercase">대표</span>
                    <p className="text-xs md:text-sm font-medium">{COMPANY_INFO.representative}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 uppercase">사업자</span>
                    <p className="text-xs md:text-sm font-medium">{COMPANY_INFO.businessNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 uppercase">통신판매</span>
                  <p className="text-xs md:text-sm font-medium">{COMPANY_INFO.teleSalesNumber}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-1 md:mb-2">Connect</h4>
              <div className="space-y-2.5 md:space-y-3">
                <a href={`tel:${COMPANY_INFO.tel}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Phone className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E53935] transition-colors" />
                  <span className="text-xs md:text-sm font-medium">{COMPANY_INFO.tel}</span>
                </a>
                <div className="flex items-center gap-3">
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs md:text-sm font-medium">{COMPANY_INFO.fax}</span>
                </div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E53935] transition-colors" />
                  <span className="text-xs md:text-sm font-medium break-all">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-[10px] md:text-xs text-slate-500 font-bold leading-relaxed">{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
