// script.js

let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        let expression = display.value;
        let result = eval(expression);

        let historyItem = document.createElement("li");
        historyItem.textContent = expression + " = " + result;

        // Latest calculation appears on top
        historyList.prepend(historyItem);

        display.value = result;

    }
    catch {
        display.value = "Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

document.addEventListener("keydown", function (event) {

    let key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        appendValue(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }

});