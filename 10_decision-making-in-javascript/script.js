const username = prompt('please enter your name.') || ('mohd ashab');
const userAge =  +prompt('please enter your age') || 18;
console.log(`name:${username}`);
console.log(`age:${userAge}`);

if(userAge>=0 && userAge<=4) {
 console.log(` ${username} is a kid.`)
console.log('and he is playing .')
 }
if(userAge>=5 && userAge<=17) {
 console.log(` ${username} is a school student.`)
console.log('and he is learning science. and math.')
 }

if(userAge>=18 && userAge<=24) {
 console.log(` ${username} is a college student.`)
console.log('and he is learning computer science.')
 }

if(userAge>=18 && userAge<=45) {
 console.log(`${username} is a working professional.`)
console.log(`and he is learning web developer.`)
 }

if(userAge>=45){
 console.log(`${username} is retired.`)
console.log('and he reads newspaper.')
 }
console.log('program ended!!');