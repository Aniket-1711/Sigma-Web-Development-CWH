console.log("Hello World")

//** here we have used the npm init to create a working package then give the details , after that we will see that the node_modules folder and package-lock.json and package.json is created , this was to setup the nodejs project
//** if we delete this node_modules then we can get them by typing the command - npm install , this will install the dependenceis from the package.json 


//todo this npm is node package manager - it helps in installing packages

//! we have used npm install slugify here to demonstrate one node js module, it converts string into slugs (slug is an url friendly text) , we can also use npm i to install packages

var slugify=require('slugify')
let a=slugify('some string')
console.log(a)

//? slugify takes first agrument as the string and removes it's spaces and makes it suitable for url, so the default separator is '-'
//? we can change the separator by passing another parameter 


const b=slugify('aniket kauraji gawande', '%')
console.log(b)


//syntax https://nodejs.org/en/learn/getting-started/introduction-to-nodejs (this link is to learn about node js, kind of official node js documentation)