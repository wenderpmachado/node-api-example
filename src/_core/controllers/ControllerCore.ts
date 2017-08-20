import { SERVICE_TYPES } from './../../types/ServiceTypes';
import { ExpressController } from './../interfaces/ExpressController';
import { RegistrableController } from './../interfaces/RegistrableController';
import { NotImplementedException } from '../exceptions/NotImplementedException';
import { Controller } from '../interfaces/Controller';
import * as express from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class ControllerCore<T> implements Controller, RegistrableController, ExpressController {
    abstract getPrefix(): string;
    abstract getService(): T;

    register(app: express.Application): void {
        app.route(this.getPrefix()).get(this.find);

        app.route(this.getPrefix() + ':id').get(this.findById);
        
        app.route(this.getPrefix()).post(this.create);
        
        app.route(this.getPrefix() + ':id').patch(this.update);

        app.route(this.getPrefix() + ':id').delete(this.remove);
    };
    
    create(req: any, res: any, next: any) {
        throw new NotImplementedException();
    }
    
    find(req: any, res: any, next: any) {
        throw new NotImplementedException();
    }

    findById(req: any, res: any, next: any) {
        throw new NotImplementedException();
    }

    update(req: any, res: any, next: any) {
        throw new NotImplementedException();
    }

    remove(req: any, res: any, next: any) {
        throw new NotImplementedException();
    }
}