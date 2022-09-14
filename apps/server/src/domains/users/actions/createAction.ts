import prisma from '@db/prisma';
import { serviceResult } from '@utils';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
}

const createAction = async ({ firstName, lastName, email }: Props) => {
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email
    }
  });

  return serviceResult({ data: user });
};

export { createAction };
