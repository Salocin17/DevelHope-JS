function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    multiply = value * number;
  }
  inner();
  return multiply;
}

console.log(multiplyByTwo(4))

