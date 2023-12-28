// const fs = require('fs')

// fs.readFile('file.txt','utf-8',(err,data) =>{
//     // function removeSpace(str){
//     //     str.split('').
//     // data.replace(/\s/g, '')

//         let removeSpace = data.split(' ').join('');
    
//     fs.writeFile('file.txt', removeSpace ,(err,data) => {
//         console.log("SAVED");
//     })
// })

function removeExtraSpaces(filename) {
    const fs = require('fs');
  
    const fileContents = fs.readFileSync(filename, 'utf8');
  
    const fileContentsWithoutExtraSpaces = fileContents.replace(/\s+/g, ' ');
  
    fs.writeFileSync(filename, fileContentsWithoutExtraSpaces);
}

const filename = 'file.txt';
removeExtraSpaces(filename);
