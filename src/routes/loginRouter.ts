import { Router } from 'express';
import AccountController from '../controllers/accountController';

const loginRouter = Router();

loginRouter.post('/', (req, res, next) => new AccountController(req, res, next).register());

export default loginRouter;
