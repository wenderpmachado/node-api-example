import { CONTROLLER_TYPES } from './../types/ControllerTypes';
import { App } from './../_core/App';
import { User } from './../models/User';
import { ControllerCore } from './../_core/controllers/ControllerCore';
import { UserService } from '../services/UserService';
import { SERVICE_TYPES } from '../types/ServiceTypes';
import { injectable, inject, decorate } from 'inversify';
import * as express from 'express';
import 'reflect-metadata';

@injectable()
export class UserController extends ControllerCore<User, UserService> {
    @inject(SERVICE_TYPES.UserService)
    private userService: UserService;
    private prefix: string = '/user/';
    
    getPrefix(): string {
        return this.prefix;
    }
    
    getService(): UserService {
        return this.userService;
    }

    requestToObject(req: express.Request): User {
        return new User(
            req.body.id,
            req.body.name
        );
    }
}