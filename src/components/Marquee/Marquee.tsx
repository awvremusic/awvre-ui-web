import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { MarqueeProps } from './Marquee.types';

const slideMarqueeText = ($marqueWidth: number | string) => keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: ${`-${typeof $marqueWidth === 'number' ? `${$marqueWidth}px` : $marqueWidth}`};
  }
`;

const StyledMarqueeText = styled.div<{
  $marqueWidth: string | number;
  $marqueHeight: string | number;
  $duration: number;
}>`
  display: block;
  position: absolute;
  text-wrap: nowrap;
  animation: ${(props) => slideMarqueeText(props.$marqueWidth)}
    ${(props) => props.$duration}s linear infinite;
`;

const StyledMarqueeContainer = styled.div<{ $height: string | number }>`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height};
`;

export const Marquee: React.FC<MarqueeProps> = ({
  text = 'Default text',
  textColor = 'white',
  fontFamily = 'Arial',
  fontSize = '12pt',
  backgroundColor = 'black',
  fontWeight = 'bold',
  animationDuration,
  height = '30px',
  className = '',
  style = {},
  ...other
}) => {
  const [marqueeWidth, setMarqueeWidth] = React.useState<number | string>(0);
  const [marqueeHeight, setMarqueeHeight] = React.useState<number | string>(0);

  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const textWidth = getComputedStyle(ref.current).width;
      const textHeight = getComputedStyle(ref.current).height;

      setMarqueeWidth(textWidth);
      setMarqueeHeight(textHeight);
    }
  }, []);

  return (
    <StyledMarqueeContainer
      $height={marqueeHeight}
      className={`awvre-marquee marquee-parent ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        fontFamily,
        fontSize,
        fontWeight,
        ...style,
      }}
      {...other}
    >
      <StyledMarqueeText
        ref={ref}
        $marqueWidth={marqueeWidth}
        $marqueHeight={marqueeHeight}
        $duration={animationDuration ?? 10}
        className="marquee-child"
      >
        {text}
      </StyledMarqueeText>
    </StyledMarqueeContainer>
  );
};
