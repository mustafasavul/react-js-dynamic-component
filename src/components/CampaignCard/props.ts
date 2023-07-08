import { CSSProperties } from 'react';

export interface ReviewsInfo {
  rating: number;
  count: number;
}

export interface PriceInfo {
  price: number;
  originalPrice?: number;
  finalPriceOnSale?: number;
  premiumPrice?: number;
}

export interface CampaignCardProps {
  title?: string;
  campaignType?: string;
  campaignText?: string;
  imageUrls?: string[];
  stock?: number;
  sku?: string;
  incentiveToBuyLabel?: string;
  valueAddedServiceLabel?: string;
  campaignLabel?: string;
  link?: string;
  status?: string;
  productName?: string;
  reviewsInfo?: ReviewsInfo;
  priceInfo?: PriceInfo;
  buttonText?: string;
  hasVariant?: boolean;
  productId?: string;
  style?: CSSProperties;
  variant?: string;
  custom?: any;
  [key: string]: any;
}
