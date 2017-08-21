import { UserRepositoryRDB } from './../repositories/UserRepositoryRDB';
import { UserRepository } from './../repositories/UserRepository';
import { REPOSITORY_TYPES } from './../types/RepositoryTypes';
import { User } from './../models/User';
import { injectable, inject, decorate } from 'inversify';
import { ServiceCore } from "../_core/services/ServiceCore";

let USERS = require('../models/users.json')

@injectable()
export class UserService extends ServiceCore<UserRepository, User> {
    @inject(REPOSITORY_TYPES.UserRepository)
    private userRepository: UserRepositoryRDB;

    getRepository(): UserRepository {
        return this.userRepository;
    }

    find() {
        return USERS;
    }

    test() {
        return this.userRepository.test();
    }
}