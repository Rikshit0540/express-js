// var express = require('express');
// var router = express.Router();


// router.get('/hello', function(req,res){
//     res.send("Hello world");
// });

// router.post('/', function(req, res){
//     res.send("You just called the post method at '/hello'!\n");
//  });

// module.exports = router;

// var express = require('express');
// var app = express();

// app.get('/:id/:name', function(req, res){
//    res.send('The id you specified is ' + req.params.id + 'name is:' + req.params.name);
// });
// app.use(function(req,res){
//     console.log("date is "+ Date.now());
//     next();
// });
// app.listen(3000);
var express = require('express');
var app = express();

//First middleware before response is sent
// 
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('dynamic',{
        name:"Rikshit",
        url:"https://google.com",
        user:{
            name:"Auyush",
            age:"15"
        }
    });
});

app.listen(3000);
