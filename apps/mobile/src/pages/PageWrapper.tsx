import { IonContent, IonPage } from '@ionic/react';
import { css } from '@emotion/react';
import { TheHeader } from '../components';

const style = css`
  ion-content {
    text-align: center;
  }
`;

interface Props {
  className?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <IonPage css={style} className={className}>
      <TheHeader />
      <IonContent>{children}</IonContent>
    </IonPage>
  );
};

export default PageWrapper;
