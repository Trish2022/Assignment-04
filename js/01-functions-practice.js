//STEP 1
function halfNumber(number) {
    "use strict";
    return String("Half of " +number+ " is " +(number/2));
}
console.log(halfNumber(4));

//STEP 2
function squareNumber(number) {
    'use strict';
    return String("The result of squaring the number " + number + " is " + (number*number) + ".");
}
console.log(squareNumber(3));

//STEP 3  
x = 2;
y = 4;
const percentOf = function (x,y) {
    return x % y;
}
console.log("The percent of "+ x +" is "+ y);
function percentof(num1,num2) {
    var percent = ((num1*100)/num2);
    return String(num1 + " is " + percent + " % of " + num2 + ".")
}
console.log(percentof(2,4));

//STEP 4
function findModulus(num1, num2) {
    "use strict";
    var divRes = Math.floor((num1/num2));
    var mult = (divRes * num2);
    var modulus = ((num1) - mult);
    return String(modulus +  " is the modulus of " + num1 + " and " + num2 +". ")
}
console.log(findModulus(17,5));

//STEP 5 Need to work on this more
function calculate(numbers) {
    base = Number(numbers);
    for (let i = 0; i < arguments.length; i++) {
        base += Number(arguments[i])
    }
    return String(base) + '<br>';
}
window.document.write(calculate(5, 20, 100, 500, 34))

// Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.
