import { object, string, boolean, number } from 'yup';
import { NewTodo, Todo } from '@domains/todos/types';

// Schemas
const newTodoSchema = object({
  title: string().required(),
  complete: boolean().optional().default(false),
  userId: number().required()
});

const todoSchema = newTodoSchema.shape({
  id: number().required()
});

// Utility functions
const validateNewTodoSchema = async (data: NewTodo): Promise<NewTodo> => {
  const todo = await newTodoSchema.validate(data, { abortEarly: false });

  return todo;
};

const validateTodoSchema = async (
  data: Partial<Todo>
): Promise<Partial<Todo>> => {
  const todo = await todoSchema.validate(data, { abortEarly: false });

  return todo;
};

export type { NewTodo, Todo };
export { validateNewTodoSchema, validateTodoSchema };
