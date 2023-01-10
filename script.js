const h1 = getFirstElement("h1")
const h2 = getFirstElement("h2")
h2.addEventListener("click", changeBackground)
const h3 = getFirstElement("h3")
h3.addEventListener("click", hideElement)
removeLastLine()
addButton()

function makeParagraphBold() {
    const paragraphs = document.querySelectorAll("p");
    // paragraphs.style.fontWeight = "bold"
    for (const paragraph of paragraphs) {
        console.log(paragraph);
        paragraph.classList.add("textBold")
    }
}

function addButton() {
    const newBtn = document.createElement('button');
    newBtn.innerHTML = "Make Everything bold";
    newBtn.addEventListener("click", makeParagraphBold)
    const article = getFirstElement("article");
    article.appendChild(newBtn);
}

function hideElement() {
    h3.classList.add("hide");
}

function changeBackground() {
    h2.style.backgroundColor = "red";
}

function removeLastLine() {
    const article = document.querySelector("article");
    article.lastElementChild.remove();
}


function getFirstElement(selector) {
    return document.querySelector(selector)
}

h1.addEventListener("mouseover", function() {

})