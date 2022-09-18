import { Checkbox as MantineCheckbox } from '@mantine/core';
import { css } from '@emotion/react';
import { CheckboxLabel } from './CheckboxLabel';

const style = css`
  input {
    cursor: pointer;
  }
`;

interface Props {
  id: number;
  title: string;
  isChecked: boolean;
  handleCheck: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<Props> = ({ id, title, isChecked, handleCheck }) => {
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
