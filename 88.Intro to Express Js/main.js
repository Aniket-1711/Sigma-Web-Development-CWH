//* to install any particular version of the express we use npm i express@{version} instead of version we have to actually specify version like 3,4 (now when we have downloaded this, the latest version was 5)

const express = require('express')   //*import statement
const app = express()   
const port = 3000


//! similarly there are app.get, app.post, app.delete, app.put(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
    res.send("About us")
})
app.get('/contact',(req,res)=>{
    res.send("Contact me!")
})
app.get('/blog',(req,res)=>{
    res.send("My blog")
})
app.get('/blog/intro-to-js',(req,res)=>{
    //*logic to fetch intro to js from database (assumption)
    res.send("My pesonal blog")
})

//!creating these endpoints like about blog/intor-to-js etc will lead to exposure of logic and also increase the no of lines code, so express js provides the usage of variables so that core logic is not exposed and the code is maintainable

//syntax example:
app.get('/intro-to/:slug/', (req,res)=>{
    res.send(`Hello ${req.params.slug}`)   //todo: here slug is a parameter, we can have multiple parameters as well
})

//* the above code will now help u access any request in the browser, basically whatever u type in browser is a request, so this time anything that starts with /intro-to/{string_request} will be displayed and we won't get (cannot get /request)

app.get('/:first_param/:second_param', (req, res)=>{
    //* we can actually log the these url parameters to the console 
    

    //*for the above url the following will output me
    console.log(req.params) //*[Object: null prototype] {first_param: 'aniket',second_param: 'gawande'}
    console.log(req.query) //*[Object: null prototype] { mode: 'dark', region: 'in' }


    res.send(`Hello there! ${req.params.first_param} and also ${req.params.second_param}`)
})

//! a sample url request be like localhost:3000/aniket/gawande (output: Hello there! aniket and also gawande)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//* static files concept: if we create a file in 88 folder with aniket.txt, i can't directly access these files in the url, so express is safe, but if i want that file to be publicaly viewed then i must create a folder containing the file i wanna publically share and add the following line
app.use(express.static('public')) //*note here public is the folder name
//*now try to access the file from the url as : http://localhost:3000/aniket.txt

//!note that i can't access package.json files and other files, this is for backend safety, so whatever files are there in the folder specified in express.static, in this context it's public, will only be accessed by the user in the url
//*this is the whole concept of static files

//syntax u must include app.use(express.static('{folder_name'))