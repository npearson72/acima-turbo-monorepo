import { TodoList } from '.';
import { Todo } from '../Todo';

export default {
  title: 'Features / Todos'
};

const todos = [
  { id: 1, title: 'Eat', complete: false },
  { id: 2, title: 'Sleep', complete: false },
  { id: 3, title: 'Code', complete: false }
];

export const TodoListStory = () => {
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

TodoListStory.storyName = 'TodoList';
