import { mocha, chai, sinon, app, expect } from './../TestInit'
import * as express from 'express';
import { App } from "../../src/_core/App";

describe('App.ts', () => {

    it('should be created', () => {
        let app = App.getInstance();
        expect(app).to.be.not.equal(null);
    });

});