import { Request, Response } from 'express';
import { createAction } from '@domains/users/actions';
import { validateSchema } from '@utils/validateSchema';
import { newUserSchema } from '../schemas';
import { userEntity } from '../entities';

const create = async (req: Request, res: Response) => {
  const user = await validateSchema(req.body, newUserSchema);

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
