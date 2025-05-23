function createCard(title,cName,views,monthsOld,duration, imageURL){
    let viewStr

    if(views<1000){
        viewStr=views+"";
    }
    else if(views<1000000){
        viewStr=views/1000+"k";
    }

    else{
        viewStr=views/1000+"M";
    }
    let html=`<div class="card">
            <div class="image">
                <img src="${imageURL}"
                    alt="">

                    <p>${duration}</p>
            </div>

            <div class="text">
                <div class="title">
                    <h2>${title}
                    </h2>
                </div>

                <div class="description">
                    ${cName} &nbsp;. ${viewStr} views &nbsp;. ${monthsOld} months ago
                </div>
            </div>
        </div>`

        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("Introduction to python programming | #video 1","codeWithHarry", 750000,5,"10:12","https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFhYbablM1xyDRXmQfRYeJOan64w")

createCard("Introduction to python programming | #video 1","codeWithHarry", 750000, 5,"10:13","https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFhYbablM1xyDRXmQfRYeJOan64w")

createCard("Introduction to python programming | #video 1","codeWithHarry", 750000, 5,"20:13","https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFhYbablM1xyDRXmQfRYeJOan64w")


createCard("Python Project | Hand Tracking  #video 1","codeWithHarry", 750000, 5,"32:33","https://i.ytimg.com/vi/9iEPzbG-xLE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAN0xfLGk2OtSZLiK1G4t3M0YdgMg")