import { Request, Response } from 'express';
import { destroyAction } from '@domains/todos/actions';

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await destroyAction({ id });

  if (result.isSuccess) {
    return res.sendStatus(200);
  }

  return res.status(422).json({ error: result.error });
};

export default destroy;
