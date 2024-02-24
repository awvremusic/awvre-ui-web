import React from 'react';
import { AWVREThemeProperties } from '../../types';
import { AWVREProviderProps } from './AWVREProvider.types';
import { AWVREDarkTheme, AWVRELightTheme } from '../../Constants';
import { usePrefersColorScheme } from '../../hooks';
import { createGlobalStyle, styled } from 'styled-components';

type AWVREThemeContextProperties = {
  theme: AWVREThemeProperties;
  mode: 'light' | 'dark' | 'system';
};

type AWVREThemeContextFunctions = {
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void;
};

const awvreThemeContext = React.createContext<
  (AWVREThemeContextProperties & AWVREThemeContextFunctions) | undefined
>(undefined);

const GlobalStyles = createGlobalStyle<{ $theme: AWVREThemeProperties }>`
  * {
    font-family: ${({ $theme }) => $theme.fontFamily.sansSerif};
    font-size: 10pt;
  }

  @media screen and (min-width: 768px) {
    * {
      font-size: 12pt;
    }
  }

  @media screen and (min-width: 1024px) {
    * {
      font-size: 14pt;
    }
  }

  @media screen and (min-width: 1440px) {
    * {
      font-size: 16pt;
    }
  }
`;

type StyledWrapperProps = {
  $theme: AWVREThemeProperties;
};

const StyledWrapper = styled.main<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  background: ${({ $theme }) => $theme.colors.background};
  color: ${({ $theme }) => $theme.colors.font};
`;

export const AWVREProvider: React.FC<AWVREProviderProps> = ({
  children,
  customTheme,
  initialThemeMode = 'system',
}) => {
  const userPreferredColorScheme = usePrefersColorScheme();
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark' | 'system'>(
    initialThemeMode === 'system' ? userPreferredColorScheme : 'light'
  );

  const lightTheme = customTheme?.light ?? AWVRELightTheme;
  const darkTheme =
    customTheme && !customTheme.dark ? lightTheme : AWVREDarkTheme;

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  React.useEffect(() => {
    if (document) {
      //Loads font from Google Fonts
      if (
        document.querySelector('.awvre-google-fonts-api-preconnect') === null
      ) {
        const googleApiLink = document.createElement('link');
        googleApiLink.href = 'https://fonts.googleapis.com';
        googleApiLink.rel = 'preconnect';
        googleApiLink.classList.add('awvre-google-fonts-api-preconnect');
        document.head.appendChild(googleApiLink);
      }

      if (
        document.querySelector('.awvre-google-fonts-static-preconnect') === null
      ) {
        const googleStaticLink = document.createElement('link');
        googleStaticLink.href = 'https://fonts.gstatic.com';
        googleStaticLink.rel = 'preconnect';
        googleStaticLink.crossOrigin = 'anonymous';
        googleStaticLink.classList.add('awvre-google-fonts-static-preconnect');
        document.head.appendChild(googleStaticLink);
      }

      if (document.querySelector('.awvre-google-fonts') === null) {
        const link = document.createElement('link');
        link.href =
          'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap';
        link.rel = 'stylesheet';
        link.classList.add('awvre-google-fonts');
        document.head.appendChild(link);
      }
    }
  }, []);

  return (
    <awvreThemeContext.Provider
      value={{
        theme,
        mode: themeMode,
        setThemeMode,
      }}
    >
      <GlobalStyles $theme={theme} />
      <StyledWrapper $theme={theme} className="awvre-wrapper">
        {children}
      </StyledWrapper>
    </awvreThemeContext.Provider>
  );
};

export function useAWVRETheme() {
  const context = React.useContext(awvreThemeContext);
  if (context === undefined) {
    throw new Error('This component must be used within an AWVREProvider');
  }

  return context;
}
