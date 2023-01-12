import { Router } from 'express';
import test from '../Controllers/test';

const routes = Router();

routes.get(
  '/test',
  (req, res, next) => new test(req, res, next).create(),
);

export default routes;