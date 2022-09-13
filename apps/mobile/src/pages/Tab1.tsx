import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import { CounterButton } from '@acima/ui/components';
import { css } from '@emotion/react';

const style = css`
  &::part(scroll) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar />
      </IonHeader>
      <IonContent css={style}>
        <CounterButton />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
