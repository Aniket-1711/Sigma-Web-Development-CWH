async function hackerTerminal() {
    let duration = (Math.random() * 10000)
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success")
        }, Math.ceil(duration));
    })
}

async function main() {
    let message = ["Initializing hacking", "Reading your files", "Password files Detected", "Sending all password and personal files to server", "Cleaning up"]

    let t=setInterval(() => {
        let last=document.body.lastElementChild

        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.replace("...", "")
        }
        else{
        last.innerHTML=last.innerHTML+"."
        }
    }, 200);

    for (let i = 0; i < message.length; i++) {
        let x = await hackerTerminal()
        let div=document.createElement("div");
        div.innerHTML=message[i]
        document.body.append(div)
    }
    await hackerTerminal()
    clearInterval(t)
}
main()