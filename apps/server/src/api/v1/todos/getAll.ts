import { Request, Response } from 'express';
import db from '@utils/db';

const getAll = async (_req: Request, res: Response) => {
  const todos = await db.todo.findMany({ orderBy: { id: 'asc' } });

  res.status(200).json({ todos });
};

export default getAll;
