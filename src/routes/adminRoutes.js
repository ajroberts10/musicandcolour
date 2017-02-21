var express = require('express');
var mongodb = require('mongodb').MongoClient;
var adminRouter = express.Router();

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

var router = function(nav)  {

    adminRouter.route('/addbooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });

        });

    return adminRouter;
}

module.exports = router;