const slider = document.getElementById('letterSlider');

// Array of letters A, T, and Z
const letters = ['A', 'T', 'Z'];

// Option boxes for each letter
const optionA = document.getElementById('option-A');
const optionT = document.getElementById('option-T');
const optionZ = document.getElementById('option-Z');
const beautyOptions = document.getElementById('beauty-options');

// Function to show the correct option box based on the slider value
function showOption(value) {
    // Hide all options first
    optionA.style.display = 'none';
    optionT.style.display = 'none';
    optionZ.style.display = 'none';
    beautyOptions.style.display = 'none'; // Hide beauty options initially

    // Show the correct option based on slider value
    if (value == 0) {
        optionA.style.display = 'block';
    } else if (value == 1) {
        optionT.style.display = 'block';
    } else if (value == 2) {
        optionZ.style.display = 'block';
        beautyOptions.style.display = 'block'; // Show the beauty options dropdown for "B"
    }
}

// Initial call to show the correct option when the page loads
showOption(slider.value);

// Event listener for slider input changes
slider.addEventListener('input', function() {
    const letterIndex = this.value;
    
    // Log the current letter for debugging or future use
    console.log(letters[letterIndex]);

    // Show the correct option based on the slider position
    showOption(letterIndex);
});
