import { App } from './App';
import * as debug from 'debug';
import * as http from 'http';
import * as express from 'express';

export class Server {
    private defaultPort: number = 3000;
    private static instance: http.Server;

    constructor(app: express.Application) {
        Server.instance = http.createServer(app);
        app.set('port', this.getPort());
    }

    start() {
        debug('ts-express:server');
        Server.instance.on('error', this.onError);
        Server.instance.on('listening', this.onListening);
        Server.instance.listen(this.getPort());
    }

    getInstance(): http.Server {
        return Server.instance;
    }

    getPort(): string|number|boolean {
        return this.normalizePort(process.env.PORT || this.defaultPort);
    }

    normalizePort(val: number|string): number|string|boolean {
        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port)) {
            return val;
        } else if (port >= 0) { 
            return port;
        } else {
            return false;
        }
    }

    onError(error: NodeJS.ErrnoException): void {
        let port = this.getPort();
        if (error.syscall !== 'listen') throw error;

        let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    onListening(): void {
        let addr = Server.instance.address();
        let bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        debug(`Listening on ${bind}`);
    }
}