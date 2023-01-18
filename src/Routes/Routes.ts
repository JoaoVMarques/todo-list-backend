import { Router } from 'express';
import AccountController from '../Controllers/AccountController';

const routes = Router();

routes.post(
  '/register',
  (req, res, next) => new AccountController(req, res, next).register(),
);

export default routes;