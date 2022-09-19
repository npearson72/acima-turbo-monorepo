import { useQuery } from '@tanstack/react-query';
import { todosRepo } from '../repos';
import { TodoList, AddTodoButton } from '../components';

const TodosView: React.FC = () => {
  const { isLoading, data } = useQuery(['todos'], todosRepo.getAll);

  return (
    <>
      <AddTodoButton />
      <TodoList isLoading={isLoading} data={data} />
    </>
  );
};

export { TodosView };
