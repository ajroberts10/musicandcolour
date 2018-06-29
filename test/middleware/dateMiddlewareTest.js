import { expect } from 'chai';
import middleware from '../../src/middleware/dateMiddleware';

describe('Date Middleware Tests', () => {
    const req = {};
    const res = { locals: {} };
    const expectedYear = new Date().getFullYear();

    before(done => {
        middleware(req, res, done);
    });

    it('gets current year', done => {
        expect(res.locals.year).to.equal(expectedYear);
        done();
    });
});
