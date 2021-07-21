import * as path from 'path';
import * as dotenv from 'dotenv';

export default function loadEnv(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const PATH_CONFIG = path.join(__dirname, '../../.env');
      dotenv.config({
        path: PATH_CONFIG
      });
      resolve();
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
}
