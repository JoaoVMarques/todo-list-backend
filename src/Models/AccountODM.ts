import { Schema } from 'mongoose';
import IAccount from '../Interfaces/IAccount';
import AbstractODM from './AbstractsODM';

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
}

export default AccountODM;