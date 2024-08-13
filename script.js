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

let leftVar;
let opVar;
//store variables for left and right side of operation
let opSwitch = 0;
let leftCalc;
let rightCalc;
function setCalculation() {
    //on clicking number button
    if (opSwitch == 0) {
        leftCalc = leftVar;
    }
    else if (opSwitch == 1) {
        rightCalc = leftVar;   
    }
}
//add listeners to buttons
pageButtons.forEach((button) => {
    if (button.id !== "topAC" && button.id !== "topPlusMinus" && button.id !== "equal") {
        if (button.id == "minus") {
            button.addEventListener("click", () => {opVar = "-"
                opSwitch++;});
        }
        else if (button.id == "plus") {
            button.addEventListener("click", () => {opVar = "+"
                opSwitch++;});
        }
        else if (button.id == "divide") {
            button.addEventListener("click", () => {opVar = "/"
                opSwitch++;});
        }
        else if (button.id == "multiply") {
            button.addEventListener("click", () => {opVar = "*"
                opSwitch++;});
        }
        else if (button.id !== "butPoint") {
            button.addEventListener("click", () => {
                leftVar = `${button.id.slice(3)}`;
                setCalculation();
            })
        }
    }
})

document.querySelector("#equal")
.addEventListener("click", () => 
    {document.querySelector("#display").innerHTML = operate(parseInt(leftCalc), parseInt(rightCalc), opVar);})
