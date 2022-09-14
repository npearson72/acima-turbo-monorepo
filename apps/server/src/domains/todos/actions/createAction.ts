import db from '@utils/db';
import { serviceResult } from '@utils';

interface Props {
  title: string;
  userId?: string | number;
}

const createAction = async ({ title, userId }: Props) => {
  // TODO: Pass userId once authentication is added

  const user = await db.user.findFirst();

  if (!user) {
    return serviceResult({ error: { code: 'UserNotFound' } });
  }

  const todo = await db.todo.create({
    data: {
      title,
      user: { connect: { id: user.id } }
    }
  });

  return serviceResult({ data: todo });
};

export { createAction };
