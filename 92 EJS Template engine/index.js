const express=require("express")
const app=express()


//* after installing ejs, we will set the view engine  
app.set('view engine', 'ejs')

//* there are varioius view engines such as pug, handlebars

app.get("/", (req, res)=>{
    // res.send("Hello World")
    let siteName="adidas"
    let searchText="serach now"
    let ar=[1,54,65]
    //*instead of having hello world at /, we will serve the index.html page
    // res.sendFile("templates/index.html", {root: __dirname})
    res.render("index", {siteName:siteName, searchText:searchText, ar})

    
})
//*suppose we r serving a blog, there are 100's of blogs, and we want to use the variables in the template index.html file, but it's not possible to create those many index.html everytime
app.get('/blog/:slug', (req, res)=>{
    let blogTitle="Adidas when and why?"
    let blogContent="it's a very good brand"
    res.render("blogpost", {root:__dirname})

    //! to do this we use, ejs - it's a template engine, here when i have to work with different blogs, i can't create index.html for every blog, instead i can make use of these variables and inject them into the template file index.html using ejs
    //* install ejs using npm i ejs (embedded javascript)
})

app.listen(3000, ()=>{
    console.log("Server Listening at port 3000")
})


//! in the index.html we rendered the varaible names using template literals <%= VariableName %>