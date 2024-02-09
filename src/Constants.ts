import { AWVREThemeColorProperties, AWVREThemeProperties, AWVREThemeSpacingProperties } from "./types";

export const AWVRE_GREEN = '#42AF67';
export const AWVRE_DARKGREEN = "#10543B";
export const AWVRE_LIGHTGREEN = "#81E85C";
export const AWVRE_YELLOW = "#FAED41";
export const AWVRE_RED = "#D74D3C";
export const AWVRE_BLUE = "#419EFA";
export const AWVRE_PURPLE = "#AA41FA";
export const AWVRE_PINK = "#FA41B0";
export const AWVRE_ORANGE = "#FA7A41";
export const AWVRE_LIGHTGRAY = "#F7F7F7";
export const AWVRE_BLACK = "#161616";
export const AWVRE_TAG_IMAGE_URL =
  'https://media.graphassets.com/4ADfMh3Q0u78rXBAZoSe';

  export const AWVREDarkThemeColors: AWVREThemeColorProperties = {
    primaryColor: AWVRE_GREEN,
    secondaryColor: AWVRE_DARKGREEN,
    warningColor: AWVRE_YELLOW,
    errorColor: AWVRE_RED,
    successColor: AWVRE_GREEN,
    infoColor: AWVRE_BLUE,
    backgroundColor: AWVRE_BLACK,
    fontColor: AWVRE_LIGHTGRAY,
  }

  export const AWVRELightThemeColors: AWVREThemeColorProperties = {
    primaryColor: AWVRE_GREEN,
    secondaryColor: AWVRE_LIGHTGREEN,
    warningColor: AWVRE_YELLOW,
    errorColor: AWVRE_RED,
    successColor: AWVRE_GREEN,
    infoColor: AWVRE_BLUE,
    backgroundColor: `linear-gradient(180deg, ${AWVRE_LIGHTGRAY} 0%, #FFFFFF 100%)`,
    fontColor: AWVRE_BLACK,
  }

  export const AWVRESpacingProps: AWVREThemeSpacingProperties = {
    gap: {
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "2.5rem",
      xxl: "3rem",
      xxxl: "4rem",
    },
    borderRadius: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      xxl: "2rem",
      xxxl: "3rem",
      full: "9999px",
    },
}

export const AWVREFontProps = {
  fontFamily: "Arial, sans-serif",
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },
  fontWeights: {
    light: 300,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
}

export const AWVREDarkTheme: AWVREThemeProperties = {
  ...AWVREDarkThemeColors,
  ...AWVRESpacingProps,
  ...AWVREFontProps,
}

export const AWVRELightTheme: AWVREThemeProperties = {
  ...AWVRELightThemeColors,
  ...AWVRESpacingProps,
  ...AWVREFontProps,
}