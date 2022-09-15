import { object, string, number } from 'yup';
import { NewUser, User } from '@domains/users/types';

// Schemas
const newUserSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required()
});

const userSchema = newUserSchema.shape({
  id: number().required()
});

// Utility functions
const validateNewUserSchema = async (data: NewUser): Promise<NewUser> => {
  const user = await newUserSchema.validate(data, { abortEarly: false });

  return user;
};

const validateUserSchema = async (
  data: Partial<User>
): Promise<Partial<User>> => {
  const user = await userSchema.validate(data, { abortEarly: false });

  return user;
};

export type { NewUser, User };
export { validateNewUserSchema, validateUserSchema };
