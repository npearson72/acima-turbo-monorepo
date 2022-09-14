import prisma from '@configs/prisma';
import { serviceResult } from '@utils';

interface Props {
  id: string | number;
  complete: boolean;
}

const updateAction = async ({ id, complete }: Props) => {
  try {
    const todo = await prisma.todo.update({
      where: { id: Number(id) },
      data: { complete }
    });

    return serviceResult({ data: todo });
  } catch (e: any) {
    if (e.code && e.code === 'P2025') {
      return serviceResult({ error: { code: 'RecordNotFound' } });
    }

    throw e;
  }
};

export { updateAction };
