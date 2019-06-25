var fs = require('fs');


// var readd = fs.readFileSync('read.txt', 'utf8');
// console.log(readd);
// fs.writeFileSync('write.txt',  "how are you")
fs.readFile('read.txt', 'utf8', function(err, data){
    fs.writeFileSync('write.txt', data);
});
