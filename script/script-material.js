// get the material data 

//vaild form 
function validateForm() {
    const form = document.forms[0];
    const fileInput = document.getElementById('product-image');
    const maxFileSize = 25 * 1024 * 1024;

    for (let i = 0; i < form.length; i++) {
        if (form[i].hasAttribute('required') && !form[i].value) {
            alert('Please fill out all required fields.');
            form[i].focus();
            return false;
        }
        
    if (fileInput.files.length > 0 && fileInput.files[0].size > maxFileSize) {
        alert('The file size must be less than 25 MB.');
        fileInput.focus();
        return false;
    }

    return true;
}
}
