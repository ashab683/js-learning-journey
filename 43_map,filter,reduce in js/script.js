// const months = ['january','february','march','april','may','december']

// // const capitalMonths = ( months.map((month,index,array) =>{
// //     console.log(index + 1,month);
// //     return month.toUpperCase()
// // }));


// const filteredMonths =  months.filter((month,index,array) =>{
//     // console.log(index + 1,month);
//     // console.log(array);
//     return month.toUpperCase()
// });


// const filteredMonths =  months.filter((month,index,array) =>{
//     // console.log(index + 1,month);
//     // console.log(array);
//     return month.length <=5
// });
// const filteredMonths =  months.filter((month,index,array) =>{
//     // console.log(index + 1,month);
//     // console.log(array);
//     return month.length >=5
// });
const months = ['january','february','march','april','may','december']

const capitalMonths = ( months.map((month,index,array) =>{
    console.log(index + 1,month);
    return month.toUpperCase()
}));

const filteredMonths =  months.filter((month,index,array) =>{
    console.log(month);
    return month.toLowerCase().includes('m')
        
})

const students = [
    {
        name:'Adarsh',
        age:21,
    },
    {
        name:'Akash',
        age:18,
    },
    {
             name:'harsh',
        age:17,
    },
]

const adultStudents = students.filter((student) => {
    return student.age>=18
}).map((student) => {
    return student.name
}).filter((student) => {
    return student.includes('A')
})