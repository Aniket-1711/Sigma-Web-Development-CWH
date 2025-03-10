// js is used to prepare software as a service SAAS product
let random=Math.random()*10
let random1=Math.random()*10
let random2=Math.random()*10
// console.log(random)
function businessNameGenerator(a,b,c){

let start_name={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

let adjects={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}

let last_name={
  1:"Bros",
  2:"Limited",
  3:"Hub"
}

let bname=""
if(a<=3 && b<=3 && c<=3){
    bname+=start_name[1]+adjects[1]+last_name[1]
    return bname
}

else if(a<=6 && b<=6 && c<=6){
    bname+=start_name[2]+adjects[2]+last_name[2]
   return bname
}

else{
    bname+=start_name[3]+adjects[3]+last_name[3]
    return bname
}
}

random=Math.floor(random)
random1=Math.floor(random)
random2=Math.floor(random)
// console.log(random)


console.log(businessNameGenerator(random,random1,random2))
