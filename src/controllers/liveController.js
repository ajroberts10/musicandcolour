var set = require('../../data/tracks.json');

var getIndex = function(req, res) {
    res.render('partials/live.html', {
        title: 'Live',
        setList: set.tracks
    });
};   

module.exports = {
    getIndex: getIndex
}