import React from "react";

export interface CountdownProps {
  expireDate: number;
  title: string;
  style?: React.CSSProperties;
  boxColor?: string;
  textColor?: string;
  [key: string]: any;
}