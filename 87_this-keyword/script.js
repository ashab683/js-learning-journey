// function HI(){
//     console.log(this);
//     this.hello = 'world'
// }
// new HI()

// const user =  {

//     firstName : 'mohd',
//     lastName : 'ashab',
//     tags:['a','b','c'],
//     printTags() {
//         console.log(this.tags);
//         this.tags.forEach(function(tags){
//             console.log(tags);
//         },this)
//     }
//     // fullName() {
//     //     function getAge() {
//     //         console.log('Getting Age');
//     //         console.log(this);
//     //     }
//         // return `${this.firstName} ${this.lastName}`;
//         // getAge()
//         // console.log(this);
//     }
// }

//  

class user {
    constructor() {
        this.firstName ='mohd'
        console.log(this);
    }
}

getUser() {
    console.log(this);
}
