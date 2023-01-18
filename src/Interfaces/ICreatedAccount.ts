import { Types } from 'mongoose';
import IAccount from './IAccount';

interface ICreatedAccount extends Omit<IAccount, 'password'> {
  createdAt: Date,
  id: Types.ObjectId,
}

export default ICreatedAccount;
