export type NewTodo = {
  title: string;
  complete: boolean;
  userId: number;
};

export type Todo = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
} & NewTodo;
