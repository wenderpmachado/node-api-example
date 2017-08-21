import { Controller } from './Controller';
import * as express from 'express';

export interface ExpressController extends Controller {
    getPrefix(): string;
    create(req: express.Request, res: express.Response, next: express.NextFunction);
    find(req: express.Request, res: express.Response, next: express.NextFunction);
    findById(req: express.Request, res: express.Response, next: express.NextFunction);
    update(req: express.Request, res: express.Response, next: express.NextFunction);
    remove(req: express.Request, res: express.Response, next: express.NextFunction);
}