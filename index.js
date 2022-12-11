// Select Category variables
let selectConcept = document.getElementById("select-concept");
let selectText = document.getElementById("select-text");
let options = document.getElementsByClassName("options");
options = Array.from(options);
let conceptList = document.getElementById("concept-list");
let isConceptSelected = false;


let cardPlaceholder = document.querySelector(".card-placeholder")
let cardText = document.querySelector(".card-text")
let cardEmojisPlaceholder = document.querySelector(".emojis-placeholder")
let itemContainer = document.createElement("ul")


//before UI income expenses
let incomeUI = document.querySelector(".income-amount")
let expensesUI = document.querySelector(".expenses-amount")
let savings = document.querySelector(".amount-savings")
//after UI income expenses
let incomeTotal = parseFloat(incomeUI.innerText.replace("€", ""))
let expensesTotal = parseFloat(expensesUI.innerText.replace("€", ""))
let savingsTotal = parseFloat(savings.innerText.replace("€", ""))

let input = document.querySelector("input")
let concept = document.querySelector("#select-concept")

//input values
let inputText = document.getElementById("amount")
let textConcept = document.querySelector(".text-concept")
let emoji = document.querySelector(".emoji")

let itemsList = document.getElementsByClassName("item-wrapper")

let editMenu = document.querySelector(".edit-menu-wrapper");
let doneMenu = document.querySelector(".done-menu-wrapper")

let meatballButton = document.querySelector(".meatball-menu");
let editButton = document.querySelector(".edit")
let cancelButton = document.querySelector(".cancel")
let doneButton = document.querySelector(".done")
let isDoneMenu = false

//button
let addTransaction = document.querySelector(".submit-button")

let counter = 0
let listOfItems = []
let item = {
    id: counter,
    amount: undefined,
    category: undefined,
    emoji: undefined
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("listOfItems"))
}

function saveToLocalStorage(listOfItems) {
    localStorage.setItem("listOfItems", JSON.stringify(listOfItems))

}
function clearInput() {
    inputText.value = ""
}

function addItem(item) {
    cardText.style.display = "none"
    cardEmojisPlaceholder.style.display = "none"
    itemContainer.style.overflowY = "auto"
    itemContainer.style.overflowX = "hidden"
    let itemWrapper = document.createElement("li")
    itemWrapper.classList.add("item-wrapper")
    itemWrapper.style.backgroundColor = "#6D6D6D8A"
    itemWrapper.style.width = "300px"
    itemWrapper.style.height = "50px"
    itemWrapper.style.borderRadius = "15px"
    itemWrapper.style.boxShadow = "0px 4px 4px 0px #00000040"
    itemWrapper.style.display = "flex"  
    itemWrapper.style.justifyContent = "space-around"
    itemWrapper.style.alignItems = "center"
    itemWrapper.style.padding = "7px"
    itemWrapper.style.margin = "7px"

    let emojiContainer = document.createElement("div")
    emojiContainer.style.display = "flex"
    emojiContainer.style.flexGrow = "1"
    emojiContainer.style.justifyContent = "flex-start"
    emojiContainer.style.margin = "10px"
    emojiContainer.style.height = "43px"
    let emojiWrapper = document.createElement("div")
    emojiWrapper.style.display = "flex"
    emojiWrapper.style.justifyContent = "center"
    emojiWrapper.style.alignItems = "center"
    emojiWrapper.style.alignSelf = "flex-start"
    emojiWrapper.style.width = "55px"
    emojiWrapper.style.height = "43px"
    emojiWrapper.style.backgroundColor = " #6D6D6D8A"
    emojiWrapper.style.boxShadow = "0px 4px 4px 0px #00000040"
    emojiWrapper.style.borderRadius = "15px"

    emojiWrapper.innerText = item.emoji
    emojiWrapper.style.fontSize = "2.3rem"
    emojiWrapper.style.textAlign = "center"

    let categoryWrapper = document.createElement("div")
    categoryWrapper.style.flexGrow = "1"
    let category = document.createElement("p")
    category.innerText = item.category
    category.style.fontSize = "0.9rem"
    category.style.textShadow = "0px 2px 2px #00000040"
    category.style.color = "#FFFFFF"
    category.style.fontWeight = "400"

    let amountWrapper = document.createElement("div")
    amountWrapper.style.flexGrow = "2"
    let amount = document.createElement("p")
    amount.classList.add("item-amount-text")
    amount.innerText = parseFloat(item.amount) > 0 ? `+${item.amount}€` : `${item.amount}€`
    amount.style.fontSize = "1.1rem"
    amount.style.textShadow = "0px 2px 2px #00000040"
    amount.style.textAlign = "right"
    amount.style.padding = "5px"
    amount.style.color = parseFloat(item.amount) > 0 ? "var(--income-color)" : "var(--expenses-color)"
    amount.style.fontWeight = "500"
    amount.style.textShadow = "0px 4px 4px 0px #00000040"

    emojiContainer.appendChild(emojiWrapper)
    itemWrapper.appendChild(emojiContainer)
    categoryWrapper.appendChild(category)
    itemWrapper.appendChild(categoryWrapper)
    itemWrapper.appendChild(amountWrapper)
    amountWrapper.appendChild(amount)
    cardPlaceholder.appendChild(itemContainer)
    //insert as first child
    itemContainer.insertBefore(itemWrapper, itemContainer.firstChild)
}

function editIems() {
    for (let item of itemsList) {
        //check if already has a removebutton
        if (!item.querySelector("button")) {
            let removeButton = document.createElement("button")
            removeButton.setAttribute("id", `${item.id}`)
            removeButton.classList.add("removeButton")
            removeButton.style.display = "flex"
            removeButton.style.justifyContent = "center"
            removeButton.style.alignItems = "center"
            removeButton.style.width = "25px"
            removeButton.style.height = "25px"
            removeButton.style.backgroundColor = "#CF0000"
            removeButton.style.border = "none"
            removeButton.style.cursor = "pointer"
            removeButton.style.borderRadius = "50%"
            removeButton.style.boxShadow = "0px 4px 4px 0px #00000040"
            removeButton.style.margin = "10px"
            let horizontalLine = document.createElement("hr")
            horizontalLine.style.width = "15px"
            horizontalLine.style.height = "2px"
            horizontalLine.style.border = "none"
            horizontalLine.style.backgroundColor = "#FFFFFF"
            horizontalLine.style.padding = "0"

            removeButton.append(horizontalLine)
            item.insertBefore(removeButton, item.firstChild)
            //add event listener for each button
            removeButton.addEventListener("click", (event) => {

                let itemWrapper = removeButton.parentElement
                let itemAmountText = document.querySelector(".item-amount-text")
                // get .item-amount-text  
                if (parseFloat(itemWrapper.querySelector(".item-amount-text").innerText) > 0) {
                    //income removed
                    let inputAmount = parseFloat(itemWrapper.querySelector(".item-amount-text").innerText.replace("€", ""))
                    incomeTotal = incomeTotal - inputAmount
                    incomeUI.innerText = `${parseFloat(incomeTotal).toFixed(2)}€`
                    savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`

                } else {
                    //expenses removed
                    let inputAmount = parseFloat(itemWrapper.querySelector(".item-amount-text").innerText.replace("€", ""))
                    expensesTotal = expensesTotal + inputAmount
                    expensesUI.innerText = `${parseFloat(expensesTotal).toFixed(2)}€`
                    savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`


                }
                itemWrapper.remove()
                listOfItems.splice(item.id - 1, 1)
                saveToLocalStorage(listOfItems)

                if (itemsList.length === 0) {
                    cardText.style.display = "inline-block"
                    cardEmojisPlaceholder.style.display = "inline-block"
                }


            })
        }

    }


}

function removeEditUI() {
    let buttons = document.querySelectorAll(".removeButton")

    for (let button of buttons) {
        button.remove()
    }

}


//Get data from local storage if it exists
listOfItems = getFromLocalStorage() == null ? listOfItems : getFromLocalStorage();

//For each item saved on local storage, add an item
for (let item of listOfItems) {
    addItem(item)
    if (parseInt(item.amount) > 0) {
        incomeTotal = incomeTotal + parseFloat(item.amount)
        incomeUI.innerText = `${parseFloat(incomeTotal).toFixed(2)}€`
    } else {
        expensesTotal = expensesTotal - parseFloat(item.amount)
        expensesUI.innerText = `${parseFloat(expensesTotal).toFixed(2)}€`
    }
    savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
}


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

meatballButton.addEventListener("click", (event) => {
    if (isDoneMenu) {
        event.stopPropagation()
    } else {
        editMenu.classList.toggle("active")
    }

})

cancelButton.addEventListener("click", (event) => {
    editMenu.classList.toggle("active")
})

editButton.addEventListener("click", (event) => {
    editIems()
    isDoneMenu = true
    editMenu.classList.toggle("active")
    doneMenu.classList.toggle("active")
    doneMenu.classList.toggle("top")


})

doneButton.addEventListener("click", (event) => {
    isDoneMenu = false
    doneMenu.classList.toggle("active")
    doneMenu.classList.toggle("top")
    removeEditUI()


})

addTransaction.addEventListener("click", (event) => {
    // check input is a number, if it is positive or negative and sum totals
    counter += 1
    event.preventDefault()
   
    if (Number(inputText.value) && isConceptSelected) {
        let item = {
            id: counter,
            amount: inputText.value,
            category: selectConcept.querySelector(".text-concept").innerText,
            emoji: selectConcept.querySelector(".emoji").innerText
        }
        let inputNumber = parseFloat(inputText.value)
        if (inputNumber > 0) {
            incomeTotal = inputNumber + incomeTotal
            incomeUI.innerText = `${parseFloat(incomeTotal).toFixed(2)}€`
            savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
            //pasar a item el objeto CATEGORY
            item.amount = inputText.value
            item.category = selectConcept.querySelector(".text-concept").innerText
            item.emoji = selectConcept.querySelector(".emoji").innerText

            addItem(item)
            input.style.border = "none"
            concept.style.border = "none"
            listOfItems.push(item)
            saveToLocalStorage(listOfItems)
            clearInput()
        }
        else {
            expensesTotal = Math.abs(inputNumber - expensesTotal)
            expensesUI.innerText = `${parseFloat(expensesTotal).toFixed(2)}€`
            savings.innerText = `${parseFloat(incomeTotal - expensesTotal).toFixed(2)}€`
            item.amount = inputText.value
            item.category = selectConcept.querySelector(".text-concept").innerText
            item.emoji = selectConcept.querySelector(".emoji").innerText
            addItem(item)
            input.style.border = "none"
            concept.style.border = "none"
            listOfItems.push(item)
            saveToLocalStorage(listOfItems)
            clearInput()
        }
    } else {
        input.style.border = "2px solid var(--error-color)"
        concept.style.border = "2px solid var(--error-color)"
    }

})

