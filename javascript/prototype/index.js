function Person() {
    this.age=18
}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
person.age=20;
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
console.log(person.age)
console.log(person.__proto__)