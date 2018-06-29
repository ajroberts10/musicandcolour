import config from '../../config/config';
import request from 'superagent';

const getPlaylist = callback => {
    request
        .get('https://api.soundcloud.com/playlists/85980757?client_id=' + config.key)
        .end((err, res) => {
            if (!err) {
                callback(null, res.body.tracks);
            } else {
                callback('Error Occurred!');
            }
        });
};

module.exports = {
    getPlaylist: getPlaylist
}
