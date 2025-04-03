const headerTemplate_general = `
    <div class="logo">
        <a href="../index.html"><img src="../img/logo/logo.PNG" alt="logo"></a>
    </div>
    <div class="headline">
        <h2>Smile & Sunshine Toy Co, Ltd.</h2>
        <h3>We are the best toy manufacturing company in the World !</h3>
    </div>
    <div class="btn">
        <a href="../login.html" class="btn">Login | Register</a>
        <a href="../report-problem.html" class="btn">Report a problem</a>
    </div>
    `;

const headerTemplate_login = `
    <div class="logo">
        <a href="../index.html"><img src="../img/logo/logo.PNG" alt="logo"></a>
    </div>
    <div class="headline">
        <h2>Smile & Sunshine Toy Co, Ltd.</h2>
        <h3>We are the best toy manufacturing company in the World !</h3>
    </div>
    <div class="btn">
        <a href="../report-problem.html" class="btn">Report a problem</a>
    </div>
    `;


const navTemplate_general = `
    <ul>
        <div class="div-nav-margin"/>
        <li><a href="../about-us.html">About Us</a></li>
        <li><a href="../contact-us.html">Contact Us</a></li>
    </ul>
    `;

const navTemplate_staff = `
    <ul>
        <div class="div-nav-margin"/>
        <li><a href="../staff/manage-products.html">Manage Products</a></li>
        <li><a href="../staff/manage-materials.html">Manage Materials</a></li>
        <li><a href="../staff/manage-customer-orders.html">Manage Orders</a></li>
        <li><a href="../staff/generate-report.html">Generate Report</a></li>
    </ul>
    <div id="user-info-box">
        <p>Welcome, User</p>
        <button onclick="Logout()">Logout</button>
    </div>
    `;

const navTemplate_customer = `
    <ul>
        <div class="div-nav-margin"/>
        <li><a href="../customer/browse-products.html">Browse Products</a></li>
        <li><a href="../customer/place-orders.html">Order Cart</a></li>
        <li><a href="../customer/manage-orders.html">Manage Orders</a></li>
        <li><a href="../customer/update-profile.html">Update Profile</a></li>
    </ul>
    <div id="user-info-box">
        <p>Welcome, User</p>
        <button onclick="Logout()">Logout</button>
    </div>
    `;

const footerTemplate = `
    <div class="bottom">
        <br/>
        <p style="text-align: center;">Copyright © 2025 Smile & Sunshine Toy Co, Ltd. All rights reserved.</p>
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
    window.location.href = "../index.html";
}

function Logout() {
    localStorage.removeItem("role");
    window.location.href = "../login.html";
}

currentRole = localStorage.getItem("role");

if (currentRole != null) {
    if (currentRole == 'customer') {
        headerTemplate = headerTemplate_login;
        navTemplate = navTemplate_customer;
    } else if (currentRole == 'staff') {
        headerTemplate = headerTemplate_login;
        navTemplate = navTemplate_staff;
    } else {
        headerTemplate = headerTemplate_general;
        navTemplate = navTemplate_general;
    }

} else {
    headerTemplate = headerTemplate_general;
    navTemplate = navTemplate_general;
}

loadCodeBlock("header", headerTemplate);
loadCodeBlock("nav", navTemplate);
loadCodeBlock("footer", footerTemplate);