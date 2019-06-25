// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res){
//    res.send('GET route on things.');
// });
// router.post('/', function(req, res){
//    res.send('POST route on things.');
// });

// //export this router to use in our index.js
// module.exports = router;
const sqlite3 = require('sqlite3').verbose()


let userDB = new sqlite3.Database("./file.db", 
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
    (err) => { 
        // do your thing 
    });