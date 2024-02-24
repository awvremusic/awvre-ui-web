import React from 'react';
import { TextProps } from './TextProps';
import { useAWVRETheme } from '../AWVREProvider';

export const Text = (props: TextProps) => {
  const { children, variant, ...other } = props;
  const { theme } = useAWVRETheme();

  let Component;
  switch (variant) {
    case 'h1':
      Component = {
        component: variant,
        style: {
          fontSize: theme.fontSizes.xxxl,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'h2':
      Component = {
        component: variant,
        style: {
          fontSize: theme.fontSizes.xxl,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'h3':
      Component = {
        component: variant,
        style: {
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'h4':
      Component = {
        component: variant,
        style: {
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'h5':
      Component = {
        component: variant,
        style: {
          fontSize: theme.fontSizes.md,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'h6':
      Component = {
        component: variant,
        style: {
          fontSize: theme.fontSizes.base,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'subtitle1':
      Component = {
        component: 'p',
        style: {
          fontSize: theme.fontSizes.sm,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'subtitle2':
      Component = {
        component: 'p',
        style: {
          fontSize: theme.fontSizes.xs,
          fontWeight: theme.fontWeights.bold,
        },
      };
      break;
    case 'body1':
      Component = {
        component: 'p',
        style: { fontSize: theme.fontSizes.base },
      };
      break;
    case 'body2':
      Component = {
        component: 'p',
        style: { fontSize: theme.fontSizes.sm },
      };
      break;
    default:
      Component = {
        component: 'p',
        style: { fontSize: theme.fontSizes.base },
      };
  }

  return React.createElement(Component.component, {
    children,
    style: {
      fontFamily: theme.fontFamily,
      ...Component.style,
      ...other.style,
    },
    className: `awvre-text ${other.className ?? ''}`,
    ...other,
  });
};
