//function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
//}

const sum = (...numbers) => numbers.reduce((a, b) => a + b);

console.log(sum(1, 2, 3, 4, 5));