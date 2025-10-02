//*We will now dicuss about async and await keywords
//* async keyword when written with a function returns a promise for example
//* let's create a function hello and add async keyword to it
async function hello() {
    console.log(hello);
}

console.log(hello());


//*await means to wait for something
//* is pauses the execution of it's surroundings async function until the promise is settled

//! await is used inside async function only

function api(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        console.log("weather data")
        resolve(200);
       },2000) 
    });
}

// await api(); we can't use await on non async funtions

//* so we write the following async funciton to make use of await
async function getWeatherData() {
    await api(); //1st call
    await api();
}

getWeatherData();


//* now we will use async and await to getdata function

function getData(dataId){
    return new  Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("data", dataId)
        resolve("success")
        }, 2000);
    });
}

async function getAllData(){
    console.log("Getting data1...")
    await getData(1);
    console.log("Getting data2...")
    await getData(2);
    console.log("Getting data3...")
    await getData(3);
    console.log("Getting data4...")
    await getData(4);
    console.log("Getting data5...")
    await getData(5);
}

getAllData();


//! whenever we use async await we don't use .then() and .catch()

//! when we have to use async and await then we have make use of functions due to this we are making unnessary function call
//* to avoid this unnessary function call we have to make use of 


//!IIFE - Immediately Invoked fucntion expression (part of advanced js)
//* the IIFE is executed immediately as soon as it is defined - nameless function and no need to call explicitly

(async function(){
    console.log("Getting data6...")
    await getData(6);
    console.log("Getting data7...")
    await getData(7);
})();

//* one disadvantage of using IIFE is that this piece of code is not further reusable we need to paste or type the same block again
//* it just helps in getting rid of explicit function call 
//* we generally use these in API calls
