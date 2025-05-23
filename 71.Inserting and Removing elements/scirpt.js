// we will not be able to get the outputs in the terminal, we need to use the inspect option in the browser

console.log("Intializing js")
console.log(document.querySelector(".box").innerHTML)
// the above line gives the html content in the element of the first box

console.log(document.querySelector(".container").innerHTML)

// similarly there is also innerText method which gives the text inside particular element

console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText) 

// similarly there is a method outerHTML which gives the class as well as the content inside the class

console.log(document.querySelector(".container").outerHTML)
// this prints the .container class div tag and the html inside it, it prints the html of the element and also the inside part

// to find the tag of particular class or id we can use tagname
console.log(document.querySelector(".box").tagName)
// in this case div would be the output, 

// there is also a node name tag similar to tagname
// tagname is applicable only for the element where as node name is applicable for text, comments and other tags as well

// there is a way to get only the text content from a particular element
console.log(document.querySelector(".container").textContent)


// we can hide the element using the hidden attribute inside a tag and also check if a tag is or element is hidden
console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden=true)
// the above line will hide the particular attribute, ie no content related to that element, here container, will be displayed


// we can change the inner html of by saying
// document.querySelector(".container").innerHTML="Hey Aniket"
// run the above in the browser console to see the output

// we can see whether an element has an attribute or not
console.log(document.querySelector(".box").hasAttribute("style"))
// it returns a boolean, true if style attribute is there in an element , else false
console.log(document.querySelector(".box").getAttribute("style"))
// the above line returns what exactly is written in style


// incase we want to change the style or some other property then we use setAttribute method
console.log(document.querySelector(".box").setAttribute("style", "display:inline"))
// inspect to see the result


// we can see all the attributes of the element
console.log(document.querySelector(".box").attributes)

// we can also remove an attribute using removeAttribute method
console.log(document.querySelector(".box").removeAttribute("style"))

//*******
// we can change the website rather edit the content inside any website unless we redirect, by using
// document.designMode="on"
// redirecting is similar to refreshing 
// ******** */

// we can add our own custom attribute named data-createdby to an element and to access this attribute we use
console.log(document.querySelector(".box").dataset)
// whenever we say .dataset, the key value pair after the data- is printed
