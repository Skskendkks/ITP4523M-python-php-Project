function loadTemplate(element, templateUrl) {
    fetch(templateUrl)
      .then((response) => response.text())
      .then((template) => document.querySelectorAll(element)[0].innerHTML = template);
  }
  loadTemplate("header", "template/header.html");