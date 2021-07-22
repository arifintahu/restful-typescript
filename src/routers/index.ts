import { Router } from 'express';
import main from './main';
import user from './user';

const router: Router = Router();
router.use('/', main);
router.use('/user', user);

export default router;
