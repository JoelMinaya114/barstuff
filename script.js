const slider = document.getElementById('letterSlider');
const wordDisplay = document.getElementById('word-display');

// Option boxes for each letter
const optionA = document.getElementById('option-A');
const optionTBoxes = document.getElementById('option-T-boxes');
const optionZ = document.getElementById('option-Z');

// Function to show the correct option box based on the slider value
function showOption(value) {
    // Hide all options first
    optionA.style.display = 'none';
    optionTBoxes.style.display = 'none';
    optionZ.style.display = 'none';

    // Show the correct option based on slider value
    if (value == 0) {
        wordDisplay.innerText = 'Adventure'; // Display 
        optionA.style.display = 'flex'; // Show the Adventure option for A
    } else if (value == 1) {
        wordDisplay.innerText = 'Travel';
        optionTBoxes.style.display = 'flex'; // Show the T-related options (CAR, TRAVEL, etc.)
    } else if (value == 2) {
        wordDisplay.innerText = 'Zen';
        optionZ.style.display = 'flex'; // Show Zen for Z
    }
}

// Initial call to show the correct option when the page loads
showOption(slider.value);

// Event listener for slider input changes
slider.addEventListener('input', function() {
    const letterIndex = this.value;
    showOption(letterIndex);
});

const boxCar = document.getElementById('box-car');
const boxTravel = document.getElementById('box-travel');
const boxBeauty = document.getElementById('box-beauty');
const boxSport = document.getElementById('box-sport');

// Add functionality to navigate to new pages when clicked
boxCar.addEventListener('click', function() {
    window.location.href = 'car.html'; // Navigate to car.html
});

boxTravel.addEventListener('click', function() {
    window.location.href = 'travel.html'; // Navigate to travel.html
});

boxBeauty.addEventListener('click', function() {
    window.location.href = 'beauty.html'; // Navigate to beauty.html
});

boxSport.addEventListener('click', function() {
    window.location.href = 'sport.html'; // Navigate to sport.html
});
