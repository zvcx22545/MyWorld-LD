$(document).ready(function () {
  // Sticky navbar
  var navbar = $("#navbar");
  if (navbar.length) {
    var sticky = navbar.offset().top;

    function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky");
      } else {
        navbar.removeClass("sticky");
      }
    }

    $(window).scroll(function () {
      stickyNavbar();
    });
  }

  // Smooth scrolling
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Update active link
  function updateActiveLink() {
    var scrollPos = $(document).scrollTop();
    $("section").each(function () {
      var top = $(this).offset().top - 100;

      if (scrollPos >= top) {
        var id = $(this).attr("id");
        $("nav a.nav-link").removeClass("active");
        $('nav a.nav-link[href="#' + id + '"]').addClass("active");
      }
    });
  }

  $(document).on("scroll", function () {
    updateActiveLink();
  });

  // Initial call to set the active link based on the current scroll position
  updateActiveLink();

  // Second sticky navbar functionality (if needed)
  var navbar = $(".navbar");
  if (navbar.length) {
    var stickyNavTop = navbar.offset().top;

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > stickyNavTop) {
        navbar.addClass("sticky");
      } else {
        navbar.removeClass("sticky");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");

  // Check if the user has already accepted cookies
  if (!localStorage.getItem("cookiesAccepted")) {
      banner.style.display = "flex";
  }

  acceptButton.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      banner.style.display = "none";
  });
});
