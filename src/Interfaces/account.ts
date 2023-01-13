import { Types } from 'mongoose';

interface IAccount {
  username: string,
  email: string,
  password: string,
  createdAt?: Date,
  _id?: Types.ObjectId,
}

export default IAccount;
