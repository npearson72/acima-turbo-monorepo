import { useTodosQuery, usePlatform } from '@acima/ui-hooks';
import { TodoList, AddTodoButton } from '../components';

const TodosView: React.FC = () => {
  const { isLoading, data } = useTodosQuery();
  const platform = usePlatform();

  return (
    <>
      {platform === 'web' && <AddTodoButton />}
      <TodoList isLoading={isLoading} data={data} />
    </>
  );
};

export { TodosView };
