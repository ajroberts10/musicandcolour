var express = require('express');
var homeRouter = express.Router();

var homeController = require('../controllers/homeController');

homeRouter.route('/')
    .get(homeController.getIndex);

module.exports = homeRouter;
