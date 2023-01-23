import { NextFunction, Response, Request } from 'express';
import { validationResult } from 'express-validator';

export function registerMiddleware(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ erro: errors.array()[0].msg });
  }
  next();
}