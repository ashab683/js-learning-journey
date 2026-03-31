const user = {
  firstName :'aman',
 lastName : 'cristiano',
address:{
  city:'kanpur',
  pincode:"28001",
  state:'up',
  moteDetails:{
    population:32537232,
    area:'2322 sq km',

  },
},
age:18,
isGraduate: false,
 

}

object.seal(user)
object.freeze(user)

console.log('isGraduate' in user);


