import { useState } from 'react';
import {
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';
import { Todo, TodoProps } from './Todo';

interface TodoListProps {
  todos: Pick<TodoProps, 'id' | 'title' | 'complete'>[];
  updateTodoMutation: Record<string, any>;
  deleteTodoMutation: Record<string, any>;
}

export const TodoList = ({
  todos,
  updateTodoMutation,
  deleteTodoMutation
}: TodoListProps) => {
  const [currentTab, setCurrentTab] = useState('available');

  const handleTabChange = (e: any) => {
    setCurrentTab(e.detail.value);
  };

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
      {todos.map(todo => (
        <Todo
          key={todo.id}
          updateTodoMutation={updateTodoMutation}
          deleteTodoMutation={deleteTodoMutation}
          currentTab={currentTab}
          {...todo}
        />
      ))}
    </IonContent>
  );
};
