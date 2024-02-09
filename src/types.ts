export interface AWVREThemeSpacingProperties {
    gap: {
        xs: string | number;
        sm: string | number;
        md: string | number;
        lg: string | number;
        xl: string | number;
        xxl: string | number;
        xxxl: string | number;
    }
    borderRadius: {
        xs: string | number;
        sm: string | number;
        md: string | number;
        lg: string | number;
        xl: string | number;
        xxl: string | number;
        xxxl: string | number;
        full: string | number;
    }
}

export interface AWVREThemeFontProperties {
    fontFamily: string;
    fontSizes: {
        xs: string | number;
        sm: string | number;
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
    primaryColor: string;
    secondaryColor: string;
    warningColor: string;
    errorColor: string;
    successColor: string;
    infoColor: string;
    backgroundColor: string;
    fontColor: string;
}


export interface AWVREThemeProperties extends AWVREThemeColorProperties, AWVREThemeFontProperties, AWVREThemeSpacingProperties {}