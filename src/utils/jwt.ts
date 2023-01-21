import jsonwebtoken from 'jsonwebtoken';
import { Types } from 'mongoose';

class Jwt {
  private jwt = jsonwebtoken;
  private secretPass = process.env.JWT_SECRET;

  public generateToken(payload: { id: Types.ObjectId }) {
    return this.jwt.sign(
      payload,
      this.secretPass as string,
      { algorithm: 'HS256', expiresIn: '1h' },
    );
  }
}

export default Jwt;