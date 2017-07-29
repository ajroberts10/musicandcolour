var controller = require('../../src/controllers/liveController');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Live Controller Tests', function() {
  var response =  {render: sinon.stub()}
  var request  = {};
  controller.getIndex(request, response);

  it('renders the live page', function(done) {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/live.html');
    expect(response.render.firstCall.args[1].title).to.equal('Live');   
    done(); 
  });
});
