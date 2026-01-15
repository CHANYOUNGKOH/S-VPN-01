
import { Plan, PaymentMethod, CompanyInfo } from './types';

export const COLORS = {
  PRIMARY: '#E53935', // S-VPN Red
  SECONDARY: '#1E293B', // Slate 800
};

export const SUBSCRIPTION_PLANS: Record<'monthly' | 'yearly', Plan[]> = {
  monthly: [
    {
      id: 'sub-basic-m',
      name: 'Basic',
      price: 9900,
      isFirstMonthFree: true,
      description: '첫 달 0원으로 시작하는 개인용 보안 플랜',
      features: ['기기 3대 동시 접속', '고속 보안 서버', '24/7 고객 지원']
    },
    {
      id: 'sub-plus-m',
      name: 'Plus',
      price: 12900,
      isRecommended: true,
      isFirstMonthFree: true,
      description: '첫 달 무료! 가장 많은 사용자가 선택하는 플랜',
      features: ['기기 8대 동시 접속', '최고속 전용 회선', '광고 차단 기능 포함', '우선 순위 지원']
    },
    {
      id: 'sub-team-m',
      name: 'Team',
      price: 24900,
      isFirstMonthFree: true,
      description: '팀 전체가 첫 달 무료로 경험하는 비즈니스 솔루션',
      features: ['기기 20대 동시 접속', '고정 IP 옵션', '중앙 관리 대시보드', '전담 매니저 배정']
    }
  ],
  yearly: [
    {
      id: 'sub-basic-y',
      name: 'Basic',
      price: 99000,
      isFirstMonthFree: true,
      description: '연간 구독으로 16% 절약 + 첫 달 무료 혜택',
      features: ['기기 3대 동시 접속', '고속 보안 서버', '24/7 고객 지원']
    },
    {
      id: 'sub-plus-y',
      name: 'Plus',
      price: 129000,
      isRecommended: true,
      isFirstMonthFree: true,
      description: '가장 경제적인 선택 + 첫 달 무료 혜택 제공',
      features: ['기기 8대 동시 접속', '최고속 전용 회선', '광고 차단 기능 포함', '우선 순위 지원']
    },
    {
      id: 'sub-team-y',
      name: 'Team',
      price: 249000,
      isFirstMonthFree: true,
      description: '비즈니스 전용 연간 솔루션 + 첫 달 무료 혜택',
      features: ['기기 20대 동시 접속', '고정 IP 옵션', '중앙 관리 대시보드', '전담 매니저 배정']
    }
  ]
};

export const FIXED_TERM_PLANS: Plan[] = [
  {
    id: 'fixed-1m',
    name: '1개월 기간권',
    price: 9000,
    isFirstMonthFree: true,
    description: '1개월 무료 증정! 자동 갱신 없이 깔끔하게',
    features: ['Plus 플랜 기능 제공', '1개월 무료 혜택 적용', '자동 결제 없음']
  },
  {
    id: 'fixed-6m',
    name: '6개월 기간권',
    price: 45000,
    isFirstMonthFree: true,
    description: '6개월권 구매 시 첫 달 무료 혜택 증정',
    features: ['Plus 플랜 기능 제공', '1개월 무료 혜택 적용', '추가 할인 혜택']
  },
  {
    id: 'fixed-12m',
    name: '12개월 기간권',
    price: 84000,
    isRecommended: true,
    isFirstMonthFree: true,
    description: '최장 기간 마스터 플랜 + 1개월 무료 증정',
    features: ['Plus 플랜 기능 제공', '1개월 무료 혜택 적용', '자동 결제 없음']
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'card', name: '신용/체크카드' },
  { id: 'kakao', name: '카카오페이' },
  { id: 'toss', name: '토스페이' },
  { id: 'naver', name: '네이버페이' },
  { id: 'bank', name: '무통장 입금' },
  { id: 'virtual', name: '가상계좌' }
];

export const COMPANY_INFO: CompanyInfo = {
  name: '씨케이커뮤니케이션 주식회사',
  businessNumber: '622-88-03300',
  teleSalesNumber: '제2024-인천연수구-3623호',
  address: '인천광역시 연수구 랜드마크로 110, 108동 3504호(송도동, 송도 오션파크 베르디움)',
  representative: '고우정',
  tel: '070-8211-2544',
  fax: '050-4218-0460',
  email: 'admin@s-vpn.kr',
  bankAccount: '우리은행 1005-704-713657 씨케이커뮤니케이션 주식회사',
  copyright: 'Copyright(c)씨케이커뮤니케이션 주식회사 all rights reserved.'
};
