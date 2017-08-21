import { NotImplementedException } from '../exceptions/NotImplementedException';
import { Repository } from '../interfaces/Repository';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class RepositoryRDBCore implements Repository {
    create(body: any) {
        throw new NotImplementedException();
    }
    find(...args: any[]) {
        throw new NotImplementedException();
    }
    findOne(...args: any[]) {
        throw new NotImplementedException();
    }
    findById(...args: any[]) {
        throw new NotImplementedException();
    }
    update(...args: any[]) {
        throw new NotImplementedException();
    }
    remove(...args: any[]) {
        throw new NotImplementedException();
    }
}