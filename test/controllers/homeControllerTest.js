var controller = require('../../src/controllers/homeController');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Home Controller Tests', function() {
  var response =  {render: sinon.stub()}
  var request  = {};
  controller.getIndex(request, response);

  it('renders the home page', function(done) {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/home.html');
    expect(response.render.firstCall.args[1].title).to.equal('Home');   
    done(); 
  });
});
