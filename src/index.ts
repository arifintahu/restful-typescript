import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'net';

export async function startServer(): Promise<Server> {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.set('port', PORT);
    const httpServer = createServer(app);

    return httpServer.listen(PORT, () => {
        console.log('Server is listening on port ', PORT);
    });
}

startServer();