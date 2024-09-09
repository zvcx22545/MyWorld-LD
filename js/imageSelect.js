document.addEventListener('DOMContentLoaded', function() {
    // Arrays of image sources and text contents
    var images = [
        'images/Coincollect1.webp',
        'images/Coincollect2.webp',
        'images/Coincollect3.webp',
        'images/Coincollect4.webp'
    ];
    var texts = [
        'เลือกเมนู <br>“เช็ค COINS สะสม”',
        'ตรวจสอบ COINS',
        'เลือกสินค้าที่ต้องการ',
        'กดแลกสินค้า'
    ];

    var imgElement = document.getElementById('imgStep');
    var textElement = document.getElementById('text-contents');
    var currentIndex = 0;

    function updateContent(index) {
        // Reduce opacity to 0 then back to 1 to create the fade effect
        imgElement.style.opacity = 0;
        textElement.style.opacity = 0;
        
        setTimeout(function() {
            imgElement.src = images[index];
            textElement.innerHTML = texts[index];
            imgElement.style.opacity = 1;
            textElement.style.opacity = 1;
        }, 250); // This should match the transition time
    }

    document.getElementById('Next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent(currentIndex);
    });

    document.getElementById('prevImg').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent(currentIndex);
    });
});
