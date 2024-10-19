const slider = document.getElementById('letterSlider');
const wordDisplay = document.getElementById('word-display');
const travelContent = document.getElementById('travel-content');

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
    travelContent.style.display = 'none';

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

// Get the Travel box
const boxTravel = document.getElementById('box-travel');

// Travel button functionality
boxTravel.addEventListener('click', function() {
    // Hide initial slider and options
    document.getElementById('initial-slider').style.display = 'none';
    optionA.style.display = 'none';
    optionTBoxes.style.display = 'none';
    optionZ.style.display = 'none';

    //Show the Travel-specific content
    travelContent.style.display = 'block';
})

// Event listener for the Travel slider
const travelSlider = document.getElementById('travelSlider');
travelSlider.addEventListener('input', function() {
    const travelIndex = this.value;

    // Word change on top
    if (travelIndex == 0) {
        document.getElementById('travel-display').innerText = 'Hotels';
    } else if (travelIndex == 1) {
        document.getElementById('travel-display').innerText = 'Hotels';
    } else if (travelIndex == 2) {
        document.getElementById('travel-display').innerText = 'Restaurants';
    }
});

const boxCar = document.getElementById('box-car');
const boxBeauty = document.getElementById('box-beauty');
const boxSport = document.getElementById('box-sport');

// Add functionality to navigate to new pages when clicked
boxCar.addEventListener('click', function() {
    window.location.href = 'car.html'; // Navigate to car.html
});

boxBeauty.addEventListener('click', function() {
    window.location.href = 'beauty.html'; // Navigate to beauty.html
});

boxSport.addEventListener('click', function() {
    window.location.href = 'sport.html'; // Navigate to sport.html
});
