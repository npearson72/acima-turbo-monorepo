import { Request, Response } from 'express';
import prisma from '@db/prisma';

const index = async (_req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });

  res.status(200).json({ todos });
};

const create = async (req: Request, res: Response) => {
  const { title } = req.body;

  const user = await prisma.user.findFirst();

  if (!user) {
    return res.status(404).json({ error: { code: 'user_not_found' } });
  }

  const todo = await prisma.todo.create({
    data: {
      title,
      user: { connect: { id: user.id } }
    }
  });

  return res.status(201).json({ todo });
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { complete } = req.body;

  const todo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { complete }
  });

  res.status(200).json({ todo });
};

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.todo.delete({
    where: { id: Number(id) }
  });

  res.sendStatus(200);
};

export { index, create, update, destroy };
