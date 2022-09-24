import { TodosQueryProvider } from '@acima/ui-providers';
import { TodoList } from './TodoList';

export default {
  title: 'Todos'
};

export const TodoListStory = () => {
  return (
    <TodosQueryProvider>
      <TodoList />
    </TodosQueryProvider>
  );
};

TodoListStory.storyName = 'TodoList';
