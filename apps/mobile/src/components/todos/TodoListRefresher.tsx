import { useContext } from 'react';
import {
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail
} from '@ionic/react';
import { TodosQueryContext } from '@acima/ui-providers';

export const TodoListRefresher = () => {
  const { isLoading, refetch, remove } = useContext(TodosQueryContext);

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await refetch();

    if (!isLoading) {
      remove(); // Remove query from cache else mobile tabs don't update
      event.detail.complete();
    }
  };

  return (
    <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
      <IonRefresherContent />
    </IonRefresher>
  );
};
