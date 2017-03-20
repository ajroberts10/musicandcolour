var express = require('express');
var demosRouter = express.Router();

var router = function()  {

    var demosController = require('../controllers/demosController')();

    demosRouter.route('/')
        .get(demosController.getIndex);

    return demosRouter;
};

module.exports = router;
