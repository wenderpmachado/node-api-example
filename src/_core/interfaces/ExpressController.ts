import { Controller } from './Controller';

export interface ExpressController extends Controller {
    getPrefix(): string;
}