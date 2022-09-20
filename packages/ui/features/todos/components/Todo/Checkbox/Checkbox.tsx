import { useState } from 'react';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { css } from '@emotion/react';
import { todosRepo } from '@acima/ui/features/todos/repos';
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

  const queryClient = useQueryClient();

  const mutation = useMutation(todosRepo.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  });

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
