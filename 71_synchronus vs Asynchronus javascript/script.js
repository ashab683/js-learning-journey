const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  // xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = JSON.parse(xhr.response).message
    console.log(xhr);
  })



  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', false)
  xhr.send()

//   alert('hello')
})

// const blockingBtn = document.querySelector('.blocking-button')
// blockingBtn.addEventListener('click',()=>{
    
// const startTime = Date.now()
// let currentTime = startTime

// while(startTime + 4000 >currentTime){
//     currentTime = Date.now()
// }
// })