import { Icon } from '@iconify/react';
import { css } from '@emotion/react';

const style = css`
  font-size: 24px;
  color: #3880ff;

  &:active {
    color: #5391ff;
  }
`;

interface Props {
  setOpened: (value: boolean) => void;
}

const AddTodoButtonMobile: React.FC<Props> = ({ setOpened }) => {
  return (
    <Icon
      icon="ic:round-add-task"
      css={style}
      className="icon"
      onClick={() => setOpened(true)}
    />
  );
};

export default AddTodoButtonMobile;
