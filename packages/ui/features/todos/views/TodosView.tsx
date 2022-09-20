import { useTodosQuery } from '@acima/ui/hooks/requests';
import { TodoList, AddTodoButton } from '../components';

const TodosView: React.FC = () => {
  const { isLoading, data } = useTodosQuery();

  return (
    <>
      <AddTodoButton />
      <TodoList isLoading={isLoading} data={data} />
    </>
  );
};

export { TodosView };
