import { UserRepository } from './UserRepository';
import { RepositoryRDBCore } from '../_core/repositories/RepositoryRDBCore';
import { injectable } from 'inversify';
import 'reflect-metadata';
let USERS = require('../models/users.json')

@injectable()
export class UserRepositoryRDB extends RepositoryRDBCore implements UserRepository {
    test() {
        return USERS;
    }
}