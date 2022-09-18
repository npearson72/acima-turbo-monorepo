import type { Story } from '@ladle/react';
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

export const TodoListStory: Story<{
  mobile: boolean;
}> = ({ mobile }) => {
  return (
    <TodoList>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} story={{ mobile }} />
      ))}
    </TodoList>
  );
};

TodoListStory.storyName = 'TodoList';

TodoListStory.args = {
  mobile: false
};
