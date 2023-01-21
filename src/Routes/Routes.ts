import { NextFunction, Request, Response, Router } from 'express';
import AccountController from '../Controllers/AccountController';
import registerSchema from '../express/registerSchema';
import { registerMiddleware } from '../Middlewares/registerMiddleware';

const routes = Router();

routes.post(
  '/register',
  registerSchema,
  (req: Request, res: Response, next: NextFunction) => registerMiddleware(req, res, next), 
  (req: Request, res: Response, next: NextFunction) => new
   AccountController(req, res, next).register(),
);

export default routes;