var http = require('http');
var config = require('../../config/config');
var request = require('superagent');


var getPlaylist = function(callback) {

    request
        .get('https://api.soundcloud.com/playlists/85980757?client_id=' + config.key)
        .end(function(err, res) {
            if (!err) {
                var playlist = res.body.tracks;
                callback(null, playlist);
            } else {
                callback('Error Occurred!');
            }
        });
};

module.exports = {
    getPlaylist: getPlaylist
}