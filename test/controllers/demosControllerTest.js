var controller = require('../../src/controllers/demosController')();
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Demos Controller Tests', function() {
  var response =  {render: sinon.stub()}
  var request  = {};
  controller.getIndex(request, response);

  it('renders the demos page', function(done) {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/demos.html');
    expect(response.render.firstCall.args[1].title).to.equal('Demos');   
    done(); 
  });
});