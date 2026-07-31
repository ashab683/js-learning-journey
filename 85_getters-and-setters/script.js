class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  get FullName() {
    return this.firstName + ' ' + this.lastName
  }
  set FullName(value){
   const [firstName,lastName] = value.split(' ')
    const [firstName,lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName  = lastName

  }
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

// const user  = {
//     firstName:'mohd',
//     lastName:'ashab',
//    get fullName(){ 
//         return `${this.lastName} ${this.lastName}`
//     },
//     set fullName(value){
//         const [firstName,lastName] = value.split(' ')
//         this.firstName = firstName
//         this.lastName  = lastName
//     }
// }

// console.log(user.fullName());
// user.fullName = 'akash'