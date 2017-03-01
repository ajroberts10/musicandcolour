var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var nunjucks = require('nunjucks');
const path = require('path');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);

app.set('views', 'src/views');
app.use(express.static(__dirname + '/public'));

nunjucks.configure('./src/views', {
    autoescape: true,
    express: app,
    watch: true
});

var nav = [
    {
        Link: '/Books',
        Text: 'Book'
    },
    {
        Link: '/Authors',
        Text: 'Author'
    }
];

var homeRouter = require('./src/routes/homeRoutes')();
var aboutRouter = require('./src/routes/aboutRoutes')();
// var bookRouter = require('./src/routes/bookRoutes')(nav);
// var adminRouter = require('./src/routes/adminRoutes')(nav);
// var authRouter = require('./src/routes/authRoutes')(nav);

app.use('/', homeRouter);
app.use('/about', aboutRouter);
// app.use('/Books', bookRouter);
// app.use('/Admin', adminRouter);
// app.use('/Auth', authRouter);

var port = 5000;

app.listen(port, function(error) {
    console.log('server running on port ' + port);
});