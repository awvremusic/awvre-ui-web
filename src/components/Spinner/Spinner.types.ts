import { ForwardRefComponent, SVGMotionProps } from 'framer-motion';
import { SVGProps } from 'react';

export type SpinnerProps = {
  size?: number | string;
} & SVGProps<SVGSVGElement>;
