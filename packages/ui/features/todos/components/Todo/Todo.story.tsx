import type { Story } from '@ladle/react';
import { Todo } from '.';

export default {
  title: 'Features / Todos'
};

const props = {
  id: 1,
  title: 'Example',
  complete: false
};

export const TodoStory: Story<{
  mobile: boolean;
}> = ({ mobile }) => {
  return <Todo {...props} story={{ mobile }} />;
};

TodoStory.storyName = 'Todo';

TodoStory.args = {
  mobile: false
};
