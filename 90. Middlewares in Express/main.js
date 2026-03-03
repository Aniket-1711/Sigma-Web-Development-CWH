const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
const birds=require("./routes/birds")

app.use(express.static("public"))
app.use("/birds", birds)  //*am using separate middle ware to handle requests related to birds

//*middle ware 1  these middle wares can modify the request, send reponse (we don't actually use them to do this), gives control to next middle ware
app.use((req,res,next)=>{

  console.log(req.headers) //*this has the info like host, cache control and etc..
  //!i can also add a new object to the request 
  req.aniket="Aniket it good boy"
  //*i can access this req.aniket in any of the request routes

  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)  //syntax this gives a the timestamp and the type of request, whether it is a get or post or any other request, basically this middle ware 1 gives me when has the request come and what type of request is it!

  // !res.send("Hacked by middleware 1") i can't do this inside a middleware, if i do so then am not supposed to use the next(), because send itself has returned someone response again we need not call the next middleware, it will throw an error
  next() //*next will take use to next middleware
})

//*middle ware 2
app.use((req,res,next)=>{
  console.log("LOGGED m2 ")
  next() //*next will take use to next middleware
})

//!if we comment out next() then the request get's stuck , it's the standard way syntax of express to use next() when there are other middlewares



//todo note that the order of middleware is more important, if the same req is modified by all the middleware then the result would be the modified req of last middleware, order, the req gets overriden by the middleware, 1-2-3 , 3 would be the result


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req,res)=>{
    res.send("about page "+ req.aniket)
})

app.get('/contact', (req,res)=>{
    res.send("contact page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




//!middle ware are of 5 types
//*1 application level that we use like app.use(req,res,next) -->this we have used
//*2 router level like here we have handled the birds related req with separate middleware in routes --> this we have used
//*3 error handling middle ware like res.status(500).send("internal server error")
//*4 built in middlewares like express.static(), express.json() all these already exists in the express package  --> this we have used

//*5 third party middle ware