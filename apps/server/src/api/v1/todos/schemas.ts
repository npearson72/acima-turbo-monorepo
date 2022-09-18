import { object, string, boolean, number } from 'yup';

const newTodoSchema = object({
  title: string().required(),
  complete: boolean().optional().default(false),
  userId: number().required()
});

const todoSchema = newTodoSchema.shape({
  id: number().required()
});

export { newTodoSchema, todoSchema };
