
import React from 'react';
import { Check, Sparkles, Gift } from 'lucide-react';
import { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  isSelected: boolean;
  onSelect: (id: string) => void;
  billingCycle?: 'monthly' | 'yearly';
  isFixedTerm?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, onSelect, billingCycle, isFixedTerm }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const monthlyEquivalent = billingCycle === 'yearly' ? Math.floor(plan.price / 12) : plan.price;

  return (
    <div 
      onClick={() => onSelect(plan.id)}
      className={`relative cursor-pointer group transition-all duration-300 rounded-2xl border-2 p-5 md:p-6 flex flex-col h-full ${
        isSelected 
          ? 'border-[#E53935] bg-white shadow-xl ring-1 ring-[#E53935]' 
          : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
      }`}
    >
      {plan.isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E53935] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-lg z-10">
          Best Value
        </div>
      )}

      {plan.isFirstMonthFree && (
        <div className={`absolute top-2 right-2 flex items-center gap-1 ${isFixedTerm ? 'bg-red-100 text-[#E53935]' : 'bg-amber-100 text-amber-700'} px-2 py-0.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase animate-pulse`}>
          {isFixedTerm ? <Gift className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
          {isFixedTerm ? 'Gift' : 'Free'}
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#E53935] transition-colors">{plan.name}</h3>
        <p className="text-xs md:text-sm text-slate-500 mt-1 h-10 line-clamp-2 leading-snug">{plan.description}</p>
      </div>

      <div className="mb-6">
        {plan.isFirstMonthFree ? (
          <div>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-xl md:text-2xl font-extrabold text-slate-900 italic line-through opacity-30">₩{formatPrice(plan.price)}</span>
              <span className="text-2xl md:text-3xl font-extrabold text-[#E53935] italic">₩0</span>
              <span className="text-slate-400 text-xs md:text-sm font-medium">/{isFixedTerm ? '초기 결제' : '첫 달'}</span>
            </div>
            <p className="text-[10px] md:text-xs text-slate-400 mt-1 font-medium italic leading-tight">
              {isFixedTerm 
                ? `결제 시 ₩${formatPrice(plan.price)}가 청구되지 않고 무료 증정됩니다.` 
                : `이후 ₩${formatPrice(plan.price)}/${billingCycle === 'yearly' ? '년' : '월'} 자동 결제`}
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900 italic">₩{formatPrice(plan.price)}</span>
              <span className="text-slate-400 text-xs md:text-sm font-medium">/{billingCycle === 'yearly' ? '년' : '월'}</span>
            </div>
            {billingCycle === 'yearly' && (
              <p className="text-[#E53935] text-xs md:text-sm font-bold mt-1">월 환산 ₩{formatPrice(monthlyEquivalent)}</p>
            )}
          </div>
        )}
      </div>

      <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 leading-snug">
            <Check className={`w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-[#E53935]' : 'text-slate-400'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={`mt-auto w-full py-2.5 md:py-3 rounded-xl font-bold text-center text-sm md:text-base transition-all ${
        isSelected 
          ? 'bg-[#E53935] text-white' 
          : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
      }`}>
        {isSelected ? '선택됨' : '선택하기'}
      </div>
    </div>
  );
};

export default PlanCard;
