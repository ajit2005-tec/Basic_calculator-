document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const sound = document.getElementById("clickSound");
    const display = document.getElementById("display");

    let memory = 0; // Store memory value

    // Play click sound on button press
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            sound.currentTime = 0; // Reset audio to start for multiple clicks
            sound.play();
        });
    });

    // Function to append value to display
    function appendValue(value) {
        display.value += value;
    }

    // Function to clear display
    function clearDisplay() {
        display.value = "";
    }

    // Function to delete last character
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    // Function to calculate result
    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    // Memory Clear (MC) - Clears stored memory
    document.getElementById("mc").addEventListener("click", () => {
        memory = 0;
        console.log("Memory Cleared");
    });

    // Memory Recall (MR) - Recalls stored memory to display
    document.getElementById("mr").addEventListener("click", () => {
        display.value = memory;
    });

    // Memory Add (M+) - Adds current display value to memory
    document.getElementById("m-plus").addEventListener("click", () => {
        let currentValue = parseFloat(display.value) || 0;
        memory += currentValue;
        console.log(`Memory Updated: ${memory}`);
    });

    // Memory Subtract (M-) - Subtracts current display value from memory
    document.getElementById("m-minus").addEventListener("click", () => {
        let currentValue = parseFloat(display.value) || 0;
        memory -= currentValue;
        console.log(`Memory Updated: ${memory}`);
    });

    // Expose functions to the global scope for inline `onclick` events
    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculateResult = calculateResult;
});
