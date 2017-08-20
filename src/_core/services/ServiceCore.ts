import { Service } from './../interfaces/Service';
import { NotImplementedException } from './../exceptions/NotImplementedException';
import { injectable, inject, decorate } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class ServiceCore<R, T> implements Service<T> {
    abstract getRepository(): R;

    create(object: T) {
        throw new NotImplementedException();
    }
    find() {
        throw new NotImplementedException();
    }
    findById(id: string) {
        throw new NotImplementedException();
    }
    update(object: T) {
        throw new NotImplementedException();
    }
    remove(id: string) {
        throw new NotImplementedException();
    }

}