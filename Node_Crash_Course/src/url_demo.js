const url = require('url');

const myUrl = new URL("https://mywebsite.com:8000/hello.html?id=100&status=active");

//Serialized
console.log("Serialized url is : "+myUrl.href);

//Host
console.log("Host of url is : "+myUrl.host);

//Hostname
console.log("Hostname of url is : "+myUrl.hostname);

//Pathname
console.log("Pathname of url is : "+myUrl.pathname);

//Query
console.log("Query of url is : "+myUrl.search);

//Param Object
console.log("Query of url is : ",myUrl.searchParams);

//Add Param 
myUrl.searchParams.append('abc',123)
console.log("Addomg param to url is : ",myUrl.searchParams);

//Loop through the param
console.log("Looping through the param object: ");
myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));

// https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu