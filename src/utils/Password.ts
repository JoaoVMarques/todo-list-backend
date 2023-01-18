import bcrypt from 'bcryptjs';

class PasswordCrypt {
  private salt = bcrypt.genSaltSync(10);

  public encrypt(userPassword: string) {
    const hashPassword = bcrypt.hashSync(userPassword, this.salt);
    return hashPassword;
  }
}

export default PasswordCrypt;