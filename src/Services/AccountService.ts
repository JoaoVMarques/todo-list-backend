import Account from '../Domains/account';
import IAccount from '../Interfaces/IAccount';
import INewAccount from '../Interfaces/INewAccount';
import AccountODM from '../Models/accountODM';

class AccountService {
  private accountODM = new AccountODM()

  public async register(account: IAccount) {
    const newAccount: INewAccount = await this.accountODM.create(account);
    const { _id } = newAccount;
    if (_id) {
      const createdAccount = new Account(newAccount);
      return { message: 'Conta criada com sucesso', account: createdAccount };
    }
    throw Error('não foi possivel criar sua conta');
  }
}

export default AccountService;