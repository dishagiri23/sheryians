// script.js

// Get elements from the DOM
const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let counter = 0;  // Initial counter value

// Function to update the counter on the webpage
function updateCounter() {
    counterElement.textContent = counter;  // Display the updated counter value
}

// Increase counter by 1
increaseBtn.addEventListener("click", function() {
    counter++;  // Increase the counter
    updateCounter();  // Update the displayed counter value
});

// Decrease counter by 1
decreaseBtn.addEventListener("click", function() {
    counter--;  // Decrease the counter
    updateCounter();  // Update the displayed counter value
});
