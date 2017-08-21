import { Service } from './../interfaces/Service';
import { NotImplementedException } from './../exceptions/NotImplementedException';
import { injectable, inject, decorate } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class ServiceCore<R, M> implements Service<M> {
    abstract getRepository(): R;

    create(object: M) {
        throw new NotImplementedException();
    }
    find(): Array<M> {
        throw new NotImplementedException();
    }
    findById(id: string): M {
        throw new NotImplementedException();
    }
    update(object: M) {
        throw new NotImplementedException();
    }
    remove(id: string) {
        throw new NotImplementedException();
    }

}