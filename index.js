
function validateEmail() {
    const emailInput = document.getElementById('email').value; 
    const emailErrorMessage = document.getElementById('errormessage');
    const emailBoxInput = document.getElementById("email")

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
      emailErrorMessage.classList.remove('hidden')
      emailBoxInput.classList.add("emailinputs"); // Display error message if invalid
    } else {
      emailErrorMessage.classList.add('hidden')
      emailBoxInput.classList.remove("emailinputs"); // Hide error message if valid
    }
  }