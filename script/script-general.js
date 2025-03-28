const headerTemplate = `
    <div class="logo">
        <img src="/img/logo/logo.PNG" alt="logo">
    </div>
    <div class="headline">
        <h2>Smile & Sunshine Toy Co, Ltd.</h2>
        <h3>We are the best toy manufacturing company in the World !</h3>
    </div>
    <div class="btn">
        <a href="/login.html" class="btn">Login | Register</a>
        <a href="/report-problem.html" class="btn">Report a problem</a>
    </div>
    `;

const navTemplate_general = `
    <ul>
        <div class="div-nav-margin"/>
        <li><a href="/about-us.html">About Us</a></li>
    </ul>
    `;

const navTemplate_staff = `
    <ul>
        <div class="div-nav-margin"/>
        <li><a href="/Staff/Manage-Product.html">Manage Products</a></li>
        <li><a href="/Staff/Manage-Material.html">Manage Materials</a></li>
        <li><a href="/Staff/Manage-order.html">Manage Orders</a></li>
    </ul>
    `;

const navTemplate_customer = `
    <ul>
        <div class="div-nav-margin"/>
        <li><a href="/browse-products.html">Browse Products</a></li>
        <li><a href="/place-orders.html">Order Cart</a></li>
        <li><a href="/manage-orders.html">Manage Orders</a></li>
        <li><a href="/update-profile.html">Update Profile</a></li>
    </ul>
    `;

const footerTemplate = `
    <div class="bottom">
        <br/>
        <p>Copy rights reserved. </p>
        <br/>
    </div>
    `;

function loadCodeBlock(element, templateContent) {
    document.querySelector(element).innerHTML = templateContent;
}

function Login(event) {
    event.preventDefault();
    userType = document.querySelector('input[name="userType"]:checked').value;
    localStorage.setItem("role", userType);
    if (userType == "customer") {
        window.location.href = "/browse-products.html";
    } else if (userType == 'staff') {
        window.location.href = "/Staff/Manage-Product.html";
    }
}

function Logout() {
    localStorage.removeItem("role");
    window.location.href = "/login.html";
}

currentRole = localStorage.getItem("role");

if (currentRole != null) {
    if (currentRole == 'customer') {
        navTemplate = navTemplate_customer;
    } else if (currentRole == 'staff') {
        navTemplate = navTemplate_staff;
    } else {
        navTemplate = navTemplate_general;
    }
} else {
    navTemplate = navTemplate_general;
}

loadCodeBlock("header", headerTemplate);
loadCodeBlock("nav", navTemplate);
loadCodeBlock("footer", footerTemplate);