function calculateTotal() {

    price = parseFloat(document.getElementById("p").textContent);
    quantity = document.getElementById("q").value;
    total = quantity * price;
    document.getElementById("total").textContent = total.toFixed(2);
}
