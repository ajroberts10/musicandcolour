var homeController = function() {
    var getIndex = function(req, res) {
        res.render('partials/home.html', {
            title: 'Home'
        });
    };   

    return {
        getIndex: getIndex
    } 
};

module.exports = homeController;