import path from "path"
// console.log(path) //*this will give me all the functions within this path module

let myPath="C:\\Users\\gawan\\BTECH 2 Year\\Sigma-Web-Development-CWH\\Sigma-Web-Development-CWH\\87.Working with files_ fs and path modules>\\aniket.txt"

//!Note that this path module treats / and \ as same
//* we have to use // or \\ when we specify the path otherwise it will assume / \ as escape sequence character

//*let's now get the extenion of the file using .extname
console.log(path.extname(myPath))

//*let's get the directory of the current file we are working on
console.log(path.dirname(myPath))

//*let's get the exact file name as we got it's extension earlier .txt, this time it will give the full name of the file, using basename function

console.log(path.basename(myPath))

//*let's join the 2 differnt paths now
console.log(path.join("c:/", "programs\\aniket.txt"))