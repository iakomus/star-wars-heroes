/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { createContext, ReactElement, useContext, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeContextValue } from 'src/interfaces/ThemeContextValue';
import { themes } from '../styled-components/consts';

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => console.log('default'),
});

export const useTheme = (): ThemeContextValue => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
}: {
  children: ReactElement;
}): JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );
  const toggleTheme = () => {
    setTheme(prev => {
      const val = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', val);
      return val;
    });
  };
  const value: ThemeContextValue = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={themes[theme]}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
