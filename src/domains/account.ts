import INewAccount from '../Interfaces/INewAccount';

class Account {
  private username;
  private email;
  private createdAt;
  public id;

  constructor(account: INewAccount) {
    this.username = account.username;
    this.email = account.email;
    this.createdAt = account.createdAt;
    this.id = account._id;
  }
}

export default Account;