import { MySQLProvider } from './repositories/MySQLProvider';
import { PROVIDER_TYPES } from './../types/ProviderTypes';
import { SERVICE_TYPES } from '../types/ServiceTypes';
import { UserService } from '../services/UserService';
import { REPOSITORY_TYPES } from '../types/RepositoryTypes';
import { UserRepositoryRDB } from '../repositories/UserRepositoryRDB';
import { UserController } from '../controllers/UserController';
import { CONTROLLER_TYPES } from '../types/ControllerTypes';
import { RegistrableController } from './interfaces/RegistrableController';
import { Container } from 'inversify';
import "reflect-metadata";

export class IocContainer {
    private static container: Container;

    private constructor() {}

    public static getInstance(): Container {
        this.container = new Container();

        IocContainer.bindControllers(this.container);
        IocContainer.bindServices(this.container);
        IocContainer.bindRepositories(this.container);
        IocContainer.bindProviders(this.container);

        return this.container;
    }

    private static bindControllers(container: Container): void {
        container.bind<RegistrableController>(CONTROLLER_TYPES.Controller).to(UserController);
    }

    private static bindServices(container: Container): void {
        container.bind<UserService>(SERVICE_TYPES.UserService).to(UserService).whenInjectedInto(UserController);
    }
    
    private static bindRepositories(container: Container): void {
        container.bind<UserRepositoryRDB>(REPOSITORY_TYPES.UserRepository).to(UserRepositoryRDB).whenInjectedInto(UserService);
    }
    
    private static bindProviders(container: Container): void {
        container.bind<MySQLProvider>(PROVIDER_TYPES.RDBProvider).to(MySQLProvider);
        // container.bind<MySQLProvider>(PROVIDER_TYPES.MySQLProvider).to(MySQLProvider);
    }
}