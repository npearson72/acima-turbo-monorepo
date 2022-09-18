import { GlobalProvider } from '@ladle/react';
import { setupIonicReact } from '@ionic/react';
import { CustomProvider } from './support';
import './ionic.scss';

setupIonicReact();

export const Provider: GlobalProvider = ({ children }) => {
  return <CustomProvider>{children}</CustomProvider>;
};
