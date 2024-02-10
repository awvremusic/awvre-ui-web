export interface AWVREThemeSpacingProperties {
  spacing: {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    xxl: string | number;
    xxxl: string | number;
  };
  borderRadius: {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    xxl: string | number;
    xxxl: string | number;
    full: string | number;
  };
}

export interface AWVREThemeFontProperties {
  fontFamily: {
    sansSerif: string;
    serif: string;
    monospace: string;
  };
  fontSizes: {
    xs: string | number;
    sm: string | number;
    base: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    xxl: string | number;
    xxxl: string | number;
  };
  fontWeights: {
    light: string | number;
    base: string | number;
    medium: string | number;
    semibold: string | number;
    bold: string | number;
    black: string | number;
  };
}

export interface AWVREThemeColorProperties {
  colors: {
    primary: string;
    secondary: string;
    warning: string;
    error: string;
    success: string;
    info: string;
    background: string;
    font: string;
    container: string;
  };
  extraColors?: {
    purple: string;
    pink: string;
    teal: string;
    orange: string;
    lightGray: string;
    gray: string;
    black: string;
  };
}

export interface AWVREThemeProperties
  extends AWVREThemeColorProperties,
    AWVREThemeFontProperties,
    AWVREThemeSpacingProperties {}
