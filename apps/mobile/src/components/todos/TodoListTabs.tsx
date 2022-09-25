import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  SegmentChangeEventDetail
} from '@ionic/react';

type Props = {
  currentTab: string;
  setCurrentTab: (value: string) => void;
};

export const TodoListTabs = ({ currentTab, setCurrentTab }: Props) => {
  const handleTabChange = (e: CustomEvent<SegmentChangeEventDetail>) => {
    setCurrentTab(e.detail.value || 'available');
  };

  return (
    <IonSegment onIonChange={handleTabChange} value={currentTab}>
      <IonSegmentButton value="available">
        <IonLabel>Active</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="complete">
        <IonLabel>Complete</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};
