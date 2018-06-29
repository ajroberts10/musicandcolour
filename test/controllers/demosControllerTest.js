import { expect } from 'chai';
import sinon from 'sinon';

const Proxyquire = require('proxyquire').noCallThru();
const expectedTracks = [{'track1' : 'test'}];

const getSubject = deps => Proxyquire('../../src/controllers/demosController', deps || {});

describe('Demo Controller test', () => {

  const response =  {render: sinon.stub()}
  const request  = {};

  const service = {
    getPlaylist: sinon.stub().yieldsAsync(null, expectedTracks)
  };

  const subject = getSubject({
    '../services/soundcloudService': service
  });

  subject.getIndex(request, response);

  it('should get the playlist', () => {
    expect(service.getPlaylist.calledOnce).to.equal(true);

  });

  it ('should render the demos page', () => {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/demos.html');
    expect(response.render.firstCall.args[1].title).to.equal('Demos');
  });

  it ('should send an array of json objects as part of the response', () => {
    expect(response.render.firstCall.args[1].demos).to.be.an('array');
    expect(response.render.firstCall.args[1].demos[0]).to.be.an('object');
    expect(response.render.firstCall.args[1].demos[0]).to.deep.equal({'track1' : 'test'});
  });

});
