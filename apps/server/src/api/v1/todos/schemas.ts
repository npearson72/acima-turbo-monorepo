import { object, string, boolean, number } from 'yup';

const newTodoSchema = object({
  title: string().min(3).max(100).trim().required(),
  complete: boolean().optional().default(false),
  userId: number().required()
});

const updateTodoSchema = object({
  id: number().required(),
  title: string().min(3).max(100).trim().optional(),
  complete: boolean().optional(),
  userId: number().required()
});

export { newTodoSchema, updateTodoSchema };
