import {a} from "./mymodule.js"
console.log(a)

//* this file and mymodule.js are interconnected,

// import obj from "./mymodule.js" //* we r exporting obj from mymodules.js, but we can access it using any varaible

import aniket from "./mymodule.js"
console.log(aniket) //!since this is not a named export we can access it using any variable name, where as with named variables we must use the respective names to access

console.log(__dirname+" "+ __filename)

//!we are able to access this __dirname and __filename and module.exports and all because, the node.js wraps the module related code into the following function

(function(exports, require, module, __filename, __dirname){
        //* this is where the modules related code is wrapped into by node js

        //syntax this is where the module code live
})