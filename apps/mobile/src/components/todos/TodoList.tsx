import { useContext, useState } from 'react';
import { IonContent } from '@ionic/react';
import { TodosQueryContext } from '@acima/ui-providers';
import { TodoListEmpty, TodoListLoading } from '@acima/ui-features';
import { TodoListTabs } from './TodoListTabs';
import { Todo } from './Todo';

export const TodoList = () => {
  const [currentTab, setCurrentTab] = useState<string>('available');
  const { data, isLoading } = useContext(TodosQueryContext);

  if (isLoading) return <TodoListLoading />;
  if (data.todos.length < 1) return <TodoListEmpty />;

  return (
    <IonContent>
      <TodoListTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} currentTab={currentTab} {...todo} />
      ))}
    </IonContent>
  );
};
