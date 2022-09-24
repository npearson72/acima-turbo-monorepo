import { TodoAddButton } from './TodoAddButton';

export default {
  title: 'Todos'
};

const props = {
  createTodoMutation: { mutate: (params: any) => console.log(params) }
};

export const TodoStory = () => {
  return <TodoAddButton {...props} />;
};

TodoStory.storyName = 'TodoAddButton';
