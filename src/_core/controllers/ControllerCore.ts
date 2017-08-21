import { Service } from './../interfaces/Service';
import { SERVICE_TYPES } from './../../types/ServiceTypes';
import { ExpressController } from './../interfaces/ExpressController';
import { RegistrableController } from './../interfaces/RegistrableController';
import { NotImplementedException } from '../exceptions/NotImplementedException';
import { Controller } from '../interfaces/Controller';
import * as express from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class ControllerCore<M, S extends Service<M>> implements RegistrableController, ExpressController<M> {
    abstract getPrefix(): string;
    abstract getService(): S;
    abstract requestToObject(req: express.Request): M;

    register(app: express.Application): void {
        app.route(this.getPrefix())
            .get(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
                const objects: Array<M> = await this.find(req, res, next);
                this.response(res, objects);
            })
            .post(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
                const id: number = await this.create(req, res, next);
                this.response(res, id);
            });

        app.route(this.getPrefix() + ':id')
            .get(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
                const object: M = await this.findById(req, res, next);
                this.response(res, object);
            })
            .patch(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
                const object: boolean = await this.update(req, res, next);
                this.response(res, object);
            })
            .delete(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
                const object: boolean = await this.remove(req, res, next);
                this.response(res, object);
            });
    };

    response(res: express.Response, obj: any): void {
        res.json(obj);
    }
    
    async create(req: express.Request, res: express.Response, next: express.NextFunction): Promise<number> {
        return await this.getService().create(this.requestToObject(req));
    }
    
    async find(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Array<M>> {
        return await this.getService().find();
    }

    async findById(req: express.Request, res: express.Response, next: express.NextFunction): Promise<M> {
        return await this.getService().findById(<string> req.params.id);
    }

    async update(req: express.Request, res: express.Response, next: express.NextFunction): Promise<boolean> {
        return await this.getService().update(this.requestToObject(req));
    }

    async remove(req: express.Request, res: express.Response, next: express.NextFunction): Promise<boolean> {
        return await this.getService().remove(<string> req.params.id);
    }
}