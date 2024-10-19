// script.js
const slider = document.getElementById('letterSlider');
const selectedLetter = document.getElementById('selectedLetter');

// Array of letters A-Z
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Update the displayed letter and redirect when the slider is moved
slider.addEventListener('input', function() {
    const letterIndex = this.value;
    selectedLetter.textContent = letters[letterIndex];
});

// Redirect on change
slider.addEventListener('change', function() {
    const selectedLetter = letters[this.value];
    // Example: Redirect to a URL based on the letter selected
    // In a real application, replace with actual URLs
    window.location.href = `https://example.com/page-${selectedLetter}`;
});
