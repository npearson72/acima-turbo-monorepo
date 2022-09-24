import { TodosQueryProvider } from '@acima/ui-providers';
import { TodoAddButton } from './TodoAddButton';

export default {
  title: 'Todos'
};

export const TodoStory = () => {
  return (
    <TodosQueryProvider>
      <TodoAddButton />
    </TodosQueryProvider>
  );
};

TodoStory.storyName = 'TodoAddButton';
