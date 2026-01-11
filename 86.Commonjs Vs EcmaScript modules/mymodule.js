export const a=1
export const b=2  //!all these variables a to e are named exports meaning that we need to access them using the names in the main.js file
export const c=3
export const d=4
export const e=5


//* the second type of export is the default export

let obj={
    x:5,
    y:7
}

export default obj //*this a default export, we need to access same as obj

//! it's not that only variables can be exported, we can also export functions as well