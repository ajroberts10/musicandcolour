var middleware = require('../../src/middleware/dateMiddleware');

var expect = require('chai').expect;
var sinon = require('sinon');

describe('Date Middleware Tests', function() {
    var req = {};
    var res = {locals: {}};
    var expectedYear = new Date().getFullYear();
    

    before(function(done) {
        middleware(req, res, done);
    });

    it('gets current year', function(done) {
        
        expect(res.locals.year).to.equal(expectedYear);
        done(); 
    });
});