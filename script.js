document.addEventListener('DOMContentLoaded', function() {
    // Get the elements after the DOM is fully loaded
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
            wordDisplay.innerText = 'Adventure';
            optionA.style.display = 'flex'; // Show Adventure-related options
        } else if (value == 1) {
            wordDisplay.innerText = 'Travel';
            optionTBoxes.style.display = 'flex'; // Show Travel-related options (Car, Beauty, Events)
        } else if (value == 2) {
            wordDisplay.innerText = 'Zen';
            optionZ.style.display = 'flex'; // Show Zen-related options
        }
    }

    // Initial call to show the correct option when the page loads
    showOption(slider.value);

    // Event listener for slider input changes
    slider.addEventListener('input', function() {
        const letterIndex = this.value;
        showOption(letterIndex);
    });

    // Get the Travel box and handle Travel button click
    const boxTravel = document.getElementById('box-travel');
    if (boxTravel) {
        boxTravel.addEventListener('click', function() {
            document.getElementById('initial-slider').style.display = 'none';
            travelContent.style.display = 'block';
        });
    }

    // Travel slider functionality
    const travelSlider = document.getElementById('travelSlider');
    if (travelSlider) {
        travelSlider.addEventListener('input', function() {
            const travelIndex = this.value;
            if (travelIndex == 0) {
                document.getElementById('travel-display').innerText = 'Hotels';
            } else if (travelIndex == 1) {
                document.getElementById('travel-display').innerText = 'Flights';
            } else if (travelIndex == 2) {
                document.getElementById('travel-display').innerText = 'Restaurants';
            }
        });
    }

    // Handle Car, Beauty, and Event button clicks
    const boxCar = document.getElementById('box-car');
    const boxBeauty = document.getElementById('box-beauty');
    const boxEvent = document.getElementById('box-event'); // Updated to match the new name

    if (boxCar) {
        boxCar.addEventListener('click', function() {
            window.location.href = 'car.html'; // Ensure car.html exists
        });
    }

    if (boxBeauty) {
        boxBeauty.addEventListener('click', function() {
            window.location.href = 'beauty.html'; // Ensure beauty.html exists
        });
    }

    if (boxEvent) {
        boxEvent.addEventListener('click', function() {
            window.location.href = 'event.html'; // Ensure event.html exists
        });
    }
});
