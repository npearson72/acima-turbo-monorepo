import { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import {
  IonCheckbox,
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonLabel
} from '@ionic/react';
import { TodosQueryContext } from '@acima/ui-providers';

type Props = {
  id: number;
  title: string;
  complete: boolean;
  currentTab: string;
};

export const Todo = ({ id, title, complete, currentTab }: Props) => {
  const [checked, setChecked] = useState(complete);
  // eslint-disable-next-line operator-linebreak
  const { updateTodoMutation, deleteTodoMutation } =
    useContext(TodosQueryContext);

  const { mutate: mutateUpdate } = updateTodoMutation;
  const { mutate: mutateDelete } = deleteTodoMutation;

  const handleCheck = () => {
    setChecked(!checked);
    mutateUpdate({ id, complete: !checked });
  };

  if (currentTab === 'available' && checked) return null;
  if (currentTab === 'complete' && !checked) return null;

  return (
    <IonItemSliding>
      <IonItem button detailIcon="false" lines="full">
        <IonCheckbox slot="start" checked={checked} onClick={handleCheck} />
        <IonLabel>{title}</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={() => mutateDelete({ id })}>
          <Icon
            icon="icons8:trash"
            className="icon"
            style={{ fontSize: '1.5rem' }}
          />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
