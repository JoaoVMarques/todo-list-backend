import { body } from 'express-validator';

const registerSchema = [
  body('email').isEmail(),
];

export default registerSchema;