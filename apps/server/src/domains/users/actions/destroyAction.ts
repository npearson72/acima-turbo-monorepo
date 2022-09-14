import db from '@utils/db';
import { serviceResult } from '@utils';

interface Props {
  id: string;
}

const destroyAction = async ({ id }: Props) => {
  try {
    await db.user.delete({
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
