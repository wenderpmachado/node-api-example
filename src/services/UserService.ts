import { UserRepository } from './../repositories/UserRepository';
import { REPOSITORY_TYPES } from './../types/RepositoryTypes';
import { NotImplementedException } from './../_core/exceptions/NotImplementedException';
import { User } from './../models/User';
import { Service } from './../_core/interfaces/Service';
import { injectable, inject, decorate } from 'inversify';
import { ServiceCore } from "../_core/services/ServiceCore";
import 'reflect-metadata';

@injectable()
export class UserService extends ServiceCore<UserRepository, User> {
    @inject(REPOSITORY_TYPES.UserRepository)
    private addressRepositoryMongo: UserRepository;

    getRepository(): UserRepository {
        return this.addressRepositoryMongo;
    }
}