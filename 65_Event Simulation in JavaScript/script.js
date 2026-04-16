const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})



setTimeout(()=> {
    input.focus()
    console.log('input focus');
},1000)
setTimeout(()=> {
    input.blur()
    console.log('input blurred');
},1000)


// const intervalId = setInterval(() => {
//     if(count>999){
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },5)