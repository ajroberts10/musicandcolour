var express = require('express');
var homeRouter = express.Router();

var router = function()  {

    var homeController = require('../controllers/homeController');

    homeRouter.route('/')
        .get(homeController.getIndex);

    return homeRouter;
};

module.exports = router;
