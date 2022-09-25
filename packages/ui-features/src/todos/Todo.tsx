import { useState, useContext } from 'react';
import { Checkbox, Group, Paper, Text } from '@mantine/core';
import { TodosQueryContext } from '@acima/ui-providers';
import { TodoDelete } from './TodoDelete';

type Props = {
  id: number;
  title: string;
  complete: boolean;
  currentTab: string;
};

export const Todo = ({ id, title, complete, currentTab }: Props) => {
  const [checked, setChecked] = useState(complete);
  const [hovering, setHovering] = useState(false);
  const { updateTodoMutation } = useContext(TodosQueryContext);

  const { mutate: mutateUpdate } = updateTodoMutation;

  const handleCheck = () => {
    setChecked(!checked);
    // Todos are moved to other tab once checked, so clear hovering state.
    setHovering(!hovering);
    mutateUpdate({ id, complete: !checked });
  };

  if (currentTab === 'available' && checked) return null;
  if (currentTab === 'complete' && !checked) return null;

  return (
    <Paper
      shadow="xs"
      p="sm"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Group position="apart" sx={{ height: '2rem' }}>
        <Checkbox
          value={id}
          checked={checked}
          label={<Text title={title}>{title}</Text>}
          onChange={handleCheck}
          onFocus={() => setHovering(true)}
          onBlur={() => setTimeout(() => setHovering(false), 0)}
        />
        <TodoDelete id={id} parentHovering={hovering} />
      </Group>
    </Paper>
  );
};
