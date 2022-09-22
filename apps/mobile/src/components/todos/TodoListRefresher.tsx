import {
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail
} from '@ionic/react';
import { useTodosQuery } from '@acima/ui-hooks';

export const TodoListRefresher = () => {
  const { isLoading, refetch } = useTodosQuery();

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await refetch();

    if (!isLoading) event.detail.complete();
  };

  return (
    <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
      <IonRefresherContent />
    </IonRefresher>
  );
};
