import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import { css } from '@emotion/react';

const style = css`
  &::part(scroll) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const Tab2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar />
    </IonHeader>
    <IonContent css={style}>
      <h1>Progress</h1>
    </IonContent>
  </IonPage>
);

export default Tab2;
