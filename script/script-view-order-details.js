action = new URLSearchParams(window.location.search).get('action');

if (action == 'view') {
    document.getElementById("warning-section").style.display = "none";
} else if (action == 'delete') {
    document.getElementById("warning-section").style.display = "block";
}
