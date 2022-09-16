import type { Story } from '@ladle/react';
import { Todo } from '..';

export default {
  title: 'Features / Todos'
};

export const TodoStory: Story<{
  title: string;
  complete: boolean;
}> = ({ title, complete }) => {
  return <Todo id={1} title={title} complete={complete} />;
};

TodoStory.storyName = 'Todo';

TodoStory.args = {
  title: 'Example todo',
  complete: false
};
