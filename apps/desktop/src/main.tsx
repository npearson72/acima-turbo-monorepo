import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { themeSelector } from '@acima/ui-themes';
import { TodosQueryProvider } from '@acima/ui-providers';
import App from './App';

const theme = themeSelector('theme1');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      <TodosQueryProvider>
        <App />
      </TodosQueryProvider>
    </MantineProvider>
  </React.StrictMode>
);
