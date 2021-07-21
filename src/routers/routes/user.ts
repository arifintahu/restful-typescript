import { Router } from 'express';
import { userController } from '../../controllers';

const route = Router();

route.get('/user', (req, res) => {
  userController.userFindController(req, res);
});
route.post('/user', (req, res) => {
  userController.userCreateController(req, res);
});

export default route;
