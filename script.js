// Select the display input field
const display = document.getElementById('display');

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character in the display
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

// Append a value to the display
function appendValue(value) {
    display.value += value;
}

// Calculate the result of the expression
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
