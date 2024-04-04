import { HTMLAttributes } from 'react';

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  animationDuration?: number;
  height?: string | number;
}
