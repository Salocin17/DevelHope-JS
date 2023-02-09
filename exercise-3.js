const sum = (a, b) =>  a + b;


const substract = (a, b) =>  a - b;


const multiply = (a, b) =>  a * b;


const divide = (a, b) => a / b;


const log = (value) => console.log(value);

console.log(divide(substract(multiply(sum(2, 4), sum(5, 2)), 2), 5));
