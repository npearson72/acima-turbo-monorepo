import { Request, Response } from 'express';
import { createAction } from '@domains/users/actions';

const create = async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  const result = await createAction({ firstName, lastName, email });

  if (result.isSuccess) {
    return res.status(201).json({ user: result.data });
  }

  return res.status(422).json({ error: result.error });
};

export default create;
