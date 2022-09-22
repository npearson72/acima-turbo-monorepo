import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonHeader,
  IonIcon
} from '@ionic/react';
import { create } from 'ionicons/icons';

export const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Acima</IonTitle>
        <IonButtons slot="primary">
          <IonButton id="open-modal">
            <IonIcon slot="icon-only" icon={create} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
