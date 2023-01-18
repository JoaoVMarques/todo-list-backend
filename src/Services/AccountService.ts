import Account from '../Domains/Account';
import IAccount from '../Interfaces/IAccount';
import INewAccount from '../Interfaces/INewAccount';
import AccountODM from '../Models/AccountODM';
import Jwt from '../utils/Jwt';
import PasswordCrypt from '../utils/Password';

class AccountService {
  private accountODM = new AccountODM()
  private passwordCrypt = new PasswordCrypt();
  private jwt = new Jwt();

  public encryptPass(account: IAccount) {
    const userPass = this.passwordCrypt.encrypt(account.password);
    return { ...account, password: userPass };
  }

  // Refatorar: função muito complexa
  public async register(account: IAccount) {
    const userAccountCrypt = this.encryptPass(account);
    const newAccount: INewAccount = await this.accountODM.create(userAccountCrypt);
    const { _id } = newAccount;
    if (_id) {
      const createdAccount = new Account(newAccount);
      const token = this.jwt.generateToken({ id: createdAccount.id! });
      return { message: 'Conta criada com sucesso', account: createdAccount, token };
    }
    throw Error('não foi possivel criar sua conta');
  }
}

export default AccountService;