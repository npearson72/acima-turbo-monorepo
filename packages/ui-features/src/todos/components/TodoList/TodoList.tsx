import { Todo } from '../Todo';

interface Props {
  isLoading: boolean;
  data: Record<string, any>;
  story?: Record<string, any>;
}

const TodoList: React.FC<Props> = ({ isLoading, data, story }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="todo-list">
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} {...todo} story={story} />
      ))}
    </div>
  );
};

export { TodoList };
