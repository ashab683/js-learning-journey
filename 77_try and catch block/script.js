const user = {
    name:'Ashab',
    age:19,
}

try {
    console.log(user.address.city);

    console.log(a);

} catch(err){
   console.dir(err); 

}finally{
    console.log('hello world');
}

console.log(7+3);


// async function makeAsyncRequest() {
// try{
//      const url =
//       'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
//     return data
// } catch(err){
//     console.log(err);
// }
   

// }

// makeAsyncRequest()