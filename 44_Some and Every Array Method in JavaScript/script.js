const evenNumber = [0,2,3,4,6,8]

const result = evenNumber.some((num,i) => {
if(num%2 === 1){
console.log(i);
}
return num%2 === 1
})


const resultAns = evenNumber.every((num) => {
return num%2 === 1

})