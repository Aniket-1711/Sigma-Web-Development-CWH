console.log("Initializing java script")

function getRandomCOlor(){
    // there is a formula to get a random number between a and b both inclusive
    // a+random*(b-a)
    let val1=Math.ceil(0+Math.random()*255)
    // here i chose a=0 and b=255 becuase rgb colors ranges from 0 to 255
    let val2=Math.ceil(0+Math.random()*255)
    let val3=Math.ceil(0+Math.random()*255)

    return `rgb(${val1}, ${val2}, ${val3})`
}

let boxes=document.querySelector(".container").children
Array.from(boxes).forEach(element => {
    element.style.backgroundColor=getRandomCOlor();
    element.style.color=getRandomCOlor();
});
