const colors = ['white','pink','black','green','yellow']
// const colors1 = colors[0]
// const colors2 = colors[1]
const [color1,color2,color3] = colors
// const[,,,color4] = colors
const {3:color4,} = colors

const user = {
    name:'ashab',
    age:19,
    address:{
        city:'kanpur',
        state:'UP',
        },
}
// const name = user.name
// const age = user.age
const {name:username,age:userAge} = user
const{address:{city}} = user

function intro(age,name,address){
    console.log(age,name,address);
}
intro(user)
function printColor([a,b,,c]){
    console.log(a,b,c);
}
printColor(colors)
