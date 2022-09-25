import { TodoListTabs } from './TodoListTabs';

export default {
  title: 'Todos / Ionic'
};

export const TodoListTabsStory = () => {
  return (
    <TodoListTabs
      currentTab="available"
      setCurrentTab={(params: string) => console.log(params)}
    />
  );
};

TodoListTabsStory.storyName = 'TodoListTabs';
