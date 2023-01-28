import { NextFunction, Request, Response } from 'express';

class Account {
  req: Request;
  res: Response;
  next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  register() {
    return this.res.status(200).json({ teste: 'ok' });
  }
}

export default Account;