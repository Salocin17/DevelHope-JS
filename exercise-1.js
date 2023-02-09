const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = "Simon";

// La modifica si ripercuote anche su person1 perché person2 é solo un riferimento al primo oggetto, ovvero person1
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
