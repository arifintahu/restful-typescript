import { Router } from 'express';
import { main, user } from './routes';

const app = Router();
app.use('/', main);
app.use('/user', user);

export default app;
