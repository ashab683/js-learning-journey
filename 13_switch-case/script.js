if (dayNumber === 0) {
  console.log('It is Sunday Today')
} else if (dayNumber === 1) {
  console.log('It is Monday Today')
} else if (dayNumber === 2) {
  console.log('It is Tuesday Today')
} else if (dayNumber === 3) {
  console.log('It is Wednesday Today')
} else if (dayNumber === 4) {
  console.log('It is Thursday Today')
} else if (dayNumber === 5) {
  console.log('It is Friday Today')
} else if (dayNumber === 6) {
  console.log('It is Saturday Today')
} else {
  console.log('Please Enter a Valid Day Number')
}

const dayNumber = 1

switch(dayNumber){
 case 0:

        // := switch statement symbol
    console.log('It is Sunday Today')
    console.log('hello');
    break

    case 1:
        console.log('it is monday today');
   break
    case 2:   
    console.log('it is tuesday today'); 
break
 case 3:   
    console.log('it is wednesday today'); 
break
     case 4:   
    console.log('it is thursday today'); 
break
     case 5:   
    console.log('it is friday today'); 
break
 case 6:   
    console.log('it is saturday today'); 
break
default:
     console.log('Please Enter a Valid Day Number')

}


const username = 'mohd ashab'
const userAge = 24
debugger
switch(true){
    case  (userAge >= 0 && userAge <= 4) :
         console.log(`${username} is a kid.`) 
         break

          case  (userAge >= 5 && userAge <= 17) :
         console.log(`${username} is a playing.`) 
         break
 case  (userAge >= 18 && userAge <= 24) :
         console.log(`${username} is a school student.`) 
         break
 case  (userAge >= 25 && userAge <= 45) :
         console.log(`${username} is a working profession.`) 
         break
 case  (userAge >= 45 && userAge <= 122) :
         console.log(`${username} is a retired.`) 
         break
 case  (userAge >= 0 && userAge <= 4) :
         console.log(`${username} is a kid.`) 
         break
 case  (userAge >= 122) :
         console.log(`${username} is a immortal.`) 
break
         default:
          console.log('Please Enter a Valid Age')      

}

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
} else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
} else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
} else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
} else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she reads newspaper.');
} else {
    console.log('Please Enter a Valid Age');
}

const grade = 'C'

switch(grade) {
    case 'A':
        console.log('your score is between 85% to 100%');
           break
        case 'B':
                console.log('your score is between 75% to 100%');
                break
                case 'C':
                            console.log('your score is between 60% to 100%');
break

      case 'D':
                            console.log('your score is between 50% to 100%');
break


      case 'E':
                            console.log('your score is between 30% to 100%');
break

default:
    console.log('sorry. you failed.');
}
console.log('program ended!')