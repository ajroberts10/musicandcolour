import demoService from '../services/soundcloudService';

const getIndex = (req, res) => {
    demoService.getPlaylist((err, tracks) => {
            res.render('partials/demos.html', {
            title: 'Demos',
            demos: tracks
        });
    });
};

module.exports = {
    getIndex: getIndex
}
