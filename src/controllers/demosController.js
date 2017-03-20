var aboutController = function(nav) {
    var getIndex = function(req, res) {
        var demos = require('../../config/demos');
        res.render('partials/demos.html', {
            title: 'Demos',
            demos: demos.tracks
        });
    };   

    return {
        getIndex: getIndex
    } 
};

module.exports = aboutController;
