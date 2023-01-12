import { Router } from 'express';
import Test from '../Controllers/test';

const routes = Router();

routes.get(
  '/test',
  (req, res, next) => new Test(req, res, next).create(),
);

export default routes;