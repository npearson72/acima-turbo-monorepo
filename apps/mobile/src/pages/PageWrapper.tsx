import { RefObject } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../components';

interface Props {
  pageRef?: RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

export const PageWrapper = ({ pageRef, children }: Props) => {
  return (
    <IonPage style={{ textAlign: 'center' }} ref={pageRef}>
      <Header />
      <IonContent className="ion-padding">{children}</IonContent>
    </IonPage>
  );
};
