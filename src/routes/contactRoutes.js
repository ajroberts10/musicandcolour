var express = require('express');
var contactRouter = express.Router();

var contactController = require('../controllers/contactController');

contactRouter.route('/')
    .get(contactController.getIndex);

contactRouter.route('/')
    .post(contactController.submitForm);

module.exports = contactRouter;
