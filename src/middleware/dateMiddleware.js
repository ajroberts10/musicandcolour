var date = new Date();
var year = date.getFullYear();


module.exports = function (req, res, next) {
    res.locals.year = year;
    next();
};