import {
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { Form } from './Form';

interface Props {
  opened: boolean;
  setOpened: (value: boolean) => void;
}

const ModalMobile: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <IonModal isOpen={opened}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add a Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Form setOpened={setOpened} />
      </IonContent>
    </IonModal>
  );
};

export default ModalMobile;
