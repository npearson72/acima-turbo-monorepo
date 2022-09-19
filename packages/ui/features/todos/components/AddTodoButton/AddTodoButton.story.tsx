import type { Story } from '@ladle/react';
import { AddTodoButton } from '.';

export default {
  title: 'Features / Todos'
};

export const AddTodoButtonStory: Story<{ mobile: boolean }> = ({ mobile }) => {
  return <AddTodoButton story={{ mobile }} />;
};

AddTodoButtonStory.storyName = 'Add Todo Button';

AddTodoButtonStory.args = {
  mobile: false
};
