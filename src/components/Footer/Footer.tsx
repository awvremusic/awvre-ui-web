import React from 'react';
import { AWVRE_GREEN, AWVRE_TAG_IMAGE_URL } from '../../Constants';
import { FooterProps } from './Footer.types';
import { motion } from 'framer-motion';

export const Footer: React.FC<FooterProps> = ({
  children,
  animationDuration = 0.75,
  backgroundColor = AWVRE_GREEN,
  className = '',
  imageUrl = AWVRE_TAG_IMAGE_URL,
  style,
  ...other
}) => {
  return (
    <footer
      {...other}
      className={`awvre-footer ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '40vh',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <motion.div
        className="awvre-footer-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
          backgroundColor: backgroundColor,
          zIndex: -1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '60%',
          opacity: 0.3,
          margin: 'auto',
          transition: 'background-position 0.5s ease-in-out',
        }}
        animate={{
          backgroundPosition: '100% 0',
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <div
        className={`awvre-footer-background`}
        style={{
          backgroundColor: backgroundColor,
          zIndex: -2,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
      {children}
    </footer>
  );
};
