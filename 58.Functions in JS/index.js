// in js the input can be taken by using prompt function
//we declare the functions using function keyword
function sum(a,b){
    return a+b;
}

console.log(sum(2,3))
//although writing semi colon is not necessary but it is better to use so!

const func1=x=>{
    console.log("This is kind of anonymous function "+x);
}

func1(45)