import { Request, Response, NextFunction } from 'express';

const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).send({
    error: {
      code: 'UnexpectedError'
    }
  });
};

export { globalErrorHandler };
