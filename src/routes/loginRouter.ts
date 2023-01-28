import { Router } from 'express';
import Account from '../controllers/account';

const loginRouter = Router();

loginRouter.post('/', (req, res, next) => new Account(req, res, next).register());

export default loginRouter;
