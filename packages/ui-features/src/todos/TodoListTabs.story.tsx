import { TodoListTabs } from './TodoListTabs';

export default {
  title: 'Todos'
};

export const TodoListTabsStory = () => {
  return (
    <TodoListTabs setCurrentTab={(params: string) => console.log(params)} />
  );
};

TodoListTabsStory.storyName = 'TodoListTabs';
