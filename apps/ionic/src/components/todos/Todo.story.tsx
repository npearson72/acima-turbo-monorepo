import { TodosQueryProvider } from '@acima/ui-providers';
import { Todo } from './Todo';

export default {
  title: 'Todos / Ionic'
};

const props = {
  id: 1,
  title: 'Example',
  complete: false,
  currentTab: 'n/a'
};

export const TodoStory = () => {
  return (
    <TodosQueryProvider>
      <Todo {...props} />
    </TodosQueryProvider>
  );
};

TodoStory.storyName = 'Todo';
