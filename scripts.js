function loadTemplate(element, templateContent) {
  document.querySelector(element).innerHTML = templateContent;
}

const headerTemplate = `
        <div class="logo">
          <img src="/img/logo/logo.PNG" alt="logo">
        </div>

        <div class="headline">
          <h2>Smile & Sunshine Toy Co, Ltd.</h2>
          <h3>We are the best toy manufacturing company in the World !</h3>
        </div>

        <div class="btn">
          <a href="login.html" class="btn">Login | Register</a>
          <a href="report-problem.html" class="btn">Report a problem</a>
        </div>`;

const navTemplate_customer = `
        <ul>
          <div class="div-nav-margin"/><div>
          <li><a href="place-orders.html">Place Orders</a></li>
          <li><a href="view-orders.html">View Orders</a></li>
        </ul>`;

// Function to handle user login
function handleLogin() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "./make-orders.html";
}

// Function to update the header based on login status
function updateHeader() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (isLoggedIn) {
      const loginLink = document.querySelector('a[href="login.html"]');
      if (loginLink) {
          loginLink.remove();
      }
  }
}

loadTemplate("header", headerTemplate);
loadTemplate("nav", navTemplate_customer);
loadTemplate("footer", `<footer><p>Footer content goes here.</p></footer>`);
updateHeader();

/*
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
*/