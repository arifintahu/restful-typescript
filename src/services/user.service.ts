import { User } from '../models';

export default {
	userFind: async (): Promise<User[]> => {
		const result = await User.findAll();
		return result;
	},
	userCreate: async (data: User): Promise<User> => {
		const result = await User.create(data);
		return result;
	}
}
