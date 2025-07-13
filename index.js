
  const form = document.querySelector("form");
  const username =document.querySelector("username");
  const email = document.querySelector("email");
  const number = document.querySelector("number");
  const password = document.querySelector("password");
  const confirmPassword = document.querySelector("confirmPassword");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    clearErrors();

    // Optional JS fix for true 100vh height on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


    // Name check
    if (username.value.trim() === "") {
      showError(username, "Username is required");
      valid = false;
    }

    // Email check
    if (!validateEmail(email.value)) {
      showError(email, "Enter a valid email address");
      valid = false;
    }

    // Mobile number check (10-digit)
    if (!/^\d{10}$/.test(number.value)) {
      showError(number, "Enter a valid 10-digit number");
      valid = false;
    }

    // Password length
    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters");
      valid = false;
    }

    // Password match
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match");
      valid = false;
    }

    // If valid, submit or show success
    if (valid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function showError(input, message) {
    const parent = input.parentElement;
    parent.querySelector(".error-msg").textContent = message;
    parent.querySelector(".check").style.display = "none";
    parent.querySelector(".circle").style.display = "inline";
  }

  function clearErrors() {
    document.querySelectorAll(".form-control div").forEach(div => {
      div.querySelector(".error-msg").textContent = "";
      div.querySelector(".circle").style.display = "none";
      div.querySelector(".check").style.display = "inline";
    });
  }

  function validateEmail(email) {
    // Simple email format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

