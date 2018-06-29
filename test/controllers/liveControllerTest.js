import controller from '../../src/controllers/liveController';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Live Controller Tests', () => {
  const response =  {render: sinon.stub()}
  const request  = {};
  controller.getIndex(request, response);

  it('renders the live page', done => {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/live.html');
    expect(response.render.firstCall.args[1].title).to.equal('Live');
    done();
  });
});
