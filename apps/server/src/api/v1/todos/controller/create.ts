import { Request, Response } from 'express';
import { createAction } from '@domains/todos/actions';
import { validateNewTodoSchema } from '../schemas';
import { todoEntity } from '../entities';

const create = async (req: Request, res: Response) => {
  const todo = await validateNewTodoSchema({ ...req.body, userId: 1 });

  const result = await createAction(todo);

  if (result.success) {
    const entity = todoEntity(result.todo);

    return res.status(201).json({
      ...result,
      todo: entity
    });
  }

  return res.status(422).json(result);
};

export default create;
