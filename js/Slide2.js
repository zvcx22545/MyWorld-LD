document.addEventListener('DOMContentLoaded', function () {

    const sliderTrack = document.querySelector('#slide2');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderTrack.addEventListener('mousedown', (e) => {
      isDown = true;
      sliderTrack.classList.add('active');
      startX = e.pageX - sliderTrack.offsetLeft;
      scrollLeft = sliderTrack.scrollLeft;
    });

    sliderTrack.addEventListener('mouseleave', () => {
      isDown = false;
      sliderTrack.classList.remove('active');
    });

    sliderTrack.addEventListener('mouseup', () => {
      isDown = false;
      sliderTrack.classList.remove('active');
    });

    sliderTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderTrack.offsetLeft;
      const walk = (x - startX) * 2; // The * 2 value adjusts the scroll speed
      sliderTrack.scrollLeft = scrollLeft - walk;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const target1 = document.getElementById('toppic1');
    const target2 = document.getElementById('toppic2');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target1.classList.add('animatein2');
                target2.classList.add('animatein2');
            } else {
                target1.classList.remove('animatein2');
                target2.classList.remove('animatein2');
            }
        });
    });

    observer.observe(target1);
    observer.observe(target2);

    const banner = document.querySelector('.home');
    const topicBanner = document.querySelector('.home-logo-text');
    const topicBanner2 = document.querySelector('.home-right-brand');
    const topicBannerGame = document.querySelector('.logo-text');
    const buttons = document.querySelectorAll('.BranerSlide button');
    const images = [
        'url("imagesnew/bg-banner.webp")',
        'url("images/Heroresize.webp")',
        'url("images/Hero2resize.webp")',
        'url("images/Hero3resize.webp")',
        'url("images/Hero4resize.webp")',
    ];
    let currentIndex = 0;
    let autoSlideInterval;
    let autoSlideTimeout;

    function changeBackgroundImage() {
        banner.style.backgroundImage = images[currentIndex];
        if (currentIndex == 1) {
            topicBanner.classList.remove('hidden');
        } else {
            topicBanner.classList.add('hidden');
        }

        if (currentIndex >= 1) {
            banner.classList.add('bgright')
        } else {
            banner.classList.remove('bgright')
        }

        if (currentIndex == 0) {
            topicBannerGame.classList.remove('hidden');
            topicBanner2.classList.add('hidden');
        } else {
            topicBannerGame.classList.add('hidden');
            topicBanner2.classList.remove('hidden');
        }
        updateButtonStyles();
    }

    function updateButtonStyles() {
        buttons.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            changeBackgroundImage();
        }, 10000); // Change image every 10 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        clearTimeout(autoSlideTimeout);
        stopAutoSlide();
        autoSlideTimeout = setTimeout(startAutoSlide, 2000); // Restart auto-slide after 2 seconds
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            changeBackgroundImage();
            resetAutoSlide();
        });
    });

    startAutoSlide(); // Initialize auto-slide
    changeBackgroundImage(); // Show the first image immediately
    
});
  
  // ค้นหาองค์ประกอบที่ต้องการจะใช้
var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");

// เพิ่มฟังก์ชันสำหรับควบคุมการเล่นวิดีโอ
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    playButton.textContent = "Pause";
  } else {
    video.pause();
    playButton.textContent = "Play";
  }
}

document.addEventListener('DOMContentLoaded', function() {
    // Select the elements to observe
    const rulesSection = document.getElementById('rulesTitle');
    const gameSection = document.getElementById('toppic-contents-right');
    const myworldSection = document.getElementById('myworld-logo');
    const myworld1 = document.getElementById('myworld1');
    const myworld2 = document.getElementById('myworld2');
    
    // Create a single IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animatein2'); // Add animation when element comes into view
            } else {
                entry.target.classList.remove('animatein2'); // Remove animation when element goes out of view
            }
        });
    }, { threshold: 0.3 }); // Adjust threshold as needed

    // Observe both elements if they exist
    if (rulesSection) observer.observe(rulesSection);
    if (gameSection) observer.observe(gameSection);
    if (myworldSection) observer.observe(myworldSection);
    if (myworld1) observer.observe(myworld1);
    if (myworld2) observer.observe(myworld2);
});
