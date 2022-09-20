import { css } from '@emotion/react';
import { Icon } from '@iconify/react';
import {
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { useTodosMutation } from '@acima/ui-hooks';
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
    text-align: center;

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
  complete: boolean;
}

const TodoMobile: React.FC<Props> = props => {
  const { id } = props;
  const { mutation } = useTodosMutation('delete');

  const deleteTodo = () => {
    mutation.mutate({ id: Number(id) });
  };

  return (
    <IonItemSliding css={style}>
      <IonItem>
        <Checkbox {...props} />
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={deleteTodo}>
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
