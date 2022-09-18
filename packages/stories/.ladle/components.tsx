import { GlobalProvider } from '@ladle/react';
import { setupIonicReact } from '@ionic/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from './support';
import './ionic.scss';

setupIonicReact();

const queryClient = new QueryClient();

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
