// var app2 = require('./app2');

// var x = app2.counter(['asd','asd2','asd3']);
// console.log(x)

// console.log(app2.adder(6,7));
var events = require('events');
var util = require('util');
// var myemitter = new events.EventEmitter();

// myemitter.on('some event', function(mssg){
//     console.log(mssg)
// });

// myemitter.emit('some event','the event was emitted');
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var asd = new Person('asd');

var people = [james, asd]

people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name + ' said' + mssg)
    });
});
asdd.emit('speak' , ' hey hello')
// var time = 0;

// var timer = setInterval(function(){
//     time = time+2;
//     // console.log(time + " sec are passed");
//     if(time<4){
//         console.log(time + " sec are passed");
//     }
//     else{
//         clearInterval(timer)
//     }
// }, 2000);
// function callfunction(fun){
//     fun();
// }

// function sayhi(){
//     console.log("askjdkjashdk");
// }


// var asd = function(){
//     console.log('say hello');
// };

// callfunction(asd);
// callfunction(sayhi);