import React from 'react';
import { styled } from 'styled-components';
import { ContainerProps } from './Container.types';
import { AWVREThemeProperties } from '../../types';
import { useAWVRETheme } from '../AWVREProvider';

type StyledContainerProps = ContainerProps & { $theme: AWVREThemeProperties };

const StyledContainer = styled.div<StyledContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ $theme }) => $theme.colors.container};
`;

export const Container = (props: ContainerProps) => {
  const { theme } = useAWVRETheme();
  return <StyledContainer {...props} $theme={theme} />;
};
