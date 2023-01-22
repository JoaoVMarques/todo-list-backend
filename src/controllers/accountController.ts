import { Request, Response, NextFunction } from 'express';
import IAccount from '../Interfaces/IAccount';
import AccountService from '../services/accountService';

class AccountController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: AccountService

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new AccountService();
  }

  public async register() {
    const userAccount: IAccount = this.req.body;

    try {
      const message = await this.service.register(userAccount);
      return this.res.status(201).json({ response: message });
    } catch (error) {
      this.next(error);
    }
  }
}

export default AccountController;