import { MethodNotImplementedException } from '../_core/exceptions/MethodNotImplementedException';
import { UserService } from '../services/UserService';
import { ExpressController } from "../_core/interfaces/ExpressController";
import { SERVICE_TYPES } from '../types/ServiceTypes';
import { RegistrableController } from '../_core/interfaces/RegistrableController';
import { injectable, inject, decorate } from 'inversify';
import * as express from 'express';

let UserS = require('../models/Users.json');

@injectable()
export class UserController implements RegistrableController, ExpressController {
    @inject(SERVICE_TYPES.UserService)
    private UserService: UserService;
    private prefix: string = '/user/';

    register(app: express.Application): void {
        // GET /user/
        app.route(this.getPrefix()).get(this.find);

        // GET /user/:id
        app.route(this.getPrefix() + ':id').get(this.findById);
        
        // POST /user/
        app.route(this.getPrefix()).post(this.create);
        
        // PATCH /user/:id
        app.route(this.getPrefix() + ':id').patch(this.update);

        // DELETE /user/:id
        app.route(this.getPrefix() + ':id').delete(this.remove);
    }

    getPrefix(): string {
        return this.prefix;
    }
    
    create(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
    
    find(req: any, res: any, next: any) {
        res.json(UserS);
    }

    findById(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }

    update(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }

    remove(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
}