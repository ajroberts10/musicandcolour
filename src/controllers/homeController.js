const getIndex = (req, res) => {
    res.render('partials/home.html', {
        title: 'Home'
    });
};

module.exports = {
    getIndex: getIndex
};
