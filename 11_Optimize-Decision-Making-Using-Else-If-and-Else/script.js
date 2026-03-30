const username = prompt('please enter your name.') 
const userAge =  +prompt('please enter your age') || 18;
debugger
if(!username) {
    username = 'procodrr'
}
if(username) {
    console.log(`name:${username}`)
}
if (userAge) {
    console.log(`sge:${userAge}`)
}

console.log(`name:${username}`);
console.log(`age:${userAge}`);




 if(userAge>=0 && userAge<=4) {
 console.log(` ${username} is a kid.`)
console.log('and he is playing .')
 }
else if(userAge>=5 && userAge<=17) {
 console.log(` ${username} is a school student.`)
console.log('and he is learning science. and math.')
 }

else if(userAge>=18 && userAge<=24) {
 console.log(` ${username} is a college student.`)
console.log('and he is learning computer science.')
 }

else if(userAge>=18 && userAge<=45) {
 console.log(`${username} is a working professional.`)
console.log(`and he is learning web developer.`)
 }else if(userAge>45 && userAge<=121){
 console.log(`${username} is retired.`)
console.log('and he reads newspaper.')
 }else if(userAge<=121){
 console.log(`${username} is immortal.`)
console.log('and he reads newspaper.')
 } else if(userAge<0){
 console.log(`$please enter a valid age`)

 }
console.log('program ended!!');