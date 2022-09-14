import { Request, Response } from 'express';
import prisma from '@db/prisma';

const getAll = async (_req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });

  res.status(200).json({ todos });
};

export default getAll;
