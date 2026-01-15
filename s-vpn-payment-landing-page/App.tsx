
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanCard from './components/PlanCard';
import Footer from './components/Footer';
import { 
  PlanType, 
  BillingCycle, 
  Plan 
} from './types';
import { 
  SUBSCRIPTION_PLANS, 
  FIXED_TERM_PLANS, 
  PAYMENT_METHODS, 
  COMPANY_INFO 
} from './constants';
import { 
  Mail, 
  CheckCircle2, 
  ChevronDown, 
  CreditCard, 
  Smartphone, 
  Lock, 
  ArrowRight,
  AlertCircle,
  Gift,
  Wallet,
  Building,
  CreditCard as CardIcon
} from 'lucide-react';

const App: React.FC = () => {
  // State: Default to Subscription > Monthly
  const [activeTab, setActiveTab] = useState<PlanType>(PlanType.SUBSCRIPTION);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(BillingCycle.MONTHLY);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('sub-plus-m');
  const [email, setEmail] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card');
  const [expandedPayment, setExpandedPayment] = useState<string | null>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Derived Data
  const currentPlans = useMemo(() => {
    if (activeTab === PlanType.SUBSCRIPTION) {
      return SUBSCRIPTION_PLANS[billingCycle];
    }
    return FIXED_TERM_PLANS;
  }, [activeTab, billingCycle]);

  const selectedPlan = useMemo(() => {
    return [...SUBSCRIPTION_PLANS.monthly, ...SUBSCRIPTION_PLANS.yearly, ...FIXED_TERM_PLANS].find(p => p.id === selectedPlanId);
  }, [selectedPlanId]);

  const finalAmount = useMemo(() => {
    if (!selectedPlan) return 0;
    return selectedPlan.isFirstMonthFree ? 0 : selectedPlan.price;
  }, [selectedPlan]);

  // Effects
  useEffect(() => {
    // Select default recommended plan when switching tabs
    const recommended = currentPlans.find(p => p.isRecommended) || currentPlans[0];
    setSelectedPlanId(recommended.id);
  }, [activeTab, billingCycle, currentPlans]);

  // Handlers
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    const payload = {
      plan: selectedPlan,
      email,
      paymentMethod: selectedPaymentMethod,
      timestamp: new Date().toISOString(),
      actualChargeAmount: finalAmount,
      recurringAmount: selectedPlan?.price
    };

    console.log('Payment Payload:', payload);

    setTimeout(() => {
      alert(`[결제 요청 완료]\n\n플랜: ${selectedPlan?.name}\n이메일: ${email}\n결제수단: ${selectedPaymentMethod}\n금액: ₩${new Intl.NumberFormat('ko-KR').format(finalAmount)}${selectedPlan?.isFirstMonthFree ? ' (무료 혜택 적용됨)' : ''}`);
      setIsSubmitting(false);
    }, 1500);
  };

  const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR').format(price);

  const getPaymentIcon = (id: string) => {
    switch(id) {
      case 'card': return <CardIcon className="w-5 h-5 text-slate-600" />;
      case 'kakao': return <div className="w-6 h-6 rounded-md bg-[#FEE500] flex items-center justify-center text-[8px] font-black text-[#3C1E1E]">PAY</div>;
      case 'toss': return <div className="w-6 h-6 rounded-md bg-[#0050FF] flex items-center justify-center text-[8px] font-black text-white">Toss</div>;
      case 'naver': return <div className="w-6 h-6 rounded-md bg-[#03C75A] flex items-center justify-center text-[10px] font-black text-white">N</div>;
      case 'bank': return <Building className="w-5 h-5 text-slate-600" />;
      case 'virtual': return <Wallet className="w-5 h-5 text-slate-600" />;
      default: return <CreditCard className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Step 1: Plan Selection */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4" id="plans">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E53935] text-white font-bold italic text-sm md:text-base">1</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">플랜 선택</h2>
          </div>

          {/* Plan Tabs */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="flex p-1 bg-slate-200 rounded-xl mb-6 md:mb-8 w-full max-w-sm border border-slate-300">
              <button 
                onClick={() => setActiveTab(PlanType.SUBSCRIPTION)}
                className={`flex-1 py-2.5 md:py-3 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === PlanType.SUBSCRIPTION ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                정기 구독 (추천)
              </button>
              <button 
                onClick={() => setActiveTab(PlanType.FIXED_TERM)}
                className={`flex-1 py-2.5 md:py-3 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === PlanType.FIXED_TERM ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                기간권 (선불)
              </button>
            </div>

            {activeTab === PlanType.SUBSCRIPTION && (
              <div className="flex items-center gap-3 md:gap-4">
                <span className={`text-xs md:text-sm font-bold ${billingCycle === BillingCycle.MONTHLY ? 'text-slate-900' : 'text-slate-400'}`}>월간 결제</span>
                <button 
                  onClick={() => setBillingCycle(billingCycle === BillingCycle.MONTHLY ? BillingCycle.YEARLY : BillingCycle.MONTHLY)}
                  className="relative w-12 md:w-14 h-6 md:h-7 bg-slate-900 rounded-full p-1 transition-all"
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transition-all ${billingCycle === BillingCycle.YEARLY ? 'translate-x-6 md:translate-x-7' : 'translate-x-0'}`} />
                </button>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className={`text-xs md:text-sm font-bold ${billingCycle === BillingCycle.YEARLY ? 'text-slate-900' : 'text-slate-400'}`}>연간 결제</span>
                  <span className="text-[8px] md:text-[10px] font-black bg-green-500 text-white px-1.5 md:px-2 py-0.5 rounded-full uppercase shadow-sm whitespace-nowrap">Save 16% + Bonus</span>
                </div>
              </div>
            )}
            
            {activeTab === PlanType.FIXED_TERM && (
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-xs md:text-sm font-medium text-slate-500 italic px-4">
                  * 모든 상품에 <span className="text-[#E53935] font-bold">1개월 무료 증정</span> 혜택이 포함됩니다.
                </p>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full border border-red-100">
                  <Gift className="w-3 h-3 text-[#E53935]" />
                  <span className="text-[8px] md:text-[10px] font-bold text-[#E53935] uppercase tracking-wider">EVENT: +1 Month Gift</span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {currentPlans.map((plan) => (
              <PlanCard 
                key={plan.id}
                plan={plan}
                isSelected={selectedPlanId === plan.id}
                onSelect={setSelectedPlanId}
                billingCycle={activeTab === PlanType.SUBSCRIPTION ? billingCycle : undefined}
                isFixedTerm={activeTab === PlanType.FIXED_TERM}
              />
            ))}
          </div>
        </section>

        {/* Step 2 & 3 & Summary Container */}
        <section className="bg-white border-t border-slate-200 py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
            
            {/* Left Column: Input Sections */}
            <div className="lg:col-span-8 space-y-10 md:space-y-12">
              
              {/* Step 2: Email */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E53935] text-white font-bold italic text-sm md:text-base">2</span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">이메일 입력</h2>
                </div>
                <div className="relative max-w-xl">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@s-vpn.kr"
                    className="w-full h-12 md:h-14 pl-12 pr-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-[#E53935] focus:ring-0 focus:outline-none transition-all text-base md:text-lg font-medium"
                  />
                  <p className="mt-2 md:mt-3 text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    구독 정보 확인용 이메일을 입력해주세요. 
                  </p>
                </div>
              </div>

              {/* Step 3: Payment Method */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E53935] text-white font-bold italic text-sm md:text-base">3</span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">결제 수단 선택</h2>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {PAYMENT_METHODS.map((method) => {
                    const isExpanded = expandedPayment === method.id;
                    return (
                      <div key={method.id} className={`border-2 rounded-xl md:rounded-2xl overflow-hidden transition-all ${isExpanded ? 'border-[#E53935] bg-red-50/10' : 'border-slate-100 hover:border-slate-200'}`}>
                        <button 
                          onClick={() => {
                            setExpandedPayment(isExpanded ? null : method.id);
                            setSelectedPaymentMethod(method.id);
                          }}
                          className="w-full flex items-center justify-between p-4 md:p-5 bg-white text-left"
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPaymentMethod === method.id ? 'border-[#E53935] bg-[#E53935]' : 'border-slate-300'}`}>
                              {selectedPaymentMethod === method.id && <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />}
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                              {getPaymentIcon(method.id)}
                              <span className="font-bold text-slate-900 text-sm md:text-base">{method.name}</span>
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 animate-fade-in">
                            {method.id === 'card' && (
                              <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md">
                                <div className="col-span-2">
                                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">카드 번호</label>
                                  <div className="h-10 bg-white border border-slate-200 rounded-lg px-3 flex items-center text-slate-300 italic text-xs md:text-sm">0000 0000 0000 0000</div>
                                </div>
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">만료일</label>
                                  <div className="h-10 bg-white border border-slate-200 rounded-lg px-3 flex items-center text-slate-300 italic text-xs md:text-sm">MM/YY</div>
                                </div>
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">CVC</label>
                                  <div className="h-10 bg-white border border-slate-200 rounded-lg px-3 flex items-center text-slate-300 italic text-xs md:text-sm">000</div>
                                </div>
                              </div>
                            )}
                            {method.id === 'bank' && (
                              <div className="space-y-3 md:space-y-4">
                                <div className="p-3 md:p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">입금 계좌</p>
                                  <p className="font-bold text-slate-900 text-sm md:text-base">{COMPANY_INFO.bankAccount}</p>
                                </div>
                              </div>
                            )}
                            {method.id !== 'card' && method.id !== 'bank' && (
                              <div className="flex flex-col items-center gap-2 py-2">
                                <p className="text-xs md:text-sm font-medium text-slate-500 text-center">결제 진행 시 간편결제 서비스로 연결됩니다.</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E53935]/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 flex items-center gap-2 italic">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#E53935]" />
                    주문 요약
                  </h3>
                  
                  <div className="space-y-4 mb-6 md:mb-8">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0">
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Plan</p>
                        <p className="font-bold text-base md:text-lg truncate">{selectedPlan?.name}</p>
                        <p className="text-xs text-slate-500">
                          {activeTab === PlanType.SUBSCRIPTION ? (billingCycle === BillingCycle.YEARLY ? '연간 구독' : '월간 구독') : '기간권 (선불)'}
                        </p>
                        {selectedPlan?.isFirstMonthFree && (
                           <div className="flex items-center gap-1 mt-1.5 text-amber-400 text-[10px] font-bold">
                             <Gift className="w-3 h-3" />
                             {activeTab === PlanType.FIXED_TERM ? '+1개월 선물 적용됨' : '첫 달 무료 적용됨'}
                           </div>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                         {selectedPlan?.isFirstMonthFree ? (
                           <>
                             <p className="font-bold text-base md:text-lg italic text-[#E53935]">₩0</p>
                             <p className="text-[10px] text-slate-500 line-through">₩{formatPrice(selectedPlan.price)}</p>
                           </>
                         ) : (
                           <p className="font-bold text-base md:text-lg italic">₩{formatPrice(selectedPlan?.price || 0)}</p>
                         )}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-800 space-y-2">
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-slate-400">부가세 (VAT)</span>
                        <span className="text-slate-400 font-medium">포함</span>
                      </div>
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-slate-400">
                          {activeTab === PlanType.SUBSCRIPTION ? '다음 결제일' : '만료 예정일'}
                        </span>
                        <span className="text-[#E53935] font-bold italic">
                          {activeTab === PlanType.SUBSCRIPTION 
                            ? (billingCycle === BillingCycle.YEARLY ? '2027-01-28' : '2026-02-28') 
                            : (selectedPlanId === 'fixed-1m' ? '2026-03-28' : selectedPlanId === 'fixed-6m' ? '2026-08-28' : '2027-02-28')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 md:pt-6 border-t border-slate-800 mb-6 md:mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">오늘 결제 금액</span>
                      <span className="text-3xl md:text-4xl font-black text-white italic">₩{formatPrice(finalAmount)}</span>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    onClick={handlePaymentSubmit}
                    className="w-full py-4 md:py-5 bg-[#E53935] hover:bg-[#D32F2F] disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-black rounded-xl md:rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 md:gap-3 group text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {activeTab === PlanType.SUBSCRIPTION ? '구독 시작하기' : '기간권 구매하기'}
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-slate-200 space-y-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#E53935]">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs md:text-sm">보안 결제 시스템</h4>
                      <p className="text-[10px] md:text-xs text-slate-500">모든 정보는 안전하게 암호화됩니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
