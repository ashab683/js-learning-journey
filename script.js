const container = document.querySelector(".container")

for(let i = 1;i<=100;i++){

    const imageContainer = document.createElement('div')

imageContainer.classList.add('img-container')

const newImage = document.createElement('img')
newImage.src  = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`


const paragraph = document.createElement('p')
paragraph.innerText = i


imageContainer.append(newImage,paragraph)
container.append(imageContainer)
}
