//**here we have created this package.json through npm init -y , -y basically skips all the questions that we were supposed to answer
//**further if we want to edit some files then we can go to the package.json and edit them


// const { createServer } = require('node:http');

import http from "https"

const hostname = '127.0.0.1';
const port = 3000;


//* with the help of require we import the modules 

//! we can also import the required modules with the help of import statement but in package.json file we need to add "type":"module" after the file name

//syntax import http from "http" -> usable only if we specify "type":"module" in the package.json file after this index.js file


const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World from aniket</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//! we have a package called nodemon which will restart the server when we have some changes made in the file
//* other wise we will have to stop the server when some changes made and then we have to 

//*we learnt how to restart the server - basically nodemon
//* then we learnt about require importance 
//* then we have seen how can we make use of import statement by setting the type module in package.json
//* learnt about named exports and default exports
//* learnt about the function where the module code actually lives 
//* learnt about the usage of the variables that were not declared like __dirname, __filename which were wrapped in the function
