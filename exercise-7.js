class Person {
  firstName = "";
  lastName = "";
  age = 0;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newName) {
    this.firstName = this.newName;
  }

  get firstName() {
    return this.firstName;
  }

  set lastName(newLast) {
    this.lastName = this.newLast;
  }

  get lastName() {
    return this.lastName;
  }

  set age (newAge) {
    this.age = this.newAge;
  }

  get age() {
    return this.newAge;
  }

  get  fullName () {
     return (this.firstName +" "+ this.lastName);
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);