//get the MySQL data from the database

//get the material check box value form the Mysql database 

//check the edit-product form is valid or not
function validateForm() {
    const quantityInput = document.getElementById('product-quantity');
    const checkboxes = document.querySelectorAll('input[name="Material ID"]');
    let isChecked = false;

    if (quantityInput.value < 0) {
        alert("Quantity cannot be less than 0.");
        return false;
    }

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        alert("Please select at least one material.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}