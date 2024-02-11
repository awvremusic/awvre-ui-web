import {
  AWVREThemeColorProperties,
  AWVREThemeProperties,
  AWVREThemeSpacingProperties,
} from './types';

export const AWVRE_GREEN = '#42AF67';
export const AWVRE_DARKGREEN = '#10543B';
export const AWVRE_LIGHTGREEN = '#81E85C';
export const AWVRE_YELLOW = '#FAED41';
export const AWVRE_RED = '#D74D3C';
export const AWVRE_BLUE = '#419EFA';
export const AWVRE_PURPLE = '#AA41FA';
export const AWVRE_PINK = '#FA41B0';
export const AWVRE_ORANGE = '#FA7A41';
export const AWVRE_LIGHTGRAY = '#FAFAFA';
export const AWVRE_GRAY = '#F0F0F0';
export const AWVRE_DARKGRAY = '#202020';
export const AWVRE_BLACK = '#161616';
export const AWVRE_TEAL = '#41FABB';
export const AWVRE_TAG_IMAGE_URL =
  'https://media.graphassets.com/4ADfMh3Q0u78rXBAZoSe';

export const AWVREDarkThemeColors: AWVREThemeColorProperties = {
  colors: {
    primary: AWVRE_GREEN,
    secondary: AWVRE_DARKGREEN,
    warning: AWVRE_YELLOW,
    error: AWVRE_RED,
    success: AWVRE_GREEN,
    info: AWVRE_BLUE,
    background: AWVRE_BLACK,
    container: AWVRE_DARKGRAY,
    font: AWVRE_LIGHTGRAY,
  },
  extraColors: {
    purple: AWVRE_PURPLE,
    pink: AWVRE_PINK,
    orange: AWVRE_ORANGE,
    lightGray: AWVRE_LIGHTGRAY,
    gray: AWVRE_GRAY,
    black: AWVRE_BLACK,
    teal: AWVRE_TEAL,
  },
};

export const AWVRELightThemeColors: AWVREThemeColorProperties = {
  colors: {
    primary: AWVRE_GREEN,
    secondary: AWVRE_LIGHTGREEN,
    warning: AWVRE_YELLOW,
    error: AWVRE_RED,
    success: AWVRE_GREEN,
    info: AWVRE_BLUE,
    background: `linear-gradient(0deg, ${AWVRE_LIGHTGRAY} 0%, #FFFFFF 100%)`,
    container: '#FFFFFF',
    font: AWVRE_BLACK,
  },
  extraColors: {
    purple: AWVRE_PURPLE,
    pink: AWVRE_PINK,
    orange: AWVRE_ORANGE,
    lightGray: AWVRE_LIGHTGRAY,
    gray: AWVRE_GRAY,
    black: AWVRE_BLACK,
    teal: AWVRE_TEAL,
  },
};

export const AWVRESpacingProps: AWVREThemeSpacingProperties = {
  spacing: {
    xs: '0.15rem',
    sm: '0.25rem',
    md: '.5rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '2.5rem',
  },
  borderRadius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '2.5rem',
    full: '9999px',
  },
};

export const AWVREFontProps = {
  fontFamily: {
    sansSerif:
      'Noto Sans JP, Noto Sans, Inter, Roboto, Calibri, Arial, sans-serif',
    serif: 'Noto Serif, Times New Roman, Times, Georgia, serif',
    monospace: 'Noto Mono, Courier New, Courier, monospace',
  },
  fontSizes: {
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '2.5rem',
  },
  fontWeights: {
    light: 300,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
};

export const AWVREDarkTheme: AWVREThemeProperties = {
  ...AWVREDarkThemeColors,
  ...AWVRESpacingProps,
  ...AWVREFontProps,
};

export const AWVRELightTheme: AWVREThemeProperties = {
  ...AWVRELightThemeColors,
  ...AWVRESpacingProps,
  ...AWVREFontProps,
};

export enum MediaPlatform {
  SPOTIFY = 'spotify',
  APPLE_MUSIC = 'apple',
  SOUNDCLOUD = 'soundcloud',
  YOUTUBE = 'youtube',
  DISCORD = 'discord',
  THREADS = 'threads',
  LINKEDIN = 'linkedin',
  X = 'x',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  UNKNOWN = 'unknown',
}

export enum MusicType {
  ALBUM = 'Album',
  SINGLE = 'Single',
  EP = 'EP',
  MIXES = 'Mixes',
}

export enum ZodianSigns {
  ARIES = 'Aries',
  TAURUS = 'Taurus',
  GEMINI = 'Gemini',
  CANCER = 'Cancer',
  LEO = 'Leo',
  VIRGO = 'Virgo',
  LIBRA = 'Libra',
  SCORPIO = 'Scorpio',
  CAPRICORN = 'Capricorn',
  AQUARIUS = 'Aquarius',
  PISCES = 'Pisces',
  SAGITTARIUS = 'Sagittarius',
}
