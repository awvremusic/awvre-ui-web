import { AWVREThemeProperties } from '../../types';

export interface AWVREProviderProps {
  children: React.ReactNode;
  initialThemeMode?: 'light' | 'dark' | 'system';
  customTheme?: {
    light: AWVREThemeProperties;
    dark?: AWVREThemeProperties;
  };
}
