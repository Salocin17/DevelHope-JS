const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function filter() {
  const element = {};
  for (const key in person) {
    typeof person[key] == 'number' ? element[key] = person[key] : null;
    }
    return element;
  }


const json = JSON.stringify(filter(person));

console.log(json); // Should return: { id: 1, age: 25 }