import * as express from 'express';
import loaders from './loaders';
import { createServer } from 'http';
import { Server } from 'net';

export async function startServer(): Promise<Server> {
  const app = express();
  await loaders(app);

  const PORT = Number(process.env.PORT) || 3000;

  app.set('port', PORT);
  const httpServer = createServer(app);

  return httpServer.listen(PORT, () => {
    console.log('Server is listening on port ', PORT);
  });
}

startServer();
