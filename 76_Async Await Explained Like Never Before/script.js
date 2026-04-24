
async function makeAsyncRequest(){ 
const url = "https://httpbin.org/delay/6";
    const response =   await fetch(url)
    const data = await response.json()
       console.log(data);
       return data
   
 
}


makeAsyncRequest().then((Data)=>{
    console.log(data);
})