// script.js

const slider = document.getElementById('letterSlider');

// Array of letters A, T, and Z
const letters = ['A', 'T', 'Z'];

// Update the displayed letter (for debug or future needs)
slider.addEventListener('input', function() {
    const letterIndex = this.value;
    console.log(letters[letterIndex]); // Shows the current letter (optional)
});
