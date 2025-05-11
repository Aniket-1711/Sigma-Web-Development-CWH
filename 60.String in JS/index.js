 // string characters in js can be accessed using index
// js is a forgiving language which means that it throws minimal errors
// when u try to access the index of the string which is not present , it returns undefined rather than throwing an error and index starts from 0
// we can find the length of the string using string.length 
let username="Aniket"
console.log(username[0])
console.log(username.length)
console.log(username[7])


// semi colon is not mandatory in js

// we can use the java method of string concatenation to display the values as well like:
console.log("Hello "+ username+" this is String js tutorial")

// there is a efficient or easy way as of in python like the f string and format kind :
console.log(`Hello ${username} this is string js tutorial`)
// ` this is know as backtick and the way inserted the variable name in the curly braces is known as string interpolation

// basically inserted a variable in the backtick is known as string interpolation

// the concept of escape sequence characters hold good here also

//***********************************************

// here are few string methods
// -->toUpperCase
console.log(username.toUpperCase())
console.log(username)
// the orignal string isn't modified
username[3]='v'
console.log(username)
// string in js are like in java immutable
// the string functions like toUpperCase, toLowerCase, replace etc return new string
// like java js is also a object oreintd programming language

console.log(username.slice(1,4))
// here characters at 1,2,3 are returned and printed 

// when we use replace and if the word to be replaced has more than one occurence then only the first occurrence will be replaced

// concat can take mutliple strings to be concatenated separated by , example:
console.log(username.concat("Kauraji", "Gawande"))
// we can also use + to concatenate 2 strings
 


