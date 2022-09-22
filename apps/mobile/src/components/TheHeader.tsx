import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import { AddTodoButton } from '@acima/ui-features';
import { usePlatform } from '@acima/ui-hooks';

const TheHeader: React.FC = () => {
  const platform = usePlatform();
  const { routeInfo } = useIonRouter();

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Acima</IonTitle>
        <IonButtons slot="primary">
          <IonButton fill="default">
            {platform === 'mobile' && routeInfo.pathname === '/todos' && (
              <AddTodoButton />
            )}
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default TheHeader;
