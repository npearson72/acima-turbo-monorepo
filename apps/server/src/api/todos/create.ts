import { Request, Response } from 'express';
import prisma from '@db/prisma';

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

export default create;
