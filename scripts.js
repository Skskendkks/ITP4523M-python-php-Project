function loadTemplate(element, templateUrl, callback) {
    fetch(templateUrl)
        .then((response) => response.text())
        .then((template) => {
            document.querySelector(element).innerHTML = template;
            if (callback) callback(); // Execute the callback after loading the template
        });
}

function handleLogin() {
  // Set loggedIn status in localStorage
  localStorage.setItem("loggedIn", "true");

  // Redirect to the homepage or any other page
  window.location.href = "./make-orders.html";
}

// Check if the user is logged in

// Load the header and remove "Login | Register" after it loads
loadTemplate("header", "./template/header.html", () => {
  isLoggedIn = localStorage.getItem("loggedIn")
  if (isLoggedIn) {
      const loginLink = document.querySelector('a[href="login.html"]');
      if (loginLink) {
          loginLink.remove();
      }
  }
});

loadTemplate("nav", "./template/nav-customer.html");
loadTemplate("footer", "./template/footer.html");