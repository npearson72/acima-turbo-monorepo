import { Text } from '@mantine/core';
import { css } from '@emotion/react';

const style = css`
  &.checked {
    color: #999999;
  }
`;

interface Props {
  title: string;
  isChecked: boolean;
}
const CheckboxLabel: React.FC<Props> = ({ title, isChecked }) => {
  return (
    <Text size="md" css={style} className={`${isChecked ? 'checked' : ''}`}>
      {title}
    </Text>
  );
};

export { CheckboxLabel };
