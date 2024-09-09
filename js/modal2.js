$(document).ready(function () {
  var telInput = $(".telInput");
  var errorText = $("#errorText");
  var modal = $("#modal");
  var closeBtn = $(".close");

  closeBtn.on("click", function () {
    modal.hide();
  });

  telInput.on("input", function (event) {
    var inputValue = telInput.val();
    var numericValue = inputValue.replace(/\D/g, "");
    telInput.val(numericValue);
    errorText.text("");
  });

  $("#register").click(function (e) {
    e.preventDefault();

    let phoneNumberAuthElement = $("#phoneNumberAuth").val();

    var phoneNumber = telInput.val();
    console.log(phoneNumber);
    console.log(phoneNumberAuthElement);

    if (phoneNumber.length !== 10) {
      showAlert("แจ้งเตือน!", "เบอร์โทรศัพท์ต้องมี 10 หลัก!", "error");
      errorText.text("*เบอร์โทรศัพท์ต้องมี 10 หลัก!");
      telInput.val("");
    } else if (/(\d)\1{6,}/.test(phoneNumber)) {
      showAlert(
        "แจ้งเตือน!",
        "เบอร์โทรศัพท์ไม่สามารถมีตัวเลขที่ซ้ำกันมากกว่า 6 ตัวได้!",
        "error"
      );
      errorText.text(
        "*เบอร์โทรศัพท์ไม่สามารถมีตัวเลขที่ซ้ำกันมากกว่า 6 ตัวได้!"
      );
      telInput.val("");
    } else {
      // Assuming the API endpoint and other settings are correctly configured.
      let Register = {
        url: "https://games.myworld-store.com/api/customers/customerInfo/updatePhone",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: $("#customer_id").val(), // Assuming this is set somewhere relevant
          phone: phoneNumber,
        }),
      };

      fetch(Register.url, Register)
        .then((response) =>
          response
            .text()
            .then((text) => ({ status: response.status, body: text }))
        )
        .then(({ status, body }) => {
          try {
            var data = JSON.parse(body);
          } catch (error) {
            throw new Error("Failed to parse JSON response");
          }

          if (status !== 200) {
            if (
              data.message === "Already register phone number" ||
              data.message === "can't register phone number"
            ) {
              showAlerts(
                "แจ้งเตือน!",
                "ท่านได้สมัครสมาชิกกับทาง MY World ไปเรียบร้อยแล้ว<br> * เช็คข้อมูลcoinได้ที่ Line@ *",
                "warning"
              );
            } else {
              throw new Error("Network response was not ok");
            }
          } else {
            console.log(data);
            showAlerts("Success!", "สมัครสมาชิกสำเร็จ!", "success");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          showAlerts("แจ้งเตือน!", "ลงทะเบียนไม่สำเร็จ!", "error");
        });
    }
  });

  function showAlert(title, message, type) {
    Swal.fire({
      title: title,
      html: message,
      icon: type,
      confirmButtonText: "ตกลง",
    }).then((result) => {
      if (result.isConfirmed) {
        // modal.hide();  // Hide the modal when the confirm button is clicked
      }
    });
  }

  function showAlerts(title, message, type) {
    let timerInterval;
    Swal.fire({
      title: title,
      html: message,
      icon: type,
      position: 'center-center',
      confirmButtonText: false,
      showCloseButton: false, // Hide default close button
      customClass: {
        container: "custom-swal-container", // Add custom class to container
      },
      didOpen: () => {
        const container = Swal.getContainer();

        if (type === "error" || type === "success") {
          const b = container.querySelector(".swal2-confirm");
          let seconds = 5;
          b.textContent = `ระบบกำลังเข้าสู่ Line Shopping ใน ${seconds} วินาที`;
          b.classList.add("custom-text-content"); // Add custom class to text content
          timerInterval = setInterval(() => {
            seconds--;
            b.textContent = `ระบบกำลังเข้าสู่ Line Shopping ใน ${seconds} วินาที`;
            if (seconds <= 0) {
              clearInterval(timerInterval);
              localStorage.clear();
              console.log("localStorage cleared before redirect");
              window.location.href = "https://shop.line.me/@myworld";
            }
          }, 1000);
        }
      },
      willClose: () => {
        var modal2 = document.getElementById("modal");
  
        clearInterval(timerInterval);
        localStorage.clear();
        console.log("localStorage cleared on modal will close");
        modal2.style.display = "none";
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        console.log("localStorage cleared on modal will close");
        modal.css("display", "none");
        // Hide the modal when the confirm button is clicked
      }
    });
  }
  
});

const buttons = document.querySelectorAll(".slideShow button");
const bannerImage = document.getElementById("bannerImage");
let currentIndex1 = 0;

function setActiveButton(index) {
  buttons.forEach((button) => button.classList.remove("active"));
  buttons[index].classList.add("active");
  bannerImage.classList.remove("animate");
  void bannerImage.offsetWidth; // รีเซ็ตการอนิเมชัน
  bannerImage.src = buttons[index].getAttribute("data-src");
  setTimeout(() => {
    bannerImage.classList.add("animate");
  }); // เรียกใช้งานใหม่
}

function nextSlide() {
  currentIndex1 = (currentIndex1 + 1) % buttons.length;
  setActiveButton(currentIndex1);
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    setActiveButton(index);
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  });
});

let interval = setInterval(nextSlide, 10000);

document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.getElementById("page");

  // Callback function for Intersection Observer
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoContainer.classList.add("vdo-animate");
      } else {
        videoContainer.classList.remove("vdo-animate");
      }
    });
  };

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(callback, {
    threshold: 0.9, // Adjust the threshold as needed
  });

  // Start observing the video container
  observer.observe(videoContainer);
});
