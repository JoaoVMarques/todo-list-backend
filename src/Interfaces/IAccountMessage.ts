import Account from '../Domains/account';

interface IAccountMessage {
  message: string;
  account: Account;
  token: string;
}

export default IAccountMessage;