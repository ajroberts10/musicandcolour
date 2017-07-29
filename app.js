var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var dateMiddleware = require('./src/middleware/dateMiddleware');
const path = require('path');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(dateMiddleware);

app.set('views', 'src/views');
app.use(express.static(__dirname + '/public'));

nunjucks.configure('./src/views', {
    autoescape: true,
    express: app,
    watch: true
});

var homeRouter = require('./src/routes/homeRoutes');
var demosRouter = require('./src/routes/demosRoutes');
var contactRouter = require('./src/routes/contactRoutes');
var liveRouter = require('./src/routes/liveRoutes');

app.use('/', homeRouter);
app.use('/live', liveRouter);
app.use('/demos', demosRouter);
app.use('/contact', contactRouter);

var port = 5000;
if(app.get('env') == 'live') {
    var port = 80;
}

app.listen(port, function(error) {
    console.log('server running on port ' + port);
});
