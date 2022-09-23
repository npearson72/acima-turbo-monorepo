import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  IonCheckbox,
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonLabel
} from '@ionic/react';

export interface TodoProps {
  id: number;
  title: string;
  complete: boolean;
  updateTodoMutation: Record<string, any>;
  deleteTodoMutation: Record<string, any>;
}

export const Todo = ({
  id,
  title,
  complete,
  updateTodoMutation,
  deleteTodoMutation
}: TodoProps) => {
  const [checked, setChecked] = useState(complete);
  const { mutate: mutateUpdate } = updateTodoMutation;
  const { mutate: mutateDelete } = deleteTodoMutation;

  const handleCheck = () => {
    setChecked(!complete);
    mutateUpdate({ id, complete: !complete });
  };

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
