import { Router } from 'express';
import loginRouter from './loginRouter';

const routers = Router();

routers.use('/register', loginRouter);

export default routers;