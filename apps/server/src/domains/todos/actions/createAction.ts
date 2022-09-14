import prisma from '@db/prisma';
import { serviceResult } from '@utils';

interface Props {
  title: string;
  userId?: string | number;
}

const createAction = async ({ title, userId }: Props) => {
  // TODO: Pass userId once authentication is added

  const user = await prisma.user.findFirst();

  if (!user) {
    return serviceResult({ error: { code: 'UserNotFound' } });
  }

  const todo = await prisma.todo.create({
    data: {
      title,
      user: { connect: { id: user.id } }
    }
  });

  return serviceResult({ data: todo });
};

export { createAction };
