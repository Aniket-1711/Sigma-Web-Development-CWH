console.log("Aniket")
// we can select element using DOM navigation properties like  getElementsbyclass and getElements by id


// 1) getElementsbyClass
let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[1].style.backgroundColor="red"

//2) getElementById
let targetVar=document.getElementById("thistle")
targetVar.style.backgroundColor="thistle"

//3) adding inline css using querySelctor in js
document.querySelector(".box").style.backgroundColor="green" //returns only the first element
//this selects only the first box and changes it's color to green, if we want to change the properties of all elements having class box then we go with getElementsByClassName or we can also Use querySelectorAll

//4) querySelectorAll
console.log(document.querySelectorAll(".box")) //returns html collection
// so we need to use forEach loop to change the properties of each element in the collection of array
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})


// 5) we can select element by tag name using getElementByTagName, this returns a collection again
console.log(document.getElementsByTagName("div"))
// this returns all the div tags

// there are functions like matches - this checks whether the id or class of a element matches with the given id or class or any css selector
e=document.getElementsByTagName("div")
console.log(e[4].matches("#thistle"))
console.log(e[3].matches("#thistle"))

// closest -returns the closest ancestor that match the css selector
console.log(e[4].closest("#thistle")) // checks with the element itself first, then it's parent and it's parent and so on..
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))
console.log(e[1].closest("#green"))  //returns null if not found

// contains function - checks if parent contains so and so child and returns true if so, 
// if we apply querySelector.contains(".container").contains(e[0]) here e[0] is container itself, it returns true
console.log(document.querySelector(".container").contains(e[4]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))
    

