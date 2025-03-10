// loop in JS
// normal for loop
// while loop
// do while loop

// for in and for of loops

//demonstrating for in loop
let obj={
    name:"aniket",
    age:19,
    "fav sports":"cricket"
}

for(const k in obj){
    console.log(k);
    console.log(obj[k]);
}
//use for in loop with objects


for(const i of "Aniket"){
    console.log(i);
}
//use for in loops with arrays, strings and etc, this will help to print the value directly
//incase we use for in for arrays and strings we would only get the indexes but not the values
