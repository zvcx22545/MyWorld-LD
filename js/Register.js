// $(document).ready(function () {

//   const register =  $("#register");

//   register.click(function (e) {
//     e.preventDefault();
    
//       // Get the values from the input fields
//       const customerId = $("#customer_id").val();
//       const phoneNumber = $("#phoneNumber").val();

//       let Register = {
//           url: "https://games.myworld-store.com/api/customers/customerInfo/updatePhone",
//           method: "PUT",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//               customer_id: customerId,
//               phone: phoneNumber,
//           }),
//       };

//       fetch(Register.url, Register)
//           .then(response => {
//               if (!response.ok) {
//                   throw new Error('Network response was not ok');
//               }
//               return response.json();
//           })
//           .then(data => {
//               console.log(data);
//           })
//           .catch(error => {
//               console.error('Error:', error);
//           });
//   });
// });
