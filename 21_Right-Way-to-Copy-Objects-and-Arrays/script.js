// const username1 = 'anurag'
// let username2 = username2 
// let username2 = username2 + 'singh'
const fruits = ['mango','apple','orange']

// const myFruits = fruits

// myFruits.push('dates','grapes')

const myFruits = []
Object.assign(myFruits,fruits)

const user1 = {
    firstName : 'mohd',
    lastName : 'ashab',
    pata:{
        city:'kanpur',
        pinCode :280001,
    },
    subject:['physics' , 'cs' , 'maths']
}
// const user2  = {}
//shalow copy
// Object.assign(user2,user1)

const user2 = { ...user1} //spread operator


