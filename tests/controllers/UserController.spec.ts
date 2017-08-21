import { mocha, chaiHttp, chai, app, expect } from '../TestInit'

let res: ChaiHttp.Response;

describe('GET /user/', () => {

    it('Must respond with array in JSON with 1 element', async () => {
        res = await chai.request(app).get('/user');
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(1);
    });

    it('The first user should be called Wender Machado', async() => {
        res = await chai.request(app).get('/user');
        let wenderMachado = res.body.find(user => user.name === 'Wender Machado');
        expect(wenderMachado).to.exist;
        expect(wenderMachado).to.have.all.keys([
            'id',
            'name'
        ]);
    });

});