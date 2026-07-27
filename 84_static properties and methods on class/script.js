class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  static hi = 'hello'

  static run = 'running'
  static {
    console.log('hey');
    this.h1 = 'hello'
    this.getFullName = function() {
      return this.firstName + ' ' + this.lastName
    }
  }
  getBirthYear( ) {
    return new Date().getFullYear() - this.age
  }
  static getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}



const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)
