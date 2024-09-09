const sliderTrack = document.getElementById('slide2');
const scoreFill = document.getElementById('scoreFill');

sliderTrack.addEventListener('scroll', () => {
    const scrollPercentage = (sliderTrack.scrollLeft / (sliderTrack.scrollWidth - sliderTrack.clientWidth)) * 100;
    scoreFill.style.width = scrollPercentage + '%';
});
