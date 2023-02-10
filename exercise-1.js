const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (let [key, val] of Object.entries(person)) {
  console.log(key + ": " + val);
}