import { TodoList, Todo } from './components';

const todos = [
  { id: 1, title: 'Eat', complete: false },
  { id: 2, title: 'Sleep', complete: false },
  { id: 3, title: 'Code', complete: false }
];

const Todos: React.FC = () => {
  return (
    <TodoList>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          complete={todo.complete}
        />
      ))}
    </TodoList>
  );
};

export { Todos };