import * as express from 'express';
import loaders from './loaders';
import { createServer } from 'http';
import { Server } from 'net';
import { Application } from 'express';

export async function startServer(): Promise<Server> {
  const app: Application = express();
  await loaders(app);

  const PORT: number = parseInt(<string>process.env.PORT, 10) || 3000;

  app.set('port', PORT);
  const httpServer = createServer(app);

  return httpServer.listen(PORT, () => {
    console.log('Server is listening on port ', PORT);
  });
}

startServer();
