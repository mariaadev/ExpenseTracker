/* Click event select concept menu*/

let selectConcept = document.getElementById("select-concept");
let selectText = document.getElementById("select-text");
let options = document.getElementsByClassName("options");
options = Array.from(options)
let arrow = document.getElementsByClassName("arrow")

let conceptList = document.getElementById("concept-list")

selectConcept.addEventListener("click", (event) => {
    conceptList.classList.toggle("hide")
})

options.forEach(option => {
    option.addEventListener("click", (event) => {
        //get emoji and text from selectedOption
        selectConcept.style.display = "flex"
        selectConcept.style.justifyContent = "flex-start"
        selectConcept.innerHTML = option.innerHTML
        conceptList.classList.toggle("hide")
    })
});

