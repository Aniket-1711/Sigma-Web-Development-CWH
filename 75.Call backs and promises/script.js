// * We have seen that console statements print in synchronous order.
// * JavaScript is asynchronous, meaning it does not wait for one task to finish before moving to the next

// ! It's not necessary that whatever code has been written runs in the same order
// SYNTAX: Function definition doesn't mean execution happens, unless it is called

console.log("Hi am Aniket!")
console.log("My fav sport is cricket")

setTimeout(() => {
    console.log("HI am inside set Timeout")
}, .01);

// ! Though this setTimeout has 0 sec or 0.1 sec delay, it will still be executed last

console.log("The End")

// * Callback: A callback is a function passed as an argument to another function
function greet(name, callback) {
    console.log("Hi " + name)

    setTimeout(() => {
        console.log("GoodBye!")
        callback()
    }, 2000);
}

function goodLuck() {
    console.log("Good Luck Charm")
}

greet("Aniket", goodLuck)


// * The best example for a callback would be the following:
function getData(id, nextData) {
    // SYNTAX: Function takes id and another function as argument
    setTimeout(() => {
        console.log("Data " + id)
        if (nextData) {
            // SYNTAX: Calls nextData function if it exists
            nextData()
        }
    }, 2000);
}

getData(1, () => {
    // * We want Data 1 first, then Data 2 after a delay
    getData(2)
})

getData(1, () => {
    console.log("Getting data 2")
    getData(2, () => {
        console.log("Getting data 3")
        getData(3, () => {
            console.log("Getting data 4")
            getData(4,()=>{
                console.log("Getting Data 5")
                getData(5)
            })
        })
    })
})
//* here we r calling the function getData, in the function call the first parameter is our data value and the other is a funtion ,here it is anonymous lambda function, 

//!here we r using the callback becuase we want the data i+1 only after we get the data i.


// ! As we can see, nesting keeps growing and code becomes unclear to read
// ! This is the concept of Callback Hell
// * When callbacks are nested deeply, it becomes hard and messy to read the code
// * This is called the "Pyramid of Doom" or Callback Hell

// TODO: To avoid this Callback Hell, we can use async/await or Promises
