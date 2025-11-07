//* The first concept is IIFE - which we have already covered in async and await script.js

//*The next concept is destructuring
let x,y=[1,23,4,5]
console.log(x);
console.log(y)
//*Here x is assigned undefined and y will be assigned the array

let [a,b]=[1,2,3,4,5,5,6]
console.log(a)
console.log(b)
//*now a=1, b=2 and rest all values are ignored

//!But if we use ... then we can assign the rest values to the variable after 3 dots
let [i,j,...k]=[45,18,7,33,93]
console.log(i)  //* i=45
console.log(j)  //*j=18
console.log(k) //* k=7,33,93 (remaining values)



//*** this ... is called as Spread operator */



//!one best case to use this will be let's say we have a function named sum and we need to get the sum of 5 elements from the array arr=[45,18,7,33,93]
//? We can simply pass sum(...arr)
//? The parameters of the sum and it's definition is sum(a,b,c,d,e) return a+b+c+d+e;


//SYNTAX now the same thing we can do for the objects but we will use this to extract only required items from a huge set of objects

let obj={
    w:1,
    z:2,
    l:5
}

let {w,l}=obj
//* This means that extract the values of w,l from the obj



//! Next comes an important topic called hoisting, 
//*This is nothing but when we call the variable first then declare it but using var , we get it's value as undefined but not as error, but if declare that variable as let or const then surely we will get error


console.log(aniket) //*gives undefined , but if i change the aniket variable to let or const, i will get an error, same with functions, u can declare the function below the function call but ur function must not be assigned to a const or let variable
var aniket=99
