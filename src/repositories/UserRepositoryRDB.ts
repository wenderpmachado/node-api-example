import { UserRepository } from './UserRepository';
import { RepositoryRDBCore } from '../_core/repositories/RepositoryRDBCore';
import { injectable } from 'inversify';

@injectable()
export class UserRepositoryRDB extends RepositoryRDBCore implements UserRepository {
    
}