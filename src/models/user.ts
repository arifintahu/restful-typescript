import { Model, DataTypes } from 'sequelize';
import { db } from '../loaders/sequelize';

export class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  },
  { modelName: 'user', sequelize: db }
);
