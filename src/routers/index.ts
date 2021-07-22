import { Router } from 'express';
import { main, user } from './routes';

const router: Router = Router();
router.use('/', main);
router.use('/user', user);

export default router;
