var express = require('express');

var app = express();



app.use(express.static('public'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

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

bookRouter = require('./src/routes/bookRoutes')(nav)
app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render', nav:
        [
            {
                Link: '/Books',
                Text: 'Books'
            },
            {
                Link: '/Authors',
                Text: 'Authors'
            }
        ]
    });
});

var port = 5000;


app.listen(port, function(error) {
    console.log('server running on port ' + port);
});