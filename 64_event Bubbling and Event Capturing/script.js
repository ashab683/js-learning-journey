const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click',(e) =>{
    console.log('6.window event Listener');
})

document.body.addEventListener('click',(e) =>{
    console.log('5.document event Listener');
})
document.addEventListener ('click',(e) =>{
    console.log('4.document event Listener');
})

green.addEventListener('click',(e) =>{
    console.log('3.green event Listener');
})
pink.addEventListener('click',(e) =>{
    console.log('2.pink event Listener');
})
blue.addEventListener('click',(e) =>{
    // e.stopPropagation()
    console.log('1.blue event Listener');
})