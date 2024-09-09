document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.BranerSlideShop button');
    var currentIndex = 0;
    const itemsPerView = 4;
    const totalItems = cards.length;
    const totalViews = Math.ceil(totalItems / itemsPerView);

    // Function to update the visibility of the cards
    function updateCardVisibility() {
        cards.forEach((card, index) => {
            if (index >= currentIndex * itemsPerView && index < (currentIndex + 1) * itemsPerView) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to update the button styles
    function updateButtonStyles() {
        buttons.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Function to scroll to the desired view
    function scrollToView(index) {
        currentIndex = index;
        updateCardVisibility();
        updateButtonStyles();
    }

    // Add click event listeners to buttons
    buttons.forEach((button, index) => {
        if (index < totalViews) {
            button.addEventListener('click', () => {
                scrollToView(index);
            });
        }
    });

    // Initialize the first view
    scrollToView(0);
});
