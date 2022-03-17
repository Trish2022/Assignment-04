
// ADD A PRIVATE FUNCTION CALLED CALCULATE
// ADD FOUR PUBLIC FUNCTIONS - ADD SUBTRACT MULTIPLY DIVIDE

// take the input for the calculation type (+, -, *, / )
const calculate = prompt('Enter operator ( either +, -, * or / ): ');

// take the numbers input from user
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (calculate == '+') {
    result = number1 + number2;
}
else if (calculate == '-') {
    result = number1 - number2;
}
else if (calculate == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${calculate} ${number2} = ${result}`);

// EXPORT THE FOUR PUBLIC FUNCTIONS