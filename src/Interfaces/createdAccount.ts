import { Types } from 'mongoose';
import IAccount from './account';

interface ICreatedAccount extends Omit<IAccount, 'password'> {
  createdAt: Date,
  id: Types.ObjectId,
}

export default ICreatedAccount;
