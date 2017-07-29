var express = require('express');
var liveRouter = express.Router();

var liveController = require('../controllers/liveController');

liveRouter.route('/')
    .get(liveController.getIndex);

module.exports = liveRouter;
