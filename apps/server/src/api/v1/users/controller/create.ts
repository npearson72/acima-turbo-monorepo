import { Request, Response } from 'express';
import { createAction } from '@domains/users/actions';
import { validateNewUserSchema } from '../schemas';
import { userEntity } from '../entities';

const create = async (req: Request, res: Response) => {
  const user = await validateNewUserSchema(req.body);

  const result = await createAction(user);

  if (result.success) {
    const entity = userEntity(result.user);

    return res.status(201).json({
      ...result,
      user: entity
    });
  }

  return res.status(422).json(result);
};

export default create;
