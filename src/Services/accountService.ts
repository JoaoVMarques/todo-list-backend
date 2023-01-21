import Account from '../Domains/account';
import IAccount from '../Interfaces/IAccount';
import INewAccount from '../Interfaces/INewAccount';
import AccountODM from '../Models/accountODM';
import Jwt from '../utils/jwt';
import PasswordCrypt from '../utils/password';
import AccountMessage from './messages/accountMessage';

class AccountService {
  private accountODM = new AccountODM()
  private passwordCrypt = new PasswordCrypt();
  private jwt = new Jwt();
  private sucessMessage = 'Conta criada com sucesso'

  public encryptPass(account: IAccount) {
    const userPass = this.passwordCrypt.encrypt(account.password);
    return { ...account, password: userPass };
  }

  public async register(account: IAccount) {
    const userAccountCrypt = this.encryptPass(account);
    const newAccount: INewAccount = await this.accountODM.create(userAccountCrypt);

    if (newAccount._id) {
      const createdAccount = new Account(newAccount);
      const token = this.jwt.generateToken({ id: createdAccount.id! });
      const accountMessage = new AccountMessage({ 
        message: this.sucessMessage,
        account: createdAccount,
        token });
      return accountMessage;
    }
    throw Error('não foi possivel criar sua conta');
  }
}

export default AccountService;