import React from 'react';
import { GridButtonProps } from './GridButton.types';
import { AWVREThemeProperties } from '../../types';
import { styled } from 'styled-components';
import { useAWVRETheme } from '../AWVREProvider';

type StyledGridButtonProps = {
  $theme: AWVREThemeProperties
}

export const StyledGridButton = styled.button<StyledGridButtonProps>`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: ${({ $theme }) => $theme.spacing.sm};
  justify-content: center;
  align-items: center;
  padding: ${({ $theme }) => $theme.spacing.sm} ${({ $theme }) => $theme.spacing.sm};
  border-radius: ${({ $theme }) => $theme.borderRadius.md};
  background-color: ${({ $theme }) => $theme.colors.primary};
  color: white;
  font-weight: ${({ $theme }) => $theme.fontWeights.bold};
  cursor: pointer;
  transition: all 0.3s;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${({ $theme }) => $theme.extraColors?.gray};
    cursor: not-allowed;
  }
`;

export const GridButton: React.FC<GridButtonProps> = ({
  onClick,
  className,
  leftComponent,
  rightComponent,
  children,
  ...other
}) => {
  const { theme } = useAWVRETheme();
  return (
    <StyledGridButton
      $theme={theme}
      {...other}
      className={`grid-button ${className ?? ''}`}
      onClick={onClick}
    >
      <span
      className="grid-button_left-item"
      style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1 }}>
        {leftComponent}
      </span>
      <span
        className={`grid-button_center-item`}
        style={{gridColumnStart: 2, gridColumnEnd: 5, gridRowStart: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
      >
        {children}
      </span>
      <span
        className='grid-button_right-item'
        style={{gridColumnStart: 5, gridColumnEnd: 6, gridRowStart: 1 }}>
        {rightComponent}
      </span>
    </StyledGridButton>
  );
};
