import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import routers from '../routers';
import { Application } from 'express';

export default function loadExpress(app: Application): Promise<void> {
  return new Promise((resolve, reject) => {
    const API: string = process.env.API || 'api';
    try {
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
      app.use('*', cors());
      app.use(compression());
      app.use(`/${API}`, routers);
      resolve();
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
}
