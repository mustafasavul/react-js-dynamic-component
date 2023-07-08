import {ReactNode} from "react";

export interface HorizontalListProps {
  children?: ReactNode;
  style?: {
    aspectRatio?: number;
    weight?: number;
    width?: number;
    height?: number;
  };
  custom?: {
    verticalAlignment?: 'top' | 'center' | 'bottom';
    horizontalAlignment?: 'left' | 'center' | 'right';
    interItemSpacing?: number | string;
    isScrollable?: boolean;
  };
  [key: string]: any;
}