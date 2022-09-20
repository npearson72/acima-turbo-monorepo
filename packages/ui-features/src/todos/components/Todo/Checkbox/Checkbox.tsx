import { useState } from 'react';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { css } from '@emotion/react';
import { useTodoMutation } from '@acima/ui-hooks';
import { CheckboxLabel } from './CheckboxLabel';

const style = css`
  input {
    cursor: pointer;
  }
`;

interface Props {
  id: number;
  title: string;
  complete: boolean;
}

const Checkbox: React.FC<Props> = ({ id, title, complete }) => {
  const [isChecked, setIsChecked] = useState(complete);
  const { mutation } = useTodoMutation('update');

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    setIsChecked(checked);

    mutation.mutate({ id, complete: checked });
  };

  return (
    <MantineCheckbox
      css={style}
      value={id}
      checked={isChecked}
      onChange={handleCheck}
      label={<CheckboxLabel title={title} isChecked={isChecked} />}
    />
  );
};

export { Checkbox };
