function formValidation() {
  // Get the values of the form fields
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const zipcode = document.getElementById("zipcode").value;
  const city = document.getElementById("city").value;
  const quantity = document.getElementById("quantity").value;
  
  // Validate the form fields
  if (fname == "") {
    alert("First name is required");
    return false;
  } else if (!/^[a-zA-Z]*$/.test(fname)) {
    alert("First name can only contain letters");
    return false;
  }
  
  if (lname == "") {
    alert("Last name is required");
    return false;
  } else if (!/^[a-zA-Z]*$/.test(lname)) {
    alert("Last name can only contain letters");
    return false;
  }

  if (email.indexOf("@") == -1) {
      alert("Please enter a valid email address");
      return false;
  }

  if (address == "") {
    alert("Address is required");
    return false;
  }

    if (zipcode == "") {
      alert("Zip code is required");
      return false;
    } else if (!/^[0-9]*$/.test(zipcode)) {
      alert("Zip code can only contain numbers");
      return false;
    }
    
  if (city == "") {
    alert("City is required");
    return false;
  }
  if (quantity == "") {
    alert("Quantity is required");
    return false;
  }
  
  // Set the values in local storage
  sessionStorage.setItem("fname", document.getElementById("fname").value);
  sessionStorage.setItem("lname", document.getElementById("lname").value);
  sessionStorage.setItem("email", document.getElementById("email").value);
  sessionStorage.setItem("address", document.getElementById("address").value);
  sessionStorage.setItem("zipcode", document.getElementById("zipcode").value);
  sessionStorage.setItem("city", document.getElementById("city").value);
  sessionStorage.setItem("quantity", document.getElementById("quantity").value);
  
  return true;
}

// Generate confirmation
function writeConfirmation() {
  // Read the personal data into variables
  const firstName = sessionStorage.getItem("fname");
  const lastName = sessionStorage.getItem("lname");
  const email = sessionStorage.getItem("email");
  const address = sessionStorage.getItem("address");
  const zipcode = sessionStorage.getItem("zipcode");
  const city = sessionStorage.getItem("city");
  const quantity = sessionStorage.getItem("quantity");

  /*
      Insert the labels and placeholders for the above variables into a 
      string template using <p> and <span> elements for formatting.
  */

  let confirmation = `
      <p><span class="confirmation-label">First name:</span>  ${firstName}</p>
      <p><span class="confirmation-label">Last name:</span>  ${lastName}</p>
      <p><span class="confirmation-label">Email:</span>  ${email}</p>
      <p><span class="confirmation-label">Address:</span>  ${address}</p>
      <p><span class="confirmation-label">Zip code:</span>  ${zipcode}</p>
      <p><span class="confirmation-label">City:</span>  ${city}</p>
      <p><span class="confirmation-label">Attendees:</span>  ${quantity}</p>
  `;

  // Set the confirmation as the innerHTML of the element
  document.getElementById("confirmation-message").innerHTML = confirmation;
}

