let random=Math.random()
a=prompt("Enter a number")
b=prompt("Enter second number")
c=prompt("Enter operation")
let obj={
    '+':'-',
    '-':'/',
    '*':'+',
    '/':'**'
}

if(random<0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}