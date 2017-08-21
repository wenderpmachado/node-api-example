import { Controller } from './Controller';
import * as express from 'express';

export interface ExpressController<M> extends Controller {
    getPrefix(): string;
    create(req: express.Request, res: express.Response, next: express.NextFunction): Promise<number>;
    find(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Array<M>>;
    findById(req: express.Request, res: express.Response, next: express.NextFunction): Promise<M>;
    update(req: express.Request, res: express.Response, next: express.NextFunction): Promise<boolean>;
    remove(req: express.Request, res: express.Response, next: express.NextFunction): Promise<boolean>;
}