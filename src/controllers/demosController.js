var demoService = require('../services/soundcloudService');

var getIndex = function(req, res) {
        demoService.getPlaylist(function(err, tracks) {
                res.render('partials/demos.html', {
                title: 'Demos',
                demos: tracks
            });
        });   
    };   

module.exports = {
    getIndex: getIndex
}