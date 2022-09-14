import { Request, Response } from 'express';
import prisma from '@db/prisma';

const index = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ orderBy: { id: 'asc' } });

  res.status(200).json({ users });
};

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

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: { id: Number(id) }
  });

  res.sendStatus(200);
};

export { index, create, destroy };
