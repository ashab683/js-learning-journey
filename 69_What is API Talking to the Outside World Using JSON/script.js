fetch('https://images.dog.ceo/breeds/shiba/mamehiko03.jpg')
      .then(response => response.json())
      .then(json =>{
        console.log('got the data');
         console.log(json)
      })