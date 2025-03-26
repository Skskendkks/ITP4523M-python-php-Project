function showProducts(filteredProducts) {

    productTable = document.getElementById("product-table");
    productTable.innerHTML = "";

    for (let i = 0; i < filteredProducts.length; i++) {

        product = filteredProducts[i];
        productDiv = document.createElement("div");
        productDiv.className = "product-item";

        // Initial quantity
        let quantity = 0;

        productDiv.innerHTML = `
            <img src="${product.image}">
            <div class="details">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <h5>$${product.price}</h5>
            </div>
            <div class="quantity">
                <button type="button" onclick="updateQuantity(${product.id}, -1)">-</button>
                <div id="quantity-${product.id}" class="quantity-display">${quantity}</div>
                <button type="button" onclick="updateQuantity(${product.id}, 1)">+</button>
            </div>
        `;

        productTable.appendChild(productDiv);

    }

}

function updateQuantity(productId, change) {

    quantityDisplay = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityDisplay.textContent);
    currentQuantity = Math.max(0, currentQuantity + change);
    quantityDisplay.textContent = currentQuantity;

}

function performSearch() {

    searchInput = document.getElementById("search").value.toLowerCase();
    filteredProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(searchInput)
    );
    showProducts(filteredProducts);

}

function handleReset() {

    quantityDisplays = document.querySelectorAll(".quantity-display");

    quantityDisplays.forEach((quantityDisplay) => {
        quantityDisplay.textContent = 0;
    });

}

// Load products

var productList = [];

for (let i = 0; i < 5; i++) {

    productList[i] = {
        id: i + 1,
        name: `Product ${i + 1}`,
        description: `This is the description for Product ${i + 1}. It's amazing!`,
        price: ((i + 1) * 10).toFixed(2),
        image: `img/product/${i + 1}.jpg`
    };

}

showProducts(productList);