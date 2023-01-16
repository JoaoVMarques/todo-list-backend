import { Request, Response, NextFunction } from 'express';
import IAccount from '../Interfaces/account';
import AccountService from '../Services/accountService';

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
    const { username, email, password } = this.req.body;
    const userAccount: IAccount = {
      username, email, password,
    };

    try {
      const message = await this.service.register(userAccount);
      return this.res.status(201).json(message);
    } catch (error) {
      this.next(error);
    }
  }
}

export default AccountController;