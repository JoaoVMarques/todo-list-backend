import { NextFunction, Request, Response, Router } from 'express';
import AccountController from '../Controllers/accountController';
import registerSchema from '../express/registerSchema';
import { registerMiddleware } from '../express/middlewares/registerMiddleware';

const routes = Router();

routes.post(
  '/register',
  registerSchema,
  (req: Request, res: Response, next: NextFunction) => registerMiddleware(req, res, next), 
  (req: Request, res: Response, next: NextFunction) => new
   AccountController(req, res, next).register(),
);

export default routes;