const date = new Date();
const year = date.getFullYear();

module.exports = (req, res, next) => {
    res.locals.year = year;
    next();
};
