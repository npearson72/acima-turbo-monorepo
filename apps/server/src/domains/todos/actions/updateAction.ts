import db from '@utils/db';
import { serviceResult } from '@utils';

interface Props {
  id: string | number;
  complete: boolean;
}

const updateAction = async ({ id, complete }: Props) => {
  try {
    const todo = await db.todo.update({
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
