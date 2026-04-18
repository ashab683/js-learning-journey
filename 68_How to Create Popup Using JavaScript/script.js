const button = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup-container')
const overLay = document.querySelector('.overlay')

button.addEventListener('click',() => {
    popup.classList.add('popup-open')
})

closeIcon.addEventListener('click',() => {
    popup.classList.remove('popup-open')
})
overLay.addEventListener('click',() => {
    popup.classList.remove('popup-open')
    
})

popup.addEventListener('click', (e) => {
    e.stopPropagation()
})

popupContainer.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open')
    popupContainer.classList.remove('popup-open')
})