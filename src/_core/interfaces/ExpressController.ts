import { Controller } from './Controller';
import * as express from 'express';

export interface ExpressController<M> extends Controller {
    getPrefix(): string;
    create(req: express.Request, res: express.Response, next: express.NextFunction): Promise<M>;
    find(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Array<M>>;
    findById(req: express.Request, res: express.Response, next: express.NextFunction): Promise<M>;
    update(req: express.Request, res: express.Response, next: express.NextFunction): Promise<M>;
    remove(req: express.Request, res: express.Response, next: express.NextFunction): Promise<M>;
}