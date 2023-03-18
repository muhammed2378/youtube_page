// search engine border

let inputField = document.querySelector(".search-engine form input")
let inputFieldExt = document.querySelector(".search-engine form span")

inputField.onfocus = () => {
    // make a border around the form expet the left
    inputField.parentElement.style.border = "1px solid #1c62b9";
    inputField.parentElement.style.borderLeft = "0";

    // make  aborder around the span from the all directions expect the right
    inputFieldExt.style.border = "1px solid #1c62b9"
    inputFieldExt.style.borderRight = "0"
    // inputFieldExt.style.height = "100px"
}

inputField.onblur = () => {
    // set it to default
    inputField.parentElement.style.border = "1px solid #888888";
    inputField.parentElement.style.borderLeft = "0";

    // make  aborder around the span from the all directions expect the right
    inputFieldExt.style.border = "1px solid #888888"
    inputFieldExt.style.borderRight = "0"
}




// show the field when you click the search icon under 650px screen width

// the center of the heading
let searchEngine = document.querySelector(".search-engine");

// the search icon
let searchIcon = document.querySelector(".search-engine .search-en");


// the back icon
let backIcon = document.querySelector(".search-engine .back");

// show the field on clicking the the searchIcon
searchIcon.onclick = function () {
    searchEngine.parentElement.parentElement.classList.add("active");
    searchEngine.classList.add("active");
};

// hide the field on clicking the back icon
backIcon.onclick = function () {
    searchEngine.parentElement.parentElement.classList.remove("active");
    searchEngine.classList.remove("active");
}

/* the settings-box and onclicking the icon bar */

// the bar icon in the heading
let barIcon = document.querySelector(".heading .bar-icon");


// the selectors container
let contentSelector = document.querySelector(".content-selectors");

// the settings box
let settingsBox = document.querySelector(".settings-box")

// the divs inside the settings box
let settingsBoxOpt = document.querySelector(".settings-box div")

// the bar icon in the settings box
let iconBarBox = document.querySelector(".settings-box .logo-bar .bar-icon");

// the previous icon
let previousIcon = document.querySelector(".blockPre");

// content

let content = document.querySelector(".content");


let leftClone = parseInt(getComputedStyle(contentSelector).left)

let left;

let checkLeft = parseInt(getComputedStyle(contentSelector).left) - 50


// create layer 
let layer = document.createElement("div");

document.body.append(layer)

barIcon.onclick = () => {

    leftClone = parseInt(getComputedStyle(contentSelector).left)

    

    // only if it's greater than 1320 screen width
    if(window.innerWidth > 1320) {
        // remove the small class from the content selectors and the settings box
        contentSelector.classList.toggle("small")
        
        settingsBox.classList.toggle("small")
        
        previousIcon.classList.toggle("small")

        content.classList.toggle("small")


        if (leftClone == 270) {
            contentSelector.style.left = `${110}px`;
            checkLeft = 110 - 50
            console.log(checkLeft)
        }else if (leftClone == 110) {
            contentSelector.style.left = `${270}px`;
            checkLeft = 270 - 50
            console.log(checkLeft)
        }

    } else {
        // if it's not greater than 1320 screen width

        // add a layer above all
        layer.classList.add("overlay");

        // remove the 'all' class to remove the old style
        settingsBox.classList.remove("all")

        // add the 'box' class to add the new style of the box
        settingsBox.classList.add("box")

        // remove the 'small' class if it's exsit previously
        settingsBox.classList.remove("small")

        // remove the 'small' class if it's exsit previously
        contentSelector.classList.remove("small")

        previousIcon.classList.remove("small")

        content.classList.remove("small")
    }
    // console.log(checkLeft)
    
}


// on clicking the inside bar icon

iconBarBox.onclick = () => {

    // remove the overlay
    layer.classList.remove("overlay");

    // add the "all" class to add the normal style
    settingsBox.classList.add("all")

    // remove the 'box' class to remove the box
    settingsBox.classList.remove("box")
}



// move the selctores from the right and from the left


// next

let next = document.querySelector(".next");

// previous
let previous = document.querySelector(".previous")

let extremeRight = (contentSelector.clientWidth - screen.width);








next.addEventListener("click", () => {
    left = parseInt(getComputedStyle(contentSelector).left);


    // modify the selectors on clicking the next icon
    if(contentSelector.lastElementChild.getBoundingClientRect().right > window.innerWidth){
        left -= 100;
    }

    // remove the next icon
    if(contentSelector.lastElementChild.getBoundingClientRect().right - 100 < window.innerWidth) {
        next.parentElement.style.display = "none";
    } 

    // show the previous icon
    if(contentSelector.getBoundingClientRect().x < checkLeft + 70) {
        previous.parentElement.style.display = 'flex';
    }

    // modify the x axis
    contentSelector.style.left = `${left}px`;

})




// previous button handling



previous.addEventListener("click", () => {

    // modify the left on clicking the previous icon
    if(contentSelector.getBoundingClientRect().x < checkLeft){
        left += 100;
    } else {
        left = checkLeft + 50
    }
    
    // remove the previous icon
    if(contentSelector.getBoundingClientRect().x >= checkLeft) {
        console.log(checkLeft)
        previous.parentElement.style.display = "none";
        
    }

    // show the next icon
    if(contentSelector.getBoundingClientRect().x <= checkLeft) {
        next.parentElement.style.display = "flex";
        console.log(checkLeft)
    }
    

    // add the x axis
    contentSelector.style.left = `${left}px`;
})


// active selector onclicking

let contentSelectorEL = document.querySelectorAll(".content-selectors div")

contentSelectorEL.forEach((e) => {
    e.addEventListener("click", () => {

        // remove all the active classes
        contentSelectorEL.forEach((x) => {
            x.classList.remove("active")
        })
        
        // add the active class to the clicked selector
        e.classList.add("active")
    })
})

let name = "mohammed"



