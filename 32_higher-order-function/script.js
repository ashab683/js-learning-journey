function a (b) {
    console.dir(b);
    b()
}


function sayHi () {
    console.log('hiiiiiiiii');
}
 a(sayHi) //higher order function 


// callback function 

 a(function () {
    console.log('hiiiiiiiii');
})

