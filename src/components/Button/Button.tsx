import React from 'react';
import { ButtonProps } from './Button.types';
import { AWVREThemeProperties } from '../../types';
import { styled } from 'styled-components';
import { useAWVRETheme } from '../AWVREProvider';

type StyledGridButtonProps = {
  $theme: AWVREThemeProperties;
};

const StyledGridButton = styled.button<StyledGridButtonProps>`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  gap: ${({ $theme }) => $theme.spacing.sm};
  justify-content: center;
  align-items: center;
  padding: ${({ $theme }) => $theme.spacing.md}
    ${({ $theme }) => $theme.spacing.sm};
  border-radius: ${({ $theme }) => $theme.borderRadius.sm};
  background-color: ${({ $theme }) => $theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  font-size: ${({ $theme }) => $theme.fontSizes.base};
  font-weight: ${({ $theme }) => $theme.fontWeights.semibold};
  font-family: ${({ $theme }) => $theme.fontFamily.sansSerif};

  * {
    font-size: inherit;
    font-weight: inherit;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${({ $theme }) => $theme.extraColors?.gray};
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  leftComponent,
  rightComponent,
  children,
  style,
  ...other
}) => {
  const { theme } = useAWVRETheme();
  return (
    <StyledGridButton
      $theme={theme}
      style={style}
      {...other}
      className={`awvre-button ${className ?? ''}`}
      onClick={onClick}
    >
      <span
        className="awvre-button_left-item"
        style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1 }}
      >
        {leftComponent}
      </span>
      <span
        className={`awvre-button_center-item`}
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 5,
          gridRowStart: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </span>
      <span
        className="awvre-button_right-item"
        style={{ gridColumnStart: 5, gridColumnEnd: 6, gridRowStart: 1 }}
      >
        {rightComponent}
      </span>
    </StyledGridButton>
  );
};
