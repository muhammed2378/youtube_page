// search engine border

let searchEngine = document.querySelector(".search-engine form input")
let searchEngineExt = document.querySelector(".search-engine form span")

searchEngine.onfocus = () => {
    // make a border around the form expet the left
    searchEngine.parentElement.style.border = "1px solid #1c62b9";
    searchEngine.parentElement.style.borderLeft = "0";

    // make  aborder around the span from the all directions expect the right
    searchEngineExt.style.border = "1px solid #1c62b9"
    searchEngineExt.style.borderRight = "0"
    // searchEngineExt.style.height = "100px"
}

searchEngine.onblur = () => {
    // set it to default
    searchEngine.parentElement.style.border = "1px solid #888888";
    searchEngine.parentElement.style.borderLeft = "0";

    // make  aborder around the span from the all directions expect the right
    searchEngineExt.style.border = "1px solid #888888"
    searchEngineExt.style.borderRight = "0"
}

