import React from 'react';
import styled from 'styled-components';
import { RichTextViewProps } from './RichTextViewProps';
import { useAWVRETheme } from '../AWVREProvider';
import { AWVREThemeProperties } from '../../types';

interface StyledRichTextDivProps {
  $customTheme: AWVREThemeProperties;
}

const RichTextDiv = styled.div<StyledRichTextDivProps>`
  & * {
    margin: 0;
    margin-bottom: ${({ $customTheme }) => $customTheme.spacing.md};
    font-weight: ${({ $customTheme }) => $customTheme.fontWeights.base};
  }

  & h1 {
    font-size: ${({ $customTheme }) => $customTheme.fontSizes.xxl};
    font-weight: ${({ $customTheme }) => $customTheme.fontWeights.bold};
    margin-top: ${({ $customTheme }) => $customTheme.spacing.xl};
  }

  & h2 {
    font-size: ${({ $customTheme }) => $customTheme.fontSizes.xl};
    font-weight: ${({ $customTheme }) => $customTheme.fontWeights.bold};
    margin-top: ${({ $customTheme }) => $customTheme.spacing.lg};
  }

  & h3 {
    font-size: ${({ $customTheme }) => $customTheme.fontSizes.lg};
    font-weight: ${({ $customTheme }) => $customTheme.fontWeights.bold};
    margin-top: ${({ $customTheme }) => $customTheme.spacing.md};
  }

  & a {
    color: ${({ $customTheme }) => $customTheme.colors.info};
    cusor: pointer;
  }
`;

export const RichTextView = (props: RichTextViewProps) => {
  const { innerHtml, className, ...other } = props;
  const { theme } = useAWVRETheme();

  return (
    <RichTextDiv
      $customTheme={theme}
      {...other}
      className={`awvre-rich-text-view ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
};
