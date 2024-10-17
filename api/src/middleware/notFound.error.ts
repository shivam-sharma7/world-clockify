import { Request, Response } from 'express';

export const notFound = (req: Request, res: Response, next: any) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
