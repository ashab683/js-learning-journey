
// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getBirthYear,
  
//   }
//   return user
// }

// createUser.commonMethods = {
//    getBirthYear: function () {
//       return new Date().getFullYear() - this.age
//     }
// }

function createUser(firstName,lastName,age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}
createUser.prototype.getBirthYear = function () {
       return new Date().getFullYear() - this.age
     }

 const user1 = new createUser('Aman', 'Mishra', 32)
const user2 = new createUser('Anurag', 'Singh', 72)

// const arr1 = [1,2]
// const arr2 = [3, 4]