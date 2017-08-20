import { MethodNotImplementedException } from '../exceptions/MethodNotImplementedException';
import { Repository } from '../interfaces/Repository';

export class RepositoryRDBCore implements Repository {
    create(body: any) {
        throw new MethodNotImplementedException();
    }
    find(...args: any[]) {
        throw new MethodNotImplementedException();
    }
    findOne(...args: any[]) {
        throw new MethodNotImplementedException();
    }
    findById(...args: any[]) {
        throw new MethodNotImplementedException();
    }
    update(...args: any[]) {
        throw new MethodNotImplementedException();
    }
    remove(...args: any[]) {
        throw new MethodNotImplementedException();
    }
}