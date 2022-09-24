import { TodoList } from './TodoList';

export default {
  title: 'Todos / Mobile'
};

const props = {
  todos: [
    {
      id: 1,
      title: 'Example 1',
      complete: false
    },
    {
      id: 2,
      title: 'Example 2',
      complete: false
    },
    {
      id: 3,
      title: 'Example 3',
      complete: false
    }
  ],
  updateTodoMutation: { mutate: (params: any) => console.log(params) },
  deleteTodoMutation: { mutate: (params: any) => console.log(params) }
};

export const TodoListStory = () => {
  return <TodoList {...props} />;
};

TodoListStory.storyName = 'TodoList';
