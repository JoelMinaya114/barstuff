// Get references to the elements
const slider = document.getElementById('letter-slider');
const wordDisplay = document.getElementById('selected-title');
const boxesContainer = document.getElementById('boxes-container');
const optionA = document.getElementById('option-A');
const optionTBoxes = document.querySelectorAll('#option-T-boxes');
const optionZ = document.getElementById('option-Z');

// Function to show the correct option box based on the slider value
function showWordAndOptions(value) {
    // Hide all boxes initially
    boxesContainer.style.display = 'none';
    optionA.style.display = 'none';
    optionTBoxes.forEach(box => box.style.display = 'none');
    optionZ.style.display = 'none';

    // Show the correct option based on slider value
    if (value == 0) {
        wordDisplay.innerText = 'Adventure';
        optionA.style.display = 'flex';
        boxesContainer.style.display = 'flex';
    } else if (value == 1) {
        wordDisplay.innerText = 'Travel';
        optionTBoxes.forEach(box => box.style.display = 'flex');
        boxesContainer.style.display = 'flex';
    } else if (value == 2) {
        wordDisplay.innerText = 'Zen';
        optionZ.style.display = 'flex';
        boxesContainer.style.display = 'flex';
    }
    wordDisplay.classList.remove('hidden');
}

// Initial call to show the correct option when the page loads
showWordAndOptions(slider.value);

// Event listener for slider input changes
slider.addEventListener('input', function() {
    const letterIndex = this.value;
    showWordAndOptions(letterIndex);
});

// Add functionality to navigate to new pages when boxes are clicked
const boxCar = document.getElementById('box-car');
const boxTravel = document.getElementById('box-travel');
const boxBeauty = document.getElementById('box-beauty');
const boxSport = document.getElementById('box-sport');

if (boxCar) {
    boxCar.addEventListener('click', function() {
        window.location.href = 'car.html';
    });
}
if (boxTravel) {
    boxTravel.addEventListener('click', function() {
        window.location.href = 'travel.html';
    });
}
if (boxBeauty) {
    boxBeauty.addEventListener('click', function() {
        window.location.href = 'beauty.html';
    });
}
if (boxSport) {
    boxSport.addEventListener('click', function() {
        window.location.href = 'sport.html';
    });
}
