import { Request, Response } from 'express';
import { updateAction } from '@domains/todos/actions';

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { complete } = req.body;

  const result = await updateAction({ id, complete });

  if (result.isSuccess) {
    return res.status(200).json({ todo: result.data });
  }

  return res.status(422).json({ error: result.error });
};

export default update;
