// ! Promises is for "eventual" completion of task. It is an object in JS
// ! It is a solution to callback hell.

// ! The below is all example of how we manually create and use promises

// *syntax 
let promise = new Promise((resolve, reject)=>{
    console.log("Am a promise");
})
// when we run the above code, we get the o/p as Am a promise

// ! Promises have states and result
// ! There are 3 states - Pending, fulfilled (resolved), rejected 
// ! The resolve and reject funtions are internally created by JS

let promise1=new Promise((resolve, reject)=>{
    console.log("Promise 1");
    resolve(123);
    // * we can even give the string in the resolve function
    // * what ever the value we give to resolve that would be in result and the state will be updated to fulfilled
})

console.log(promise1);


let promise2=new Promise((resolve, reject)=>{
    console.log("Promise 2");
    reject("some error");
})

// ! When we use reject, it will output the value that we have given as an error (like real error)  it is not any syntactical or logical error but it is because we use reject and the value inside it is displayed 
// !basically it's like throwing a user defined exception in java
// *the state after we use reject is rejected and the result value is some error which is the value we have given to the reject funtion

console.log(promise2);

//  ! generally we don't create the promise object, when we send the request to an api , it returns a promise, based on that we make use of that promise using it's state or result 
// !basically we just handle the promises which are created externally 



//let's take the following example of how actually promises to be used
function getData(data, getNextData){
    setTimeout(() => {
        console.log("Data", data);
    }, 5000);
}
// *the above function prints the value of data after 5 secs

// *in general for example the api is called then , let's suppose that getData itself is an api
function getData(data, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("Data", data);
    }, 5000);
    })
}

// * when we call the getData function with some value and immediately print the promise the state is pending and the result is undefined
// *also after we get the data after 5 secs and then print the promise, it's still the same because we aren't resolving or rejecting the promise

// *so we either resolve or reject the promise after we get the data, something like this
function getData(data, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("Data", data);
        resolve("successful");
        // *here we add this line, that is after we print the data we resolve the promise
    }, 5000);
    })
}
// !! now, when we call the getData function with some value and immediately print the promise the state is pending and the result is undefined, but after 5 when the data is printed, the promise state will no be as resolved and the result will be successful
let finalValue=getData(45)
console.log(finalValue)
setTimeout(() => {
    console.log(finalValue);
}, 5000);

// *basically we r priting the value of promise before and after the data is printed, if not we can use the console to see the result

//! similarly as we have used resolve in the above function, we can also use reject 

// !better use console to better understand how the above code is working
// * Promise is a class 

// * The promise takes function with 2 handlers which are resolve and reject

// * resolve and reject are callbacks provided by JS