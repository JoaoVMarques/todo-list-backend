import Account from '../Domains/Account';

interface IAccountMessage {
  message: string;
  account: Account;
  token: string;
}

export default IAccountMessage;