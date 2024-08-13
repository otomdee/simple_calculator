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
const displayScreen = document.querySelector("#display");

//assign variables to buttons
const buttonVars = {}; 
pageButtons.forEach((button) => {
    buttonVars[`${button.id}`] = button;
})

let leftVar;
let opVar;

//function to display uncalculated figures
let displayArray = [];
function display(value) {
    displayArray.push(value);
    displayScreen.innerHTML = displayArray.join("");
}

//add listeners to buttons
pageButtons.forEach((button) => {
    if (button.id !== "topAC" && button.id !== "topPlusMinus" && button.id !== "equal") {
        if (button.id == "minus") {
            button.addEventListener("click", () => {
                opVar = "-";
                display("-")});
        }
        else if (button.id == "plus") {
            button.addEventListener("click", () => {opVar = "+";
                display("+")});
        }
        else if (button.id == "divide") {
            button.addEventListener("click", () => {
                opVar = "/";
                display("÷")});
        }
        else if (button.id == "multiply") {
            button.addEventListener("click", () => {opVar = "*"
                display("×")});
        }
        else if (button.id !== "butPoint") {
            button.addEventListener("click", () => {
                leftVar = `${button.id.slice(3)}`;
                display(leftVar);
            })
        }
    }
})

//calculate and display result
const operatorArr = ["-", "+", "×", "÷"];
let opSwitch = 0;
document.querySelector("#equal")
.addEventListener("click", () => {
    let leftCalc = [];
    let rightCalc = [];
    displayArray.forEach((item) => {
        if (!operatorArr.includes(item) && opSwitch === 0) {
            leftCalc.push(item);
        }
        else if(operatorArr.includes(item)) { 
            opSwitch++;
        }
        else if(!operatorArr.includes(item) && opSwitch === 1) {
            rightCalc.push(item);
        }
    })
    const finalResult = operate(parseInt(leftCalc.join("")), parseInt(rightCalc.join("")), opVar);
    displayScreen.innerHTML = finalResult;
})
