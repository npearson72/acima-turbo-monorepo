import type { Story } from '@ladle/react';
import { TodoList } from '.';

export default {
  title: 'Features / Todos'
};

const data = {
  todos: [
    { id: 1, title: 'Eat', complete: false },
    { id: 2, title: 'Sleep', complete: false },
    { id: 3, title: 'Code', complete: false }
  ]
};

export const TodoListStory: Story<{
  isLoading: boolean;
  mobile: boolean;
}> = ({ isLoading, mobile }) => {
  return <TodoList isLoading={isLoading} data={data} story={{ mobile }} />;
};

TodoListStory.storyName = 'TodoList';

TodoListStory.args = {
  mobile: false,
  isLoading: false
};

export const TodoListEmpty = () => {
  return <TodoList isLoading={false} data={{ todos: [] }} />;
};

TodoListEmpty.storyName = 'TodoList Empty';
