var express = require('express');

var bookRouter = express.Router();

var router = function(nav)  {
    var books =
            [
                {
                    "title" : "The Lightning Thief",
                    "author" : "Rick Riordan",
                    "genre" : "fantasy",
                    "read" : true
                },
                {
                    "title" : "The Da Vinci Code",
                    "author" : "Dan Brown",
                    "genre" : "fantasy",
                    "read" : true
                },
                {
                    "title" : "A Nother Book",
                    "author" : "Some Person",
                    "genre" : "fantasy",
                    "read" : false
                },
                {
                    "title" : "One Last Book",
                    "author" : "An Other Author",
                    "genre" : "fantasy",
                    "read" : false
                }
            ];

    bookRouter.route('/')
        .get(function(req, res) {
            res.render('bookListView', {
                title: 'Books', 
                nav:nav,
                books: books
            });
        })

    bookRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id
            res.render('bookView', {
                title: 'Books', 
                nav:nav,
                book: books[id]
            });
        })

    return bookRouter;
}

module.exports = router;
