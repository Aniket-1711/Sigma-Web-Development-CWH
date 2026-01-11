import fs from "fs/promises"

let a=await fs.readFile("aniket.txt")
console.log(a.toString())

let b=await fs.writeFile("aniket.txt", "\n\n\nAniket Learnt about fs module")
console.log(b)

//! note that we have used await without async, it is allowed in modules, so these are returning me promise so i use await to handle then and this will help me avoid callback hell