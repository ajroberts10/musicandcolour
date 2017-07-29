var controller = require('../../src/controllers/contactController');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Contact Controller Tests', function() {

  it('renders the contact page', function(done) {
    var response =  {render: sinon.stub()}
    var request  = {};
    controller.getIndex(request, response);

    expect(response.render.called).to.equal(true);
    expect(response.render.firstCall.args[0]).to.equal('partials/contact.html');
    expect(response.render.firstCall.args[1].title).to.equal('Contact Us');   
    done(); 
  });

//   it('should respond with redirect on post', function(done) {
//     var response =  {render: sinon.stub()}
//     var request  = { body: {
//         name: 'test',
//         email: 'test@test.com',
//         message: 'test'
//     }};
//     controller.submitForm(request, response);
//     expect(response.render.called).to.equal(true);
//   });
});
