import { user } from '../services';
import { Request, Response } from 'express';

export default {
	userFindController: async (req: Request, res: Response): Promise<void> => {
		const result = await user.userFind();
		if(result){
			res.send(result)
		} else {
			res.status(400).json({ 
                ok : false,
                msg : 'null' 
            });
		}
	},
	userCreateController: async (req: Request, res: Response): Promise<void> => {
		const result = await user.userCreate(req.body);
		if(result){
			res.send(result)
		} else {
			res.status(400).json({ 
                ok : false,
                msg : 'null' 
            });
		}
	}
}