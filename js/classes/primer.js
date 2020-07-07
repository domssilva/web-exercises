class Human {

  constructor(name) {
    this.state = {
      name: 'Johnny',
      age: 0,
    };

    this.setState = function(newState) {
      this.state = newState;
    }
  }

  sayHi() {
    console.log(`hi. my name is ${this.state.name}`);
  }

  handleClick(newName) {
    this.setState({
      name: newName,
    });
  }

}

let person = new Human('Johnny');
person.handleClick('Kenny');
person.sayHi();