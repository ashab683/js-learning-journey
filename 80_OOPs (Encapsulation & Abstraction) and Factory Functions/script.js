// const user1 = {
//   firstName: 'Mohd',
//   lastName: 'Ashab',
//   age: 19,
//  getAgeYear: function (){
//  return new Date().getFullYear() -user.age
// }

// }

function creatUser(FirstName,LastName,age){
    const user ={
  FirstName,
  LastName,
  age,
  getAgeYear(){
     return new Date().getFullYear() - user.age

  },
    }
    return user
}

const user1 = creatUser('aman','singh',23)
const user2 = creatUser('mohd','ashab',19)

