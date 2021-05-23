alert('Welcome to access js basics!');


// Varaiable
var msg1 = 'Demo for variable and type number';
console.log(msg1);
var a = 5;
console.log(a, typeof(a));


// Type string
var msg2 = 'Demo for variable and type string';
console.log(msg2);
var b = 'Mohsin';
console.log(b, typeof(b));


// Boolean
var msg3 = 'Demo for boolean';
console.log(msg3);
var do_exerxise = true;
console.log(do_exerxise, typeof(do_exerxise));


// Null value
var msg4 = 'Demo for null';
console.log(msg4);
var nothing = null;
console.log(nothing, typeof(nothing));


// adding two numbers
var msg5 = 'Adding two numbers';
console.log(msg5);
var c = 10;
var d = 70;
var sum = c + d;
console.log(sum);

// if statement
var msg6 = 'If statement demo';
console.log(msg6);
if (3 > 2) {
    console.log(true);
} else {
    console.log(false);
}

// switch case
let percentage = 25;
switch (percentage) {
    case (percentage < 35):
        console.log('fail');
        break;
    case (percentage > 35 && percentage < 60):
        console.log('Second Class');
        break;
    case (percentage > 60):
        console.log('First Class');
        break;
}

// function
function subtract(x, y) {
    console.log(x - y);
}

subtract(45, 9);

// hoisting
console.log(t);
var t = 1000;