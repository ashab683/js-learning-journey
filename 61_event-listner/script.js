const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
function sayHI(){
    console.log('hiii');
}

// h1.onclick = sayHI
 

h1.addEventListener('click',sayHI)
h1.addEventListener('click',function(){
    console.log('second hi');
})
let count = 1

card.addEventListener('click',()=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    container.append(newCard)
    newCard.innerText = count
    count++
    console.log(newCard);
})