var controller = require('../../src/controllers/aboutController')();
var expect = require('chai').expect;
var sinon = require('sinon');

describe('About Controller Tests', function() {
  var response =  {render: sinon.stub()}
  var request  = {};
  controller.getIndex(request, response);

  it('renders the about page', function(done) {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/about.html');
    expect(response.render.firstCall.args[1].title).to.equal('About');   
    done(); 
  });
});