const os = require('os');

// Platform
 console.log("The os platform is : "+os.platform() );

 // Achitecture
 console.log("The os architecture is : "+os.arch() );

 // CPU core info
 console.log("The os cupu core info is : \n",os.cpus() );

 // Free Memory
 console.log("The os free memory is : "+os.freemem() );

// Total Memory
console.log("The os total memory is : "+os.totalmem() );

//Home Directory
console.log("The os home directory is : "+os.homedir() );

//Up Time
console.log("The os up-time is : "+os.uptime() );