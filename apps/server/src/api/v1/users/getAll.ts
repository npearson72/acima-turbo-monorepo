import { Request, Response } from 'express';
import prisma from '@configs/prisma';

const getAll = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ orderBy: { id: 'asc' } });

  res.status(200).json({ users });
};

export default getAll;
