// const fs = require('fs')

// fs.readFile('a.txt','utf-8', (err,data) => {
//     console.log(data);
// })

// let a = 0
// for (let i = 0; i < 100000000; i++) {
//     a = a + 1
// }
// console.log(a);

//Write to a file

let fs = require('fs')

fs.writeFile('a.txt', 'New version' , (data)=>{
    console.log("Saved");
})
