const path = require('path');

//Base file name
console.log("The filename of current running file is : "+path.basename(__filename));

//Directory name
console.log("The filename of current running file is : "+path.dirname(__filename));

//Extension name
console.log("The extension of current running file is : "+path.extname(__filename));

//Create path object
console.log("The path object of current running file is : \n", path.parse(__filename));

//Cancatenate path
console.log("The result of path cancatenation is : "+path.join(__dirname,'test','test.html'));