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

