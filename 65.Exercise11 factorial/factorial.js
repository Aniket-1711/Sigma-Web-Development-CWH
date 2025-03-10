// method 1 using reduce function
a=[5,4,3,2,1]
console.log("Factorial of 5 is: "+a.reduce((a,b)=>
    a*b
))

// method 2 using loops
let product=1
for(let value=5;value>=1;value--){
    product=product*value;
}
console.log(product)