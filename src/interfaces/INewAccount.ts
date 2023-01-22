import { Types } from 'mongoose';
import IAccount from './IAccount';

interface INewAccount extends IAccount {
  _id?: Types.ObjectId,
  createdAt?: Date,
}

export default INewAccount;
