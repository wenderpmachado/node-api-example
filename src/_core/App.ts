import { CONTROLLER_TYPES } from '../types/ControllerTypes';
import { RegistrableController } from './interfaces/RegistrableController';
import { IocContainer } from './IocContainer';
import { Container } from 'inversify';
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// Creates and configures an ExpressJS web server.
export class App {

    // ref to Express instance
    private static express: express.Application;
    private static container: Container;

    private constructor() {}
    
    //Run configuration methods on the Express instance.
    public static getInstance(): express.Application {
        if (!this.express) {
            //create expressjs application
            this.express = express();

            //configure application
            this.middleware();

            //configure ioc
            this.setContainer(IocContainer.getInstance());

            //configure routes
            this.routes();
        }
        
        return this.express;
    }

    public static getContainer(): Container {
        if(!this.container) {
            this.getInstance();
        }
        return this.container;
    }

    public static setContainer(container: Container) {
        this.container = container;
    }

    // Configure Express middleware.
    private static middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private static routes(): void {
        // grabs the Controller from IoC container and registers all the endpoints
        const controllers: RegistrableController[] = this.container.getAll<RegistrableController>(CONTROLLER_TYPES.Controller);
        controllers.forEach(controller => controller.register(this.express));
    }

}
