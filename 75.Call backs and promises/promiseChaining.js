//! We will now see promise chaining 
// ! commet each part to see the exact output

// * if we chain then that is one then inside other it is promise chaining

// *let's say we have 2 asynchronous functions
function asynFun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data 1");
            resolve("Success");
        }, 4000);
    })
}
function asynFun2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data 2");
            resolve("Success");
        }, 4000);
    })
}

// * Now when i call the 2 functions, i will get data 1 and 2 at a time, but if i want data 2 after the data 1 then i will have to use call back chaining

// console.log("Fetching data 1")
// let promise1=asynFun1()
// promise1.then((res)=>{
//     console.log(res);
// })

// console.log("Fetching data 2")
// let promise2=asynFun2()
// promise2.then((res)=>{
//     console.log(res);
// })

// ! Now let's do it using promise chaining

console.log("Fetching data 1...")
asynFun1().then(()=>{
    console.log("Fetching data 2...")
    asynFun2().then(()=>{})
})

// * this will print the data 1 first, only if the promise is resolved it will print the data 2/


// ! Let's now resolve our callback hell using promises
// function getData(id, nextData) {
//     // SYNTAX: Function takes id and another function as argument
//     setTimeout(() => {
//         console.log("Data " + id)
//         if (nextData) {
//             // SYNTAX: Calls nextData function if it exists
//             nextData()
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("Getting data 2")
//     getData(2, () => {
//         console.log("Getting data 3")
//         getData(3, () => {
//             console.log("Getting data 4")
//             getData(4,()=>{
//                 console.log("Getting Data 5")
//                 getData(5)
//             })
//         })
//     })
// })

// ! the above call back hell resolved using promises as follows

function getData(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data " + id)
            resolve("success");
        }, 2000);
    })
}

// *here as such i don't need callback as parameter
console.log("getting data 1...")
getData(1)
    .then(()=>{
        console.log("getting data 2")
        getData(2).then(()=>{
            console.log("getting data 3")
            getData(3)
        })
})

// ! similarly the above work can also be done as follows
console.log("getting data 1...")
getData(1)
.then(()=>{
    console.log("getting data 2...")
    return getData(2);
})
.then(()=>{
    console.log("getting data 3");
    return getData(3);
})
.then((res)=>{
    console.log(res);
})


// * basically the return inside the first getData(1) will get the promise, on that promise we are apply .then()
// ! ******* understand the above statement thoroughly!**********
// ! the above chaining of then is called as promise chaining