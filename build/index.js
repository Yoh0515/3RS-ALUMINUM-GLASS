function sendMessage() {
  emailjs.init("19YZt0cTuvdX5zQfh");

  function validateForm() {
    let isValid = true;

    // Validate name
    const fname = document.getElementById("fname").value.trim();
    if (fname === "") {
      isValid = false;
      Swal.fire("Error", "Name is required", "error");
    }

    const lname = document.getElementById("lname").value.trim();
    if (lname === "") {
      isValid = false;
      Swal.fire("Error", "Name is required", "error");
    }

    // Validate email
    const email = document.getElementById("email").value.trim();
    if (email === "") {
      isValid = false;
      Swal.fire("Error", "Email is required", "error");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      Swal.fire("Error", "Email is invalid", "error");
    }

    // Validate message
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      isValid = false;
      Swal.fire("Error", "Message is required", "error");
    }

    return isValid;
  }

  if (!validateForm()) {
    // Stop if form is invalid
    console.log("Form is invalid. Please check all required fields.");
    return false; // Prevent form submission
  }

  var serviceID = "service_upqpddf";
  var templateID = "template_19zo6bd";

  var params = {
    sendername: document.querySelector("#fname").value,
    senderlname: document.querySelector("#lname").value,
    senderemail: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        text: `Thank you, '${params["sendername"]}'! Your message has been sent.`,
        showConfirmButton: false,
        timer: 2500,
      });

      // Clear form fields
      document.querySelector("#fname").value = "";
      document.querySelector("#lname").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      console.error("Error:", error); // Log the error for debugging
      alert("Sorry, something went wrong. Please try again later.");
    });

  return false; // Prevent form submission
}