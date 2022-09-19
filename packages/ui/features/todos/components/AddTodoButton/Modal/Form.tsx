import { Input, Button } from '@mantine/core';
import { css } from '@emotion/react';

const style = css`
  .btn-bar {
    text-align: right;

    .btn-cancel {
      margin-right: 10px;
    }
  }
`;

const Form: React.FC = () => {
  return (
    <div css={style}>
      <Input variant="unstyled" size="md" placeholder="Task name" />
      <div className="btn-bar">
        <Button size="sm" variant="light" className="btn-cancel">
          Cancel
        </Button>
        <Button size="sm" className="btn-add-todo">
          Add todo
        </Button>
      </div>
    </div>
  );
};

export { Form };
