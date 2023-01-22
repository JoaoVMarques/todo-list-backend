import Account from '../domains/account';

interface IAccountMessage {
  message: string;
  account: Account;
  token: string;
}

export default IAccountMessage;