import express from 'express';
import ErrorHandler from './Middlewares/errorhandler';
import routes from './Routes/routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;