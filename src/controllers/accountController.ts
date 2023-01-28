import { NextFunction, Request, Response } from 'express';
import AccountService from '../services/accountService';

class AccountController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: AccountService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new AccountService();
  }

  async register() {
    console.log(this.req.body);
    const message = await this.service.register(this.req.body); 
    return this.res.status(200).json(message);
  }
}

export default AccountController;