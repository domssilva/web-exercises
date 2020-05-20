let Person = function (firstAndLast) {

  let firstName, lastName, fullName;
  [firstName, lastName] = firstAndLast.split(' ');
  fullName = `${firstName} ${lastName}`;

  this.getFirstName = () => {
    return firstName;
  }

  this.setFirstName = (name) => {
    firstName = name;
    fullName = `${firstName} ${lastName}`;
  }

  this.getLastName = () => {
    return lastName;
  }

  this.setLastName = (surname) => {
    lastName = surname;
    fullName = `${firstName} ${lastName}`;
  }

  this.getFullName = () => {
    return fullName;
  }

  this.setFullName = (newFullName) => {
    [firstName, lastName] = newFullName.split(' ');
    fullName = newFullName;
  }

}

let bob = new Person('Bob Ross');

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFullName('Hasjekk Curry');
console.log(bob.getFullName());
console.log(bob instanceof Person);
