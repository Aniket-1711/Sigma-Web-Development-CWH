const fs = require("fs")

//syntax we can also import the above fs module as -> const fs=require("fs/promises")

// console.log(fs) //* this displays the functions inside this fs module, file related functions are present

console.log("Writing")
// fs.writeFileSync("aniket.txt", "aniket is a good boy") //*this creates a file aniket.txt and write the content to it (aniket is a good boy)
console.log("Ending")


//!there is another function called writeFile, it is good to use writeFile function over writeFileSync,

fs.writeFile("aniket2.txt", "Aniket Kauraji Gawande", () => {
    console.log("done")

    fs.readFile("aniket2.txt", (error, data) => {
        console.log(error, data.toString())     //*data.toString() because we can't read the raw data, now this will display the content in the file
    })
})

//* let's now look at another function called appnedFile
fs.appendFile("aniket.txt", "aniket kauraji gawande", (e, d) => {
    console.log(d)
})


//! note that accessing multiple files content would form callback hell/ pyramid doom like structure 

//* below  is an example for the callback hell

fs.writeFile("aniket2.txt", "Aniket Kauraji Gawande", () => {
    console.log("done")

    fs.readFile("aniket2.txt", (error, data) => {
        console.log(error, data.toString())     //*data.toString() because we can't read the raw data, now this will display the content in the file
        //again
        fs.writeFile("aniket2.txt", "Aniket Kauraji Gawande", () => {
            console.log("done")

            fs.readFile("aniket2.txt", (error, data) => {
                console.log(error, data.toString())     //*data.toString() because we can't read the raw data, now this will display the content in the file
            })
            fs.writeFile("aniket2.txt", "Aniket Kauraji Gawande", () => {
                console.log("done")

                fs.readFile("aniket2.txt", (error, data) => {
                    console.log(error, data.toString())     //*data.toString() because we can't read the raw data, now this will display the content in the file
                })
                fs.writeFile("aniket2.txt", "Aniket Kauraji Gawande", () => {
                    console.log("done")

                    fs.readFile("aniket2.txt", (error, data) => {
                        console.log(error, data.toString())     //*data.toString() because we can't read the raw data, now this will display the content in the file
                    })
                    fs.writeFile("aniket2.txt", "Aniket Kauraji Gawande", () => {
                        console.log("done")

                        fs.readFile("aniket2.txt", (error, data) => {
                            console.log(error, data.toString())     //*data.toString() because we can't read the raw data, now this will display the content in the file
                        })
                    })
                })
            })
        })
    })
})