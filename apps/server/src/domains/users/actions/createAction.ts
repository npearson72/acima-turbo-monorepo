import db from '@utils/db';
import { serviceResult } from '@utils';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
}

const createAction = async ({ firstName, lastName, email }: Props) => {
  try {
    const user = await db.user.create({
      data: {
        firstName,
        lastName,
        email
      }
    });

    return serviceResult({ data: user });
  } catch (e: any) {
    if (e.code && e.code === 'P2002') {
      return serviceResult({ error: { code: 'RecordNotUnique' } });
    }

    throw e;
  }
};

export { createAction };
