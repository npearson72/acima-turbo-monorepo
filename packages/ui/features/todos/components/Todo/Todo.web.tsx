import { useState } from 'react';
import { Paper, Group } from '@mantine/core';
import { css } from '@emotion/react';
import { Icon } from '@iconify/react';
import { Checkbox } from './Checkbox';

const style = css`
  border: 1px solid #dfdfdf;

  &:hover {
    background: #f9f9f9;
  }

  .icon-trash {
    color: #c5c5c5;
    cursor: pointer;
    display: none;
    font-size: 1.7rem;

    &.show {
      display: block;
    }

    &:hover {
      color: #a7a7a7;
    }
  }
`;

interface Props {
  id: number;
  title: string;
  isChecked: boolean;
  handleCheck: React.ChangeEventHandler<HTMLInputElement>;
}

const TodoWeb: React.FC<Props> = ({ id, title, isChecked, handleCheck }) => {
  const [showTrash, setShowTrash] = useState(false);

  const toggleTrash = () => {
    setShowTrash(!showTrash);
  };

  return (
    <Paper
      p="md"
      mb={-1}
      withBorder
      css={style}
      onMouseEnter={toggleTrash}
      onMouseLeave={toggleTrash}
    >
      <Group position="apart">
        <Checkbox
          id={id}
          title={title}
          isChecked={isChecked}
          handleCheck={handleCheck}
        />
        <Icon
          icon="icons8:trash"
          className={`icon-trash ${showTrash ? 'show' : ''}`}
        />
      </Group>
    </Paper>
  );
};

export default TodoWeb;
