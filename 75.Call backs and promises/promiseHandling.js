// ! Here we will now learn how to handle the promises
// ! Promises are handled by using .then() and .catch()

// * whenever the promise is resolved, .then() code works and whenever the promise is rejected, .catch() works

// let's understand this with an example

const getPromise=()=>{
    return new Promise((resolve, reject)=>{
        console.log("Am a promise");
        // *let's say intially we r saying that this promise is resolved
        // resolve("success");
        reject("api key exhauseted error");
    })
}

let promise=getPromise()

promise.then(()=>{
    console.log("promise fulfilled")
});

promise.catch(()=>{
    console.log("promise rejected")
})

// *we can also display the value of the result by passing an argument to the .then() and .catch()
// *it's like a default parameter passed internally by the promise

promise.then((res)=>{
    console.log("promise successful , result:", res);
})

promise.catch((err)=>{
    console.log("promise rejected, result:", err);
})

// !comment out the reject and check for resolve and vice versa to check the outputs

