import { Router, Request, Response } from 'express';
import { userController } from '../../controllers';

const route: Router = Router();

route.get('/user', (req: Request, res: Response) => {
  userController.userFindController(req, res);
});
route.post('/user', (req: Request, res: Response) => {
  userController.userCreateController(req, res);
});

export default route;
