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



let addTransaction = document.querySelector(".submit-button")
let inputText = document.getElementById("amount")
let incomeUI = document.querySelector(".income-amount")
let expensesUI = document.querySelector(".expenses-amount")
let savings = document.querySelector(".amount-savings")

addTransaction.addEventListener("click", (event) => {
    // comprobar que input es 1 número
    //comprobar si es positivo o negativo
    //sumarlo a Income o Expenses dependiendo de neg o posi
    event.preventDefault()
    let inputNumber = parseFloat(inputText.value)
    let incomeTotal = parseFloat(incomeUI.innerText.replace("€",""))
    let expensesTotal = parseFloat(expensesUI.innerText.replace("€",""))
    let savingsTotal = parseFloat(savings.innerText.replace("€",""))
    if (inputNumber) {
        if (inputNumber > 0) {
            incomeTotal = inputNumber + incomeTotal
            incomeUI.innerText = `${parseFloat(incomeTotal).toFixed(2)}€`
            savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
        }
        else {
            expensesTotal = Math.abs(inputNumber - expensesTotal)
            expensesUI.innerText = `${parseFloat(expensesTotal).toFixed(2)}€`
            savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
        }
    }
  
})



