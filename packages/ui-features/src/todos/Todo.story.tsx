import { Todo } from './Todo';

export default {
  title: 'Todos'
};

const props = {
  id: 1,
  title: 'Example',
  complete: false,
  currentTab: 'n/a',
  updateTodoMutation: { mutate: (params: any) => console.log(params) },
  deleteTodoMutation: { mutate: (params: any) => console.log(params) }
};

export const TodoStory = () => {
  return <Todo {...props} />;
};

TodoStory.storyName = 'Todo';
