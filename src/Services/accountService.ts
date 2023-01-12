import IAccount from '../Interfaces/account';
import AccountODM from '../Models/accountODM';

class AccountService {
  private accountODM = new AccountODM()

  public async register(account: IAccount) {
    const newPayment = await this.accountODM.create(account);
    console.log(newPayment);
  }
}

export default AccountService;