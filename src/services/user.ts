import { User } from '../models';

export default {
  userCreate: async (data: User): Promise<User> => {
    const result = await User.create(data);
    return result;
  },
  userFindAll: async (): Promise<User[]> => {
    const result = await User.findAll();
    return result;
  },
  userFindOne: async (id: number): Promise<User | null> => {
    const result = await User.findOne({
      where: {
        id: id
      }
    });
    return result;
  },
  userUpdate: async (
    data: Record<string, unknown>,
    id: number
  ): Promise<[number, User[]]> => {
    const result = await User.update(data, {
      where: {
        id: id
      }
    });
    return result;
  },
  userDelete: async (id: number): Promise<number> => {
    const result = await User.destroy({
      where: {
        id: id
      }
    });
    return result;
  }
};
