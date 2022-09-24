import { useContext, useState } from 'react';
import {
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  SegmentChangeEventDetail
} from '@ionic/react';
import { TodoListEmpty, TodoListLoading } from '@acima/ui-features';
import { TodosQueryContext } from '@acima/ui-providers';
import { Todo } from './Todo';

type Tab = string | undefined;

export const TodoList = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('available');
  const { data, isLoading } = useContext(TodosQueryContext);

  const handleTabChange = (e: CustomEvent<SegmentChangeEventDetail>) => {
    setCurrentTab(e.detail.value);
  };

  if (isLoading) return <TodoListLoading />;
  if (data.todos.length < 1) return <TodoListEmpty />;

  return (
    <IonContent>
      <IonSegment onIonChange={handleTabChange} value={currentTab}>
        <IonSegmentButton value="available">
          <IonLabel>Active</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="complete">
          <IonLabel>Complete</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} currentTab={currentTab} {...todo} />
      ))}
    </IonContent>
  );
};
