/* Click event select concept menu*/

let selectConcept = document.getElementById("select-concept");
let selectText = document.getElementById("select-text");
let options = document.getElementsByClassName("options");
options = Array.from(options);

let conceptList = document.getElementById("concept-list");

selectConcept.addEventListener("click", (event) => {
    conceptList.classList.toggle("hide");
})

options.forEach(option => {
    option.addEventListener("click", (event) => {
        //get emoji and text from selectedOption
        selectConcept.style.display = "flex"
        selectConcept.style.justifyContent = "flex-start"
        selectConcept.innerHTML = option.innerHTML;
        conceptList.classList.toggle("hide");
    })
});

let editMenu = document.querySelector(".edit-menu-wrapper");
let meatballButton = document.querySelector(".meatball-menu");
meatballButton.addEventListener("click", (event) => {
    editMenu.classList.toggle("active")
})

let editButton = document.querySelector(".edit")
let cancelButton = document.querySelector(".cancel")

cancelButton.addEventListener("click", (event) => {
    editMenu.classList.toggle("active")
})

editButton.addEventListener("click", (event) => {
})