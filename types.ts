export enum VendorCategory {
  VENUE = 'Venue',
  PHOTOGRAPHY = 'Photography',
  MAKEUP = 'Makeup',
  MEHNDI = 'Mehndi',
  CATERING = 'Catering',
  DECOR = 'Decor',
}

export interface Vendor {
  id: string;
  name: string;
  category: VendorCategory;
  city: string;
  rating: number;
  reviewCount: number;
  priceStart: number;
  imageUrl: string;
  verified: boolean;
}

export interface BudgetPlan {
  totalBudget: string;
  allocation: {
    category: string;
    amount: string;
    tips: string;
  }[];
  summary: string;
}

export type GeminiStatus = 'idle' | 'loading' | 'success' | 'error';