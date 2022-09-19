import { Button, useMantineTheme } from '@mantine/core';
import { Icon } from '@iconify/react';
import { css } from '@emotion/react';

const AddTodoButton: React.FC = () => {
  const theme = useMantineTheme();

  const style = css`
    margin-bottom: 1rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;

    &:hover {
      background: ${theme.colors.blue[0]};
    }

    .mantine-Button-label {
      overflow: inherit;

      .icon {
        font-size: 1.3rem;
        margin-right: 10px;
      }

      .text {
        font-size: 0.9rem;
      }
    }
  `;

  return (
    <Button radius="xl" variant="white" css={style}>
      <Icon icon="ic:round-add-task" className="icon" />
      <div className="text">Add a todo</div>
    </Button>
  );
};

export { AddTodoButton };
