var aboutController = function(nav) {
    var getIndex = function(req, res) {
        res.render('partials/about.html', {
            title: 'About'
        });
    };   

    return {
        getIndex: getIndex
    } 
};

module.exports = aboutController;
