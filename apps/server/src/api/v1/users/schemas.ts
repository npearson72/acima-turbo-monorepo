import { object, string, number } from 'yup';

const newUserSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required()
});

const userSchema = newUserSchema.shape({
  id: number().required()
});

export { newUserSchema, userSchema };
