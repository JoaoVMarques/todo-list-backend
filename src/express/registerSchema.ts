import { body } from 'express-validator';

const registerSchema = [
  body('email')
    .exists()
    .isEmail(),

  body('username')
    .exists()
    .isLength({ max: 20 }),

  body('password')
    .isLength({ min: 6 }),
];

export default registerSchema;