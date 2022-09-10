import { GlobalProvider } from '@ladle/react';
import { useState, createContext } from 'react';
import { MantineProvider } from '@mantine/core';
import { themeSelector } from '@ui/src/themes';

export const ThemeContext = createContext((themeName: string): void => {});

export const Provider: GlobalProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('theme1');

  const theme = themeSelector(themeName);

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ThemeContext.Provider>
  );
};
