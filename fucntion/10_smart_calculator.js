// Question 10: 

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

const num1 = 20;
const num2 = 10;

console.log(`Addition: ${num1} + ${num2} = ${calculate(num1, num2, add)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${calculate(num1, num2, subtract)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${calculate(num1, num2, multiply)}`);
console.log(`Division: ${num1} / ${num2} = ${calculate(num1, num2, divide)}`);

// Example division-by-zero check:
console.log(`Division by zero: ${calculate(20, 0, divide)}`);
