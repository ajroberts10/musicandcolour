const proxyquire = require('proxyquire').noCallThru();
var expect = require('chai').expect;
var sinon = require('sinon');
var expectedTracks = [{'track1' : 'test'}];

function getSubject(deps) {
  deps = deps || {};
  return proxyquire('../../src/controllers/demosController', deps);
}

describe('Demo Controller test', function() {

  var response =  {render: sinon.stub()}
  var request  = {};

  var service = {
    getPlaylist: sinon.stub().yieldsAsync(null, expectedTracks)
  };
  
  var subject = getSubject({
    '../services/soundcloudService': service
  });

  subject.getIndex(request, response);

  it('should get the playlist', function() {
    expect(service.getPlaylist.calledOnce).to.equal(true);
    
  });

  it ('should render the demos page', function() {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/demos.html');
    expect(response.render.firstCall.args[1].title).to.equal('Demos');
  });

  it ('should send an array of json objects as part of the response', function() {
    expect(response.render.firstCall.args[1].demos).to.be.an('array');
    expect(response.render.firstCall.args[1].demos[0]).to.be.an('object');
    expect(response.render.firstCall.args[1].demos[0]).to.deep.equal({'track1' : 'test'});
  });

});
