//! Here we will organize the files based on their extentions into respecitve extension based folders
import fsn from "fs"
import path from "path"
import fs from "fs/promises"


const basePath="C:\\Users\\gawan\\BTECH 2 Year\\Sigma-Web-Development-CWH\\Sigma-Web-Development-CWH\\91 Clear the Clutter"

let files=await fs.readdir(basePath)
//*basically this will return a promise, await will wait unless the promise is either rejected or resolved

for(const item of files){
    const ext=item.split(".").at(-1)
    //* this will access the element at last index, basically it can be done using length-1 but negative index is to be used with 
    if(ext!="js" && ext!="json" &&  item.split(".").length>1){


        if(fsn.existsSync(path.join(basePath, ext))){
            //*if the folder already exists then move the respective files into ext folder
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else{
            fs.mkdir(path.join(basePath, ext))
             fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }

}