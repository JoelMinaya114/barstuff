const slider = document.getElementById('letterSlider');

// Array of letters A, T, and Z
const letters = ['A', 'T', 'Z'];

// Option boxes for each letter
const optionA = document.getElementById('option-A');
const optionTBoxes = document.getElementById('option-T-boxes');
const optionZ = document.getElementById('option-Z');
const beautyOptions = document.getElementById('beauty-options');

// Add event listeners to each T box
const boxCar = document.getElementById('box-car');
const boxTravel = document.getElementById('box-travel');
const boxBeauty = document.getElementById('box-beauty');
const boxSport = document.getElementById('box-sport');

boxCar.addEventListener('click', function() {
    //Add any functionality here for when CAR is clicked
    window.location.href = 'car.html';
});

boxTravel.addEventListener('click', function() {
    // Add any functionality here for when TRAVEL is clicked
    window.location.href = 'travel.html';
});

boxBeauty.addEventListener('click', function() {
    // Add any functionality here for when BEAUTY is clicked
    window.location.href = 'beauty.html';
});

boxSport.addEventListener('click', function() {
    // Add any functionality here for when SPORT is clicked
    window.location.href = 'sport.html';
});


// Function to show the correct option box based on the slider value
function showOption(value) {
    // Hide all options first
    optionA.style.display = 'none';
    optionTBoxes.style.display = 'none';
    optionZ.style.display = 'none';
    beautyOptions.style.display = 'none'; // Hide beauty options initially

    // Show the correct option based on slider value
    if (value == 0) {
        optionA.style.display = 'block';
    } else if (value == 1) {
        optionTBoxes.style.display = 'flex';
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
