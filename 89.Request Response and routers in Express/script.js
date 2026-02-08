const express=require("express")

const app=express()

app.use(express.static("public"))

app.get("/", (req,res)=>{
    console.log("Hey it's a get request")
    res.send("Hello World")
})

app.post("/", (req,res)=>{
    console.log("Hey it's a post request")
    res.send("Hello From Post")
})


app.put("/", (req,res)=>{
    console.log("Hey it's a put request")
    res.send("Hello From Put")
})


//*the similar above thing can also be chanied as follows and will work the same
//todo app.get("/", (req,res)=>{
//todo     console.log("Hey it's a get request")
//todo     res.send("Hello World")
//todo }).post("/", (req,res)=>{
//todo     console.log("Hey it's a post request")
//todo     res.send("Hello From Post")
//todo }).put("/", (req,res)=>{
//todo     console.log("Hey it's a put request")
//todo     res.send("Hello From Put")


//syntax serving html file we can send an html file through sendFile function but we need to pass the current directory or the main directory of that serving file

app.get("/home", (req, res)=>{
    res.sendFile("templates/homepage.html", {root:__dirname})
})


app.listen(3000, ()=>{
    console.log("Server listening at port 3000")
})


//! there is a limit of 2048 characters, we can't send more than these many characters in the get request (get request is basically that we hit using browser)

//*in order to test a post request, we can test it through creating a html page and then check, which is obviously no the best method
//*so firstly let's test using html page, then we will install the postman