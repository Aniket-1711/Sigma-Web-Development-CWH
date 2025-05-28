let button=document.getElementById("btn")

// we have added an event listner, when we single click on the button, the content is changed, and instead  of using "click" we can also use "dblclick", it means when we double click on the button, the content changes
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="<b>You have clicked on the change content button!Enjoy ur new content</b>"
});

// let's add few more events

// this event will pop up a alert when we right click on the button
button.addEventListener("contextmenu",()=>{
    alert("U have right clicked on the button and so u r able to see this alert message")
})

button.addEventListener("keypress",(e)=>{
    console.log(e)
    // this event prints all the characters with some description that were entered in the console right after clicking the button
    // we can also print only the character
    console.log(e.key)
})
