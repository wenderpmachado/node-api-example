import { MethodNotImplementedException } from '../exceptions/MethodNotImplementedException';
import { Controller } from '../interfaces/Controller';

export class ControllerCore implements Controller {
    create(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
    find(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
    findOne(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
    findById(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
    update(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }
    remove(req: any, res: any, next: any) {
        throw new MethodNotImplementedException();
    }

}