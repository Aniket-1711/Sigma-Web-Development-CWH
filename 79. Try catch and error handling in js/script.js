let a=prompt("Enter first number")
let b=prompt("Enter second number")

//!let sum=a+b 
//*This will not give me the sum but will give the result as string concatenation as a,b taken input from prompt are string by default

let sum=parseInt(a)+parseInt(b)
console.log("The sum is: ", sum)

//!Here we assume that the user enters only number
//*But what if user enters a string that can't be converted into a number, the result will be NaN

//so let's handle and throw an error if the number is not type castable
let c="ani"
let d="ket"

let res=parseInt(c)+parseInt(d)
console.log(res)
//*The above codes gives me NaN

//*Let's try if giving a char digit wil work?
let x="5"
let y="40"

let ans=parseInt(x)+parseInt(y)
console.log(ans)
//!This works 


//*So now let's throw an error if the user enters a string of characters other than numbers

//! let i="ani"
//! let k="1"

// !if(isNaN(i) || isNaN(k)){
// !    throw new TypeError("Input type mismatch")
// !}
//* custom exception 
// console.log("handled")

//? the code after throwing an exception will not work and the script is terminated


//*******************************Now let's handle exception */

//?Let's say that we don't have a number m and we try to output j*m which will throw us an exception that m is undefined

let j=20
try{
    console.log(j*m)
}
catch(error){
    console.log("Number undefined handled")
}

finally{
    console.log("The significance of finally block is known in the functions")

    //!!!!!IMPORTANT -->When ever we use finally normally,it always executes no matter whether catch works or try but in functions when there are return statements in the try and catch block the finally will also work/execute ** but if we write normal statements instead of finally block those will not be executed as we encounter return staement but finally will be executed **
}


// *small example
function main(){
    let a=10
    try{
        console.log(a/m)
        return true
    }
    catch(error){
        console.log("m not defined handeled")
        return false
    }
    finally{
        console.log("am executing no matter u have return statement!")
    }
    console.log("i will not execute")  //*Interpreter itself says that this line is not reachable , see the color of the statements compared to other statements
}

let z=main()
console.log(z)