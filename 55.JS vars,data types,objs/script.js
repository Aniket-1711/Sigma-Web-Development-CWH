//this is a comment in java script
//the rules for naming a variable is same as any other programming language
//Js has 3 primary classification of variables as - var, let, const
//var variables are global variables, where as let and const are block scoped varaibles
// const variable values can't be changed once declared
// console.clear()
var a=5;
console.log(a)
a+=1
console.log(a)
b=false
console.log(b, typeof b)
//here typeof is used to specify that what category does the variables fall under



//object in JS is ntg but a dict as in python ex:
 let collection={
    na:"Aniket",
    "my roll":"y9",  //here as i have the space in the variable name so i put it in the string
    cgpa:9.9 //here object is ntg but key value pairs
}

// we can print the elements in 2 ways
console.log(collection.na)
console.log(collection['cgpa'])
collection.year=2; //this is how we add further key values and keys must be unique else the value for that specific key is overwritten
console.log(collection)

// we can decalre 2 variables at a time but this might cause clashes, so in industry we don't use this


// primitive types
// primitive data type - number, null, undefined, boolean,String
let name;
console.log(typeof name)
// when we try to print a variable with uninitialized value we get undefined type

// in js once a variable is assigned a value of some data type then we can assing value of other data type also which is called dynamic type casting not supported by any other language
let myName="aniket"
console.log(myName)
myName=30
console.log(myName)
// here we have changed the data type of myName from string to integer, it happens dynamically and which is not possible in any other progamming language other than python
// type of a null variable is object


// reference data type--