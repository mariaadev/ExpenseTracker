/* Click event select concept menu*/

let selectConcept = document.getElementById("select-concept");
let selectText = document.getElementById("select-text");
let options = document.getElementsByClassName("options");
options = Array.from(options);

let conceptList = document.getElementById("concept-list");
let isConceptSelected = false

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
        isConceptSelected = true
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


//button
let addTransaction = document.querySelector(".submit-button")

addTransaction.addEventListener("click", (event) => {
    // check input is a number, if it is positive or negative and sum totals
    event.preventDefault()
   //input values
let inputText = document.getElementById("amount")
let inputNumber = parseFloat(inputText.value)
//before UI income expenses
let incomeUI = document.querySelector(".income-amount")
let expensesUI = document.querySelector(".expenses-amount")
let savings = document.querySelector(".amount-savings")
//after UI income expenses
let incomeTotal = parseFloat(incomeUI.innerText.replace("€",""))
let expensesTotal = parseFloat(expensesUI.innerText.replace("€",""))
let savingsTotal = parseFloat(savings.innerText.replace("€",""))

    if (inputNumber && isConceptSelected) {
        if (inputNumber > 0) {
            incomeTotal = inputNumber + incomeTotal
            incomeUI.innerText = `${parseFloat(incomeTotal).toFixed(2)}€`
            savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
            addItem()
        }
        else {
            expensesTotal = Math.abs(inputNumber - expensesTotal)
            expensesUI.innerText = `${parseFloat(expensesTotal).toFixed(2)}€`
            savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
            addItem()
        }
    }
  
})

let cardPlaceholder = document.querySelector(".card-placeholder")
let cardText = document.querySelector(".card-text")
let cardEmojisPlaceholder = document.querySelector(".emojis-placeholder")



function addItem() {
  if (isConceptSelected) {
    cardText.remove()
    cardEmojisPlaceholder.remove()
    let itemContainer = document.createElement("div")
    itemContainer.style.backgroundColor = "#6D6D6D8A"
    itemContainer.style.width = "324px"
    itemContainer.style.height = "50px"
    itemContainer.style.borderRadius = "15px"
    itemContainer.style.boxShadow = "0px 4px 4px 0px #00000040" 
    itemContainer.style.display = "flex"
    itemContainer.style.justifyContent = "flex-start"
    itemContainer.style.alignItems = "center"
    itemContainer.style.padding = "7px"
    let emojiWrapper = document.createElement("div")
    emojiWrapper.style.display = "flex"
    emojiWrapper.style.justifyContent = "center"
    emojiWrapper.style.alignItems = "center"
    emojiWrapper.style.width = "55px"
    emojiWrapper.style.height = "43px"
    emojiWrapper.style.backgroundColor = " #6D6D6D8A"
    emojiWrapper.style.boxShadow = "0px 4px 4px 0px #00000040" 
    emojiWrapper.style.borderRadius = "15px"
    let emoji = selectConcept.querySelector(".emoji")
    emojiWrapper.innerText = emoji.innerText
    emojiWrapper.style.fontSize = "2.3rem"
    emojiWrapper.style.textAlign = "center"
    itemContainer.appendChild(emojiWrapper)
    cardPlaceholder.appendChild(itemContainer)
  }
    
}