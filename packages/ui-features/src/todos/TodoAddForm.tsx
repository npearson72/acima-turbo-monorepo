import { useContext, useMemo, useState } from 'react';
import { Box, Button, Group, Input } from '@mantine/core';
import { TodosQueryContext } from '@acima/ui-providers';

const randomLabel = () => {
  const texts = [
    'What needs doing?',
    'Add another one',
    'Got something to do?',
    'Baby steps...'
  ];

  const random = Math.floor(Math.random() * texts.length);

  return texts[random];
};

type Props = {
  setOpened: (value: boolean) => void;
};

export const TodoAddForm = ({ setOpened }: Props) => {
  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState(null);

  const { createTodoMutation } = useContext(TodosQueryContext);
  const { mutate: create, isError } = createTodoMutation;

  const label = useMemo(() => randomLabel(), []);

  const changeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      create(
        { title: value },
        {
          onError: (err: any) => {
            setErrorText(err.response.data.error.errors[0].message);
          },

          onSuccess: () => setOpened(false)
        }
      );
    }
  };

  const tryAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <Box>
      <Input.Wrapper label={label} mb="sm" error={errorText}>
        <Input
          variant="default"
          size="md"
          placeholder="Todo title"
          value={value}
          invalid={isError}
          onChange={changeTaskName}
          onKeyUp={tryAddTodo}
        />
      </Input.Wrapper>
      <Group position="right" spacing="sm">
        <Button size="sm" variant="light" onClick={() => setOpened(false)}>
          Cancel
        </Button>
        <Button size="sm" onClick={addTodo}>
          Add
        </Button>
      </Group>
    </Box>
  );
};
