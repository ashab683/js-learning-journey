// const allImages = document.images
// const allImages = document.getElementsByTagName('img')// const cssImage = document.getElementsByClassName('css-image')
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelector('.css-image')
// const cssImage = document.querySelectorAll('#css-image')
const jsImage = document.querySelector('[alt = "javascript roadmap"]')
// const li = document.querySelector('ul ')

const allImages = document.querySelectorAll('img')

const ImageUrl = [
   'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=' 
   ,'https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_user_personalization&w=740&q=80'
   ,'https://t4.ftcdn.net/jpg/01/03/25/83/360_F_103258397_TojrlYJWzaAIBes3ICEa2S7hx4U2cUMw.jpg'

]

// allImages[0].src = ImageUrl[0]
// allImages[1].src = ImageUrl[1]
// allImages[2].src = ImageUrl[2]

// for(let i = 0;i<allImages.length;i++){
//     allImages[i].src = ImageUrl[i]
// }
allImages.forEach((image,i) => {
    image.src = ImageUrl[i]
});
