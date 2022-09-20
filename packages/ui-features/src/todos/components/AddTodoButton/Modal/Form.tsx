import { useState } from 'react';
import { Input, Button } from '@mantine/core';
import { css } from '@emotion/react';
import { useTodosMutation } from '@acima/ui-hooks';

const style = css`
  .btn-bar {
    text-align: right;

    .btn-cancel {
      margin-right: 10px;
    }
  }
`;

interface Props {
  setOpened: (value: boolean) => void;
}

const Form: React.FC<Props> = ({ setOpened }) => {
  const [value, setValue] = useState('');
  const { mutation } = useTodosMutation('create') as any;

  const changeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      mutation.mutate({ title: value });
    }

    setOpened(false);
  };

  const tryAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div css={style}>
      <Input
        variant="default"
        size="md"
        mb="md"
        placeholder="Task name"
        value={value}
        onChange={changeTaskName}
        onKeyUp={tryAddTodo}
      />
      <div className="btn-bar">
        <Button
          size="sm"
          variant="white"
          className="btn-cancel"
          onClick={() => setOpened(false)}
        >
          Cancel
        </Button>
        <Button size="sm" onClick={addTodo}>
          Add todo
        </Button>
      </div>
    </div>
  );
};

export { Form };
