import { useContext, useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem } from '@ionic/react';
import { Text } from '@mantine/core';
import { TodosQueryContext } from '@acima/ui-providers';

type Props = {
  dismissModal: () => void;
};

export const TodoAddForm = ({ dismissModal }: Props) => {
  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState(null);

  const { createTodoMutation } = useContext(TodosQueryContext);
  const { mutate: create, isError } = createTodoMutation;

  const addTodo = () => {
    if (value) {
      create(
        { title: value },
        {
          onError: (err: any) => {
            setErrorText(err.response.data.error.errors[0].message);
          },

          onSuccess: () => dismissModal()
        }
      );
    }
  };

  return (
    <IonContent>
      <IonItem>
        <IonInput
          value={value}
          type="text"
          placeholder="Title"
          onIonChange={e => setValue(e.detail.value!)}
          minlength={3}
          maxlength={100}
          required
          clearInput
        />
      </IonItem>
      {isError && <Text color="red">{errorText}</Text>}
      <IonButton
        type="submit"
        expand="block"
        style={{ marginTop: 20 }}
        onClick={addTodo}
      >
        Add
      </IonButton>
    </IonContent>
  );
};
