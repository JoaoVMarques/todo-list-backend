const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

export const encryptPassword = (password: string) => bcrypt.hashSync(password, salt);