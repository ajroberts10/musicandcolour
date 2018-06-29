import controller from '../../src/controllers/homeController';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Home Controller Tests', () => {
  const response =  {render: sinon.stub()}
  const request  = {};
  controller.getIndex(request, response);

  it('renders the home page', done => {
    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/home.html');
    expect(response.render.firstCall.args[1].title).to.equal('Home');
    done();
  });
});
