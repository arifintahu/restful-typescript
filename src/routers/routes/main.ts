import { Router } from 'express';
import { userController } from '../../controllers';

const route = Router();

route.get('/', (req, res) => {
  res.status(200).end();
});

route.get('/user2', (req, res) => {
  userController.userFindController(req, res);
});

export default route;
