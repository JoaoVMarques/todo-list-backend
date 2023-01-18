import { Types } from 'mongoose';
import IAccount from './account';

interface INewAccount extends IAccount {
  _id?: Types.ObjectId,
  createdAt?: Date,
}

export default INewAccount;
