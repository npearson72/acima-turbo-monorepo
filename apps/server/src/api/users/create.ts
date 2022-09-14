import { Request, Response } from 'express';
import prisma from '@db/prisma';

const create = async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email
    }
  });

  res.status(201).json({ user });
};

export default create;
