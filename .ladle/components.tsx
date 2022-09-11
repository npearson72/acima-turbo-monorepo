import { GlobalProvider } from '@ladle/react';
import { CustomProvider } from './support';

export const Provider: GlobalProvider = ({ children }) => {
  return <CustomProvider>{children}</CustomProvider>;
};
