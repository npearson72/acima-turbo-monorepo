import { Request, Response } from 'express';
import db from '@utils/db';

const getAll = async (_req: Request, res: Response) => {
  const users = await db.user.findMany({ orderBy: { id: 'asc' } });

  res.status(200).json({ users });
};

export default getAll;
