
// Part 1
// Create a class called User using the ES6 class keyword.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
}

User.prototype.comparePasswords = function compare(guess) {
  if (guess === this.password) {
    return true;
  }
  return false;
};

class Animal {
  constructor(options) {
    this.age = options.age;
    this.growOlder = function() {
      return this.age + 1;
    };
  }
}

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
}

Cat.prototype.meow = function(){
  return `${this.name} meowed!`;

};
// code here

// Part 2
// Create a class called `Animal` and a class called `Cat` using ES6 classes.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age after incrementing it.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

// code here

/* eslint-disable no-undef */
const snowball = new Cat({
  name: 'Snowball II',
  age: 5,
});

const ben = new User({
  email: 'ben@lambdaschool.com',
  password: 'meow',
});

// 
module.exports = {
  User,
  Cat,
};
