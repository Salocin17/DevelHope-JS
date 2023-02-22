//function isAdult(person) {
//  return person.age >= 18;
//}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {id, firstName, lastName, age} = person;

const isAdult = () => age >= 18;

console.log(isAdult(person));