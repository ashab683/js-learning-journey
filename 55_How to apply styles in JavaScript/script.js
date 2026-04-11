const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

h1.style.color = 'hotpink'
h1.style.backgroundColor = 'skyblue'

const allLinks = document.querySelectorAll('a')

// allLinks[0].style.color = 'teal'

// for(let i = 0; i<allLinks.length;i++) {
//     allLinks[i].style.color = 'teal'
// }

// for (let link of allLinks) {
//     link.style.color = 'teal'
//     link.style.textDecoration = 'none'
//     link.style.fontWeight = 700
//     link.style.fontFamily = 'cursive'
// }
// link.style.cssText = `color: teal;
//    text-decoration-line:none;
//    font-weigth:700;
//     font-family: cursive;
//     font-size: 18px;
  // link.classList.add('')
// link.SetAttribute('class','green-link')

const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")