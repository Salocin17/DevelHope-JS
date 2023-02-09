function sumUntil(maxValue) {
  let sum = 0;
  for (let i = 1; i <= maxValue; i++) {
     sum = sum + i;
  }
  console.log(sum);
}

console.log(sumUntil(5));