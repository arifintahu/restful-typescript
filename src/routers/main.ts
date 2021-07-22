import { Router, Request, Response } from 'express';
import { userController } from '../controllers';

const route: Router = Router();

route.get('/', (req: Request, res: Response) => {
  res.status(200).end();
});

route.get('/user2', (req: Request, res: Response) => {
  userController.userFindController(req, res);
});

export default route;
