import { Schema } from 'mongoose';
import IAccount from '../interfaces/IAccount';
import AbstractODM from './abstractsODM';

class AccountODM extends AbstractODM<IAccount> {
  constructor() {
    const schema = new Schema<IAccount>({
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
    }, {
      versionKey: '_version',
      timestamps: true,
    });
    super(schema, 'account');
  }

  public async findOne(email: string) {
    return this.model.findOne({ where: email });
  }
}

export default AccountODM;