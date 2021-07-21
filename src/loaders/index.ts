import loadEnv from './config';
import loadExpress from './express';
import loadSequelize from './sequelize';
import { Application } from 'express';

export default function loaders(app: Application): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      await loadEnv();
      await loadExpress(app);
      await loadSequelize();
      resolve();
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
}
