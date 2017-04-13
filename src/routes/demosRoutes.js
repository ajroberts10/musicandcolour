var express = require('express');
var demosRouter = express.Router();

var demosController = require('../controllers/demosController');

demosRouter.route('/')
    .get(demosController.getIndex);


module.exports = demosRouter;
