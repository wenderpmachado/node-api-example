import { App } from './_core/App';
import { Server } from './_core/Server';
import 'reflect-metadata';

const app = App.getInstance();
const server = new Server(app);
server.start();
