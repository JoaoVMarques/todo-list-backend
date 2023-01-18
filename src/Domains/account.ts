import INewAccount from '../Interfaces/newAccount';

class Account {
  private username;
  private email;
  private createdAt;
  private id;

  constructor(account: INewAccount) {
    this.username = account.username;
    this.email = account.email;
    this.createdAt = account.createdAt;
    this.id = account._id;
  }
}

export default Account;