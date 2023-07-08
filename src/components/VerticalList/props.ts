import {ReactNode} from "react";

export interface VerticalListProps {
  children?: ReactNode;
  style?: {
    aspectRatio?: number;
    weight?: number;
    width?: number;
    height?: number;
  };
  data?: any;
  custom?: {
    verticalAlignment?: 'top' | 'center' | 'bottom';
    horizontalAlignment?: 'left' | 'center' | 'right';
    interItemSpacing?: number | string;
    isScrollable?: boolean;
  };
  [key: string]: any;
}