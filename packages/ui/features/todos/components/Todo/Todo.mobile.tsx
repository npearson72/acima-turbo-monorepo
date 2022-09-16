import { css } from '@emotion/react';
import { Icon } from '@iconify/react';
import {
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { Checkbox } from './Checkbox';

const style = css`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0px;

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  ion-item {
    ::part(native) {
      --border-style: none;
      height: 4em;
    }
  }

  .btn-delete {
    .icon {
      font-size: 1.7em;
    }

    .text {
      font-size: 0.8em;
    }
  }
`;

interface Props {
  id: number;
  title: string;
  isChecked: boolean;
  handleCheck: React.ChangeEventHandler<HTMLInputElement>;
}

const TodoMobile: React.FC<Props> = ({ id, title, isChecked, handleCheck }) => {
  return (
    <IonItemSliding css={style}>
      <IonItem>
        <Checkbox
          id={id}
          title={title}
          isChecked={isChecked}
          handleCheck={handleCheck}
        />
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger">
          <div className="btn-delete">
            <Icon icon="icons8:trash" className="icon" />
            <div className="text">Delete</div>
          </div>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default TodoMobile;
