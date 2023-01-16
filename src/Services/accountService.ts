import IAccount from '../Interfaces/account';
import AccountODM from '../Models/accountODM';

class AccountService {
  private accountODM = new AccountODM()

  public async register(account: IAccount) {
    const newAccount = await this.accountODM.create(account);
    const { username, _id, createdAt } = newAccount;
    if (_id) {
      return { message: 'Conta criada com sucesso', username, id: _id, createdAt };
    }
    throw Error('não foi possivel criar sua conta');
  }
}

export default AccountService;