var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello world');
});

var port = 5000;


app.listen(port, function(error) {
    console.log('server running on port ' + port);
});