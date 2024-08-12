function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

let left;
let right;
let operator;

function operate(left, right, operator) {
    if (operator === "*") {
        return multiply(left, right);
    }
    else if (operator === "/") {
        return divide(left, right);
    }
    else if (operator === "+") {
        return add(left, right);
    }
    else if (operator === "-") {
        return minus(left, right);
    }
}

//access all buttons on the calculator and access the display
const pageButtons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector("#display");

//assign variables to buttons
const buttonVars = {}; 
pageButtons.forEach((button) => {
    buttonVars[`${button.id}`] = button;
})

//add listeners to buttons
let leftVar;
let opVar;
let rightVar;
pageButtons.forEach((button) => {
    if (button.id !== "topAC" && button.id !== "topPlusMinus" && button.id !== "equal") {
        button.addEventListener("click", () => {
            display.innerHTML = `${button.id}`
        })
    }
})