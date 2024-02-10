import React from 'react';
import { ExternalLinkProps } from './ExternalLink.types';

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  href,
  className = '',
  ...props
}) => {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`awvre-external-link ${className}`}
    >
      {children}
    </a>
  );
};
