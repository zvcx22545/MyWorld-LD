let LiffID = "2002643017-mz35NrQk";
let Url = "https://myworld-store.com/presentAu/";
let LiffIDshop = "2002643017-OBl6MAJa";
let Urlshop = "https://myworld-store.com/presentSh/";
var modal = document.getElementById("modal");
var btn = document.getElementById("registor");
let Product = document.getElementById("LineShop");
var span = document.getElementsByClassName("close")[0];
let userHasPhone = false;
let registerbtn = document.getElementById("registorbtn");


if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

async function GetProfile() {
  try {
    const profile = await liff.getProfile();
    console.log(profile)
    const userId = profile.userId;
    document.getElementById("customer_id").value = userId;
    let picture = profile.pictureUrl;
    let GetCustomerinfo = {
      url: "https://games.myworld-store.com/api/customers/customerInfo",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        customer_id: userId,
        name: profile.displayName,
        picture: picture,
      }),
    };
    $.ajax(GetCustomerinfo).done(
      await function (response) {
        const phone = response.phone;
        userHasPhone = !!response.phone;
        if (phone == null) {
          modal.style.display = "block";
        }
        console.log(phone);
        // Check if the element exists before setting its value
        const phoneNumberAuthElement = document.getElementById('phoneNumberAuth');
        if (phoneNumberAuthElement) {
            phoneNumberAuthElement.value = phone;
            console.log(phoneNumberAuthElement.value);

        } else {
            console.error("Element with ID 'phoneNumberAuth' not found.");
        }
          // if (userHasPhone) {
            
          // }
      }
    );
  } catch (err) {
    console.log("Error getting profile:", err);
  }
}

document.addEventListener("DOMContentLoaded", async function () {

  try {
    await liff.init({
      liffId: LiffID,
      withLoginOnExternalBrowser: true,
    });
    liff.ready.then(() => {
      if (liff.isInClient()) {
        GetProfile();
      } else if (liff.isLoggedIn()) {
        console.log("User is logged in. Fetching user profile...");
        GetProfile();
      } else {
        console.log("User is not logged in. Redirecting to login...");
        liff.login({
          redirectUri: Url,
        });
      }
    });
  } catch (error) {
    console.error("Error initializing LIFF:", error);
    // alert("Error initializing app. Please try again.");
  }

  if (registerbtn) {
    registerbtn.onclick = async function () {
      if (userHasPhone) {
        modal.style.display = "block";
      }
    };
  }

  if (Product) {
    Product.onclick = async function () {
      window.location.href = "line://app/2002643017-OBl6MAJa";
      try {
        await liff.init({
          liffId: LiffIDshop,
          withLoginOnExternalBrowser: true,
        });
        liff.ready.then(() => {
          if (liff.isInClient()) {
            GetProfile();
          } else if (liff.isLoggedIn()) {
            console.log("User is logged in. Fetching user profile...");
            GetProfile();
          } else {
            console.log("User is not logged in. Redirecting to login...");
            liff.login({
              redirectUri: Urlshop,
            });
          }
        });
      } catch (error) {
        console.error("Error initializing LIFF:", error);
        // alert("Error initializing app. Please try again.");
      }
    };
  }
});
