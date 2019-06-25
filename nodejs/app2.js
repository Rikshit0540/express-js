var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('file2');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
const http = require('http');
var Request = require("request");


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true })); 
// app.engine('jpg', require('ejs').renderFile);
app.use(express.static(__dirname + "/static/images"));

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    console.log(__dirname);
    res.render('welcome.html');
});

app.get('/data', function(req, res){
    fs.readFile("movieJSN.txt",'utf8',function(err,data){
        data = JSON.parse(data);
        console.log(data[0].name);
        res.send(data);
    });
});

app.get('/indexx',function(req,res){
    // var name = "rikshit";
    // console.log("asdasd",name);
    Request.get("http://127.0.0.1:3000/data", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    moviedata = JSON.parse(body);
    console.log("jjjj",moviedata[1].name);
    var name ="",image="",summ="";
    for(n in moviedata){
        name = name + '\t' + moviedata[n].name + ',';
        // image = image + "<br>" + moviedata[n].img;
        summ = summ + ", " + moviedata[n].summary;
    }
    img1 = moviedata[0].img;
    img2 = moviedata[1].img;
    img3 = moviedata[2].img;

    console.log("asds",name);
    console.log("img",image);
    console.log("summa", summ);
    res.render('indexx.html',{name:name, img1:img1,img2:img2,img3:img3, summ:summ});
    });

});

app.get('/register',function(req,res){
    res.render('register.html');
});

app.post('/detail',function(req,res){
    phoneno = req.body.phonenumber;
    fname = req.body.firstname;
    lname = req.body.lastname;
    email = req.body.email;
    username = req.body.username;
    password = req.body.password1;
    name = fname+" "+lname;
    console.log('phoneno',phoneno,name,email,username,password);
    db.run('INSERT INTO users(phoneno, name, email, username, password) VALUES(?, ?, ?, ?, ?)', [phoneno,name,email,username,password], (err) => {
        if(err) {
            return console.log(err.message); 
        }
        console.log('Row was added to the table');
    });
    res.redirect('/');
});
    
app.post('/page', function(req,res){
    namee = req.body.name;
    password = req.body.psw;
    console.log("asdasdreq",namee, "psw",password);
    db.all('select * from users where username=? and password=? limit 1', [namee, password], function(err, rows){
        console.log(rows);
        if(rows==''){
            console.log("invalid");
            res.send({ asd: "Invalid details" });
        }
        else{
        for(s in rows){
            console.log("rows",rows[s].id);
            row1 = rows[s].id;
            row2 = rows[s].phoneno;
            row3 = rows[s].name;
            row4 = rows[s].email;
            row5 = rows[s].username;
            row6 = rows[s].Password;
        }
        console.log("row",row1,row2,row3,row4,row5,row6);
        // res.render('page.html',{ row1:row1 });
        res.send({ row1:row1,row2:row2,row3:row3,row4:row4,row5:row5,row6:row6});
        }
    
    });

});

app.listen(3000,()=>
{
    console.log("server started");
});