import { ControllerCore } from './../_core/controllers/ControllerCore';
import { NotImplementedException } from '../_core/exceptions/NotImplementedException';
import { UserService } from '../services/UserService';
import { ExpressController } from "../_core/interfaces/ExpressController";
import { SERVICE_TYPES } from '../types/ServiceTypes';
import { RegistrableController } from '../_core/interfaces/RegistrableController';
import { injectable, inject, decorate } from 'inversify';
import * as express from 'express';
let  USERS = require('../models/users.json')

@injectable()
export class UserController extends ControllerCore<UserService> {
    @inject(SERVICE_TYPES.UserService)
    private userService: UserService;
    private prefix: string = '/user/';

    getPrefix(): string {
        return this.prefix;
    }

    getService(): UserService {
        return this.userService;
    }

    find(req: any, res: any, next: any) {
        res.json(USERS);
    }
}