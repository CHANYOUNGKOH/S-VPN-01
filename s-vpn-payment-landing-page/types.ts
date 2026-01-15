
export enum PlanType {
  SUBSCRIPTION = 'subscription',
  FIXED_TERM = 'fixed_term'
}

export enum BillingCycle {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  isRecommended?: boolean;
  isFirstMonthFree?: boolean;
  features: string[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon?: string;
}

export interface CompanyInfo {
  name: string;
  businessNumber: string;
  teleSalesNumber: string;
  address: string;
  representative: string;
  tel: string;
  fax: string;
  email: string;
  bankAccount: string;
  copyright: string;
}
