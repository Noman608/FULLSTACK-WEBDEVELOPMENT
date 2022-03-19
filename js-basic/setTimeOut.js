function sayHello() {
    console.log("Hello!!");
}

function SayHello() {
    console.log(" Hey Hello!!");
}
console.log("and The time out is start!!");

var x = setTimeout(sayHello, 500);
var y = setTimeout(SayHello, 1000);




////////

setInterval(function() {
    console.log("this is after 1 sec");
}, 1000);