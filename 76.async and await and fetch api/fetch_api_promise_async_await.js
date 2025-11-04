async function getData(){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    //*  The above is the link - type json placeholder in chorme to get the url for this
    //! The fetch api returns a promise , to handle that we use .then, and this further returns a promise we need to type cast it into json type so we further apply .then to this (.then is used when the promise is fulfilled)

    
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1') //* returns a promise (as chunks)
    let data=x.json() //*Type cast it into json object
    return data
}

async function main(){
    console.log("Loading modules and packages")
    console.log("loading data")
    let data=await getData()
    console.log(data)
}

main()
//!In the above funtion if we don't use the await function then we will end up printing the promise
//*Only when the data is fetched the data will be displayed in case we use await function

//*in the output after a very short duration of delay we will see the json object as output (data)