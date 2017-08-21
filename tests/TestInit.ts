import { CONTROLLER_TYPES } from './../src/types/ControllerTypes';
import { UserController } from './../src/controllers/UserController';
import { App } from '../src/_core/App';
import * as mocha from 'mocha';
import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');


let app: App = App.getInstance();

chai.use(chaiHttp);
const expect = chai.expect;

export { 
    mocha,
    chaiHttp,
    chai,
    sinon,
    app,
    expect
};