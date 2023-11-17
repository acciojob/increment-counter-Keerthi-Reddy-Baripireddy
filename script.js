//your JS code here. If required.
// Get the counter and button elements by their IDs
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

// Initialize the counter value
let counterValue = 0;

// Function to handle button click
function incrementCounter() {
    // Display the current counter value in an alert
    alert('Un-incremented value: ' + counterValue);

    // Increment the counter value
    counterValue++;

    // Update the counter element's text content
    counterElement.textContent = counterValue;
}

// Attach the incrementCounter function to the button's click event
incrementBtn.addEventListener('click', incrementCounter);
