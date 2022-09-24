export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
};

export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
} & NewUser;
