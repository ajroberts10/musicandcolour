import set from '../../data/tracks.json';

const getIndex = (req, res) => {
    res.render('partials/live.html', {
        title: 'Live',
        setList: set.tracks
    });
};

module.exports = {
    getIndex
};
