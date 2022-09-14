import { Request, Response } from 'express';
import prisma from '@db/prisma';

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { complete } = req.body;

  const todo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { complete }
  });

  res.status(200).json({ todo });
};

export default update;
