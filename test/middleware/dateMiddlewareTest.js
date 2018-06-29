import middleware from '../../src/middleware/dateMiddleware';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Date Middleware Tests', () => {
    const req = {};
    const res = {locals: {}};
    const expectedYear = new Date().getFullYear();


    before(done => {
        middleware(req, res, done);
    });

    it('gets current year', done => {
        expect(res.locals.year).to.equal(expectedYear);
        done();
    });
});
