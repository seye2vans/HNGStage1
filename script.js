const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);

  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => ValidityField(input));
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const subject = document.getElementById("subject");

    clearAllErrors();

    let isValid = true;
    isValid = ValidityField(fullName) && isValid;
    isValid = ValidityField(email) && isValid;
    isValid = ValidityField(subject) && isValid;
    isValid = ValidityField(message) && isValid;

    if (isValid) {
      showSuccessMessage();
      contactForm.reset();
      document
        .getElementById("successMessage")
        .scrollIntoView({ behavior: "smooth" });
    }
  }

  function ValidityField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    const errorElement = document.getElementById(`${fieldName}Error`);
    let isValid = true;
    let errorMessage = "";

    if (!value) {
      isValid = false;
      errorMessage = "This field is required.";
    } else if (fieldName === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address.";
      }
    } else if (fieldName === "message" && value.length < 10) {
      isValid = false;
      errorMessage = "Message must be at least 10 characters long.";
    }

    if (!isValid) {
      field.classList.add("error");
      errorElement.textContent = errorMessage;
      errorElement.classList.add("show");
    } else {
      field.classList.remove("error");
      errorElement.textContent = "";
      errorElement.classList.remove("show");
    }

    return isValid;
  }

  function clearAllErrors() {
    const errorElements = contactForm.querySelectorAll(".error-message");
    const inputElements = contactForm.querySelectorAll("input, textarea");

    errorElements.forEach((el) => {
      el.textContent = "";
      el.classList.remove("show");
    });
    inputElements.forEach((input) => input.classList.remove("error"));
  }
}

function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);

  document.addEventListener("click", () => {
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea"
    );
    interactiveElements.forEach((el) => {
      if (!el.hasAttribute("tabindex")) {
        el.setAttribute("tabindex", "0");
      }
    });
  });
}
