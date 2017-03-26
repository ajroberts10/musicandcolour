var demosController = function(nav) {
    var getIndex = function(req, res) {
        var demos = require('../../data/demos');
        res.render('partials/demos.html', {
            title: 'Demos',
            demos: demos.tracks
        });
    };   

    return {
        getIndex: getIndex
    } 
};

module.exports = demosController;
