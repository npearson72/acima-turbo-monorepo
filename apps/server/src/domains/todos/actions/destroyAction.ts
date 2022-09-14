import prisma from '@db/prisma';
import { serviceResult } from '@utils';

interface Props {
  id: string;
}

const destroyAction = async ({ id }: Props) => {
  try {
    await prisma.todo.delete({
      where: { id: Number(id) }
    });

    return serviceResult({});
  } catch (e: any) {
    if (e.code && e.code === 'P2025') {
      return serviceResult({ error: { code: 'RecordNotFound' } });
    }

    throw e;
  }
};

export { destroyAction };
