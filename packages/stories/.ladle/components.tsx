import { GlobalProvider } from '@ladle/react';
import { setupIonicReact } from '@ionic/react';
import { AppShell } from '@mantine/core';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from './support';

import './ionic.scss';

setupIonicReact();

const queryClient = new QueryClient();

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppShell>{children}</AppShell>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
