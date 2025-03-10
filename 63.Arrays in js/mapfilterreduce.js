// this is to demonstrate map function
a=[1,2,3,4,5]
b=a.map((value)=>
    value**2
)
// as there is only a single line in the body i can omit {} and return keyword,and there are 2 more parameters like earlier in the previous loops concpet like value, index and array

console.log(b)

// here is filer function now
const filterGreaterthan1=(value)=>{
    if(value>1){
        return true
    }
    return false
}

console.log(a.filter(filterGreaterthan1))

// here is reduce function
//example 1 to add the elements
console.log(a.reduce((a,b)=>
    a+b
))

console.log(a.reduce((a,b)=>
    a**b  //here it will display 1 because 1**2=1, again 1**3=1 and so on 1**5=1
))

console.log(Array.from("Aniket"))
// array .from is used to create a new array from the object, object can be string, another array, obj(key,value pair etc..)