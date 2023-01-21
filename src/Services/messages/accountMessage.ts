import Account from '../../Domains/account';
import IAccountMessage from '../../Interfaces/IAccountMessage';

class AccountMessage {
  private message: string;
  private account: Account;
  private token: string;

  constructor(messageObject: IAccountMessage) {
    this.message = messageObject.message;
    this.account = messageObject.account;
    this.token = messageObject.token;
  }
}

export default AccountMessage;