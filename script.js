//add operations
function operate(left, right, operator) {
    if (operator === "*") {
        return left * right;
    }
    else if (operator === "/") {
        return left/right;
    }
    else if (operator === "+") {
        return left + right;
    }
    else if (operator === "-") {
        return left - right;
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

//turn off other operator buttons if any operator is clicked
opSelectors = [
    document.getElementById("minus"),
    document.getElementById("plus"),
    document.getElementById("divide"),
    document.getElementById("multiply")
]

function buttonDisable() {
    opSelectors.forEach((selector) => {
        selector.disabled = true;
    });
}


//add listeners to buttons
pageButtons.forEach((button) => {
    if (button.id !== "topAC" && button.id !== "topPlusMinus" && button.id !== "equal") {
        if (button.id == "minus") {
            button.addEventListener("click", () => {
                opVar = "-";
                display("-");
                buttonDisable();
            });
        }
        else if (button.id == "plus") {
            button.addEventListener("click", () => {opVar = "+";
                display("+")
                buttonDisable();
            });
        }
        else if (button.id == "divide") {
            button.addEventListener("click", () => {
                opVar = "/";
                display("÷");
                buttonDisable();
            });
        }
        else if (button.id == "multiply") {
            button.addEventListener("click", () => {opVar = "*"
                display("×")
                buttonDisable();
            });
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
    if (parseInt(rightCalc.join("")) === 0 && opVar === "/") {
        displayScreen.innerHTML = "Nah bro";
        opSelectors.forEach((selector) => {
            selector.disabled = false;
        });
    }
    else {
        const finalResult = operate(parseInt(leftCalc.join("")), parseInt(rightCalc.join("")), opVar);
        displayScreen.innerHTML = Math.round(finalResult * 1000)/1000;
        displayArray = [];
        displayArray.push(Math.round(finalResult * 1000)/1000);
        displayScreen.innerHTML = displayArray[0];
        opSwitch = 0;
        opSelectors.forEach((selector) => {
            selector.disabled = false;
        });
    }
})

//clear all with A/C
document.querySelector("#topAC").addEventListener("click", () => {
    opSwitch = 0;
    leftVar = 0;
    leftCalc = [];
    rightCalc = [];
    displayArray = [];
    opVar = "";
    displayScreen.innerHTML = "";
})

//+/- , . , and % (to be completed)

document.getElementById("topPercent").disabled = true;
document.getElementById("topPlusMinus").disabled = true;
document.getElementById("butPoint").disabled = true;