document.addEventListener("DOMContentLoaded", function() {
    // Assuming `inStock` is a variable that indicates whether the product is in stock
    var inStock = false; // Change this value based on your stock condition

    var popup = document.getElementById("popup");
    var shopNow = document.getElementById("shopNow");
    var soldOut = document.getElementById("soldOut");

    // Show the pop-up
    popup.style.display = "flex";

    // Close the pop-up when the close button is clicked
    var closeBtn = document.querySelector(".close");
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Close the pop-up when the user clicks outside of it
    // window.onclick = function(event) {
    //     if (event.target == popup) {
    //         popup.style.display = "none";
    //     }
    // }

    // Show "Sold out" or "SHOP NOW" based on stock status
    if (inStock) {
        shopNow.style.display = "block";
        soldOut.style.display = "none";
    } else {
        shopNow.style.display = "none";
        soldOut.style.display = "block";
    }

    // Handle the SHOP NOW button click
    var shopNowBtn = document.getElementById("shopNow-img");
    shopNowBtn.onclick = function() {
        window.location.href = "https://shop.line.me/@myworld/product/1006584130";
    }
});
