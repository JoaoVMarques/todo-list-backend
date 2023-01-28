/* eslint-disable class-methods-use-this */
import IAccount from '../interfaces/IAccount';
import AccountODM from '../models/accountODM';
import { encryptPassword } from '../utils/bcrypt';

class AccountService {
  private accountODM = new AccountODM();

  async register(account: IAccount) {
    const { password: userPass } = account;
    const password = encryptPassword(userPass);

    const newAccount = await this.accountODM.create({ ...account, password });
    console.log(newAccount);
    return newAccount;
  }
}

export default AccountService;