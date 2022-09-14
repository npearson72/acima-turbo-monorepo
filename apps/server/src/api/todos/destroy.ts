import { Request, Response } from 'express';
import prisma from '@db/prisma';

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.todo.delete({
    where: { id: Number(id) }
  });

  res.sendStatus(200);
};

export default destroy;
