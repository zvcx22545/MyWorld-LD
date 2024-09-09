document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('#product2 .video-wrapper video');
    let currentIndex = 1;


    function showVideo(index) {
        videos.forEach((video, i) => {
            if (i === index) {
                video.parentElement.classList.remove('hidden-video');
                video.play(); // Start playing the video immediately when shown
            } else {
                video.parentElement.classList.add('hidden-video');
                video.pause(); // Pause the hidden video
                video.currentTime = 0; // Reset the hidden video
            }
        });
    }

    function slideToNextVideo() {
        currentIndex = (currentIndex + 1) % videos.length;
        showVideo(currentIndex);
    }

    // Start showing the first video, but don't autoplay
    videos.forEach(video => {
        video.parentElement.classList.add('hidden-video');
        video.pause();
    });
    showVideo(currentIndex);

    // Slide to the next video when clicking on the current video
    videos.forEach((video) => {
        video.addEventListener('click', slideToNextVideo);
    });
});


//////////////////////////////////////////////////////////////////////
const sliderTrack = document.getElementById('slider-track');
const sliderItems = Array.from(sliderTrack.children);
const cloneFirst = sliderItems[0].cloneNode(true);
const cloneLast = sliderItems[sliderItems.length - 1].cloneNode(true);


document.querySelector('.banner .logo-text img:nth-child(2)').addEventListener('click', function() {
    window.location.href = 'https://myworld-virtual-store.com';
});