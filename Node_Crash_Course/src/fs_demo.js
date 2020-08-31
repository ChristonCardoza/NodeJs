const fs = require('fs');
const path = require('path');

// //Create a directory
// fs.mkdir(path.join(__dirname,'test'),{}, err => {
//     if (err) throw err;
//     console.log("Folder is Created....");
// });

// //Write a file
// fs.writeFile(path.join(__dirname,'test','hello.txt'),'Hello world ',{}, err => {
//     if (err) throw err;
//     console.log("File is created and written....");
// });

// // Append file
// fs.appendFile(path.join(__dirname,'test','hello.txt'),' Turn on the beast mode',{}, err => {
//     if (err) throw err;
//     console.log("File data is appended ....");

// });

// // Read file
// fs.readFile(path.join(__dirname,'test','hello.txt'),'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data);

// });

//Rename a file
fs.rename(path.join(__dirname,'test','hello.txt'),path.join(__dirname,'test','helloworld.txt'), err => {
    if (err) throw err;
    console.log("File is re-named....");

});
