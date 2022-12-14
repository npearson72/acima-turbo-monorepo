import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { themes, themeSelector } from '@acima/ui-themes';
import { SelectTheme } from './SelectTheme';

const themeIds = themes.map(theme => theme.other?.id);

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [themeId, setThemeId] = useState(themeIds[0]);

  useEffect(() => {
    // Prevent double renders on changes via HMR
    if (document.getElementById('theme-selector')) return;

    const ladleAside = document.getElementsByClassName('ladle-aside')[0];

    if (ladleAside) {
      const themeSelectorDiv = document.createElement('div');
      themeSelectorDiv.id = 'theme-selector';

      ladleAside.prepend(themeSelectorDiv);

      ReactDOM.createRoot(themeSelectorDiv).render(
        <React.StrictMode>
          <SelectTheme setThemeId={setThemeId} themes={themes} />
        </React.StrictMode>
      );
    }
  }, []);

  const theme = themeSelector(themeId);

  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      {children}
    </MantineProvider>
  );
};

export { ThemeProvider };
