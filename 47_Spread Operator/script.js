const num1 = [1,2,3,4]
const num2 = [5,6,7,8,9]

const joinedArray = [...num1, ...num2]

const user = {
    name:'ashab',
    age:19,
}

const updatedUser = {...user}

function add(){
    let sum = 0;
    for(let i = 0;i<arguments.length;i++) {
      sum = sum + arguments[i]
    }
    return sum
}