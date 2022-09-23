import { RefObject, useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/react';

interface Props {
  pageRef: RefObject<HTMLDivElement>;
  modalRef: RefObject<HTMLIonModalElement>;
  dismissModal: () => void;
  children: React.ReactNode;
}
export const Modal = ({ pageRef, modalRef, dismissModal, children }: Props) => {
  // eslint-disable-next-line
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(pageRef?.current);
  }, [pageRef]);

  return (
    <IonModal
      ref={modalRef}
      trigger="open-modal"
      presentingElement={presentingElement!}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Todo</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismissModal()}>Cancel</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{children}</IonContent>
    </IonModal>
  );
};
