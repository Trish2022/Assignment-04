// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the numbers input from user
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);


// IMPORT THE MODULE

// CALL THE APPROPRIATE FUNCTION



// The Basic Calculator
// In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions and modules. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:
// 1.	Create a module that abstracts away the main calculation logic of your application. This module will have a private function called calculate and expose four different functions (add, subtract, multiply, and divide). The shell of this module with some basic instruction has already been outlined for you.
// 2.	In the main script, prompt the user for a number and store that in a variable. Convert that to a number.
// 3.	Then, prompt the user for a second number and store that in a variable. Convert that to a number.
// 4.	Finally, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// 5.	Use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation by calling the appropriate function from the module.
// 6.	Display the result of the calculation within an alert.
// 7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
