import { body } from 'express-validator';

const registerSchema = [
  body('email')
    .exists()
    .withMessage('O campo /email/ é necessário')
    .isEmail()
    .withMessage('O campo /email/ precisa ser um email'),

  body('username')
    .exists()
    .withMessage('O campo /username/ é necessário')
    .isLength({ max: 20 })
    .withMessage('O limite maximo para o campo username são 20 caracters'),

  body('password')
    .exists()
    .withMessage('O campo /password/ é necessário')
    .isLength({ min: 6 })
    .withMessage('O minimo para o campo /password/ são 6 caracters'),
];

export default registerSchema;