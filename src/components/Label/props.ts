import React from "react";

export interface Font {
  color?: string;
  name?: string;
  size?: number;
  decoration?: string[];
  weight?: string;
}

export interface Custom {
  htmlFormatted?: boolean;
  textAlignment?: string;
  font?: Font;
  numberOfLines?: number;
}

export interface Events {
  data?: {
    brandName?: string;
    url?: string;
  };
  [index: number]: {
    data?: {
      componentType?: string;
      id?: string;
      page_value?: string;
      pageType?: string;
    };
    name?: string;
    type?: string;
  };
}

export interface LabelProps {
  custom?: Custom;
  style?: React.CSSProperties;
  text?: string;
  events?: Events;
}