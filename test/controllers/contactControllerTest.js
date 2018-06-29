import controller from '../../src/controllers/contactController';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Contact Controller Tests', () => {
    it('renders the contact page', done => {
        const response = { render: sinon.stub() };
        const request = {};
        controller.getIndex(request, response);

        expect(response.render.called).to.equal(true);
        expect(response.render.firstCall.args[0]).to.equal('partials/contact.html');
        expect(response.render.firstCall.args[1].title).to.equal('Contact Us');
        done();
    });
});
