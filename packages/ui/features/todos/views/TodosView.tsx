import { useQuery } from '@tanstack/react-query';
import { todosRepo } from '../repos';
import { TodoList, Todo } from '../components';

const TodosView: React.FC = () => {
  const { isLoading, data } = useQuery(['todos'], todosRepo.getAll);

  if (isLoading) return <div>Loading...</div>;

  return (
    <TodoList>
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </TodoList>
  );
};

export { TodosView };
