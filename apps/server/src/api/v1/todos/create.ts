import { Request, Response } from 'express';
import { createAction } from '@domains/todos/actions';

const create = async (req: Request, res: Response) => {
  const { title } = req.body;

  const result = await createAction({ title });

  if (result.isSuccess) {
    return res.status(201).json({ todo: result.data });
  }

  return res.status(422).json({ error: result.error });
};

export default create;
