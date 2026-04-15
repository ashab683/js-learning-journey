const h1 = document.querySelector('h1')
const addCardButton = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

addCardButton.ddEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

addCardButton.ddEventListener('mousedown', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
addCardButton.ddEventListener('mouseup', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
h1.addEventListener('mouseenter', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
addCardButton.addEventListener('mousemove', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

addCardButton.addEventListener('mouseout', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
addCardButton.addEventListener('mouseover', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

addCardButton.addEventListener('wheel', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
addCardButton.addEventListener('touchstart', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})