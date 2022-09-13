import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';

const Tab1: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar />
      </IonHeader>
      <IonContent>
        <h1>Todos - Mobile</h1>
        <button type="button" onClick={() => setCount(c => c + 1)}>
          count is {count}
        </button>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
