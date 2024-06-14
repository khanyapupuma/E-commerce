function updateCartCounter() {
    let cartCounter = document.querySelector('[counter]');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.textContent = totalItems;
}

function newProd(obj) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.id === obj.id);

    if (product) {
        product.quantity += 1;
    } else {
        obj.quantity = 1;
        cart.push(obj);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCounter();
});

try {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let productWrapper = document.querySelector('[products]');

    function displayProducts(products) {
        productWrapper.innerHTML = '';
        products.forEach(product => {
            productWrapper.innerHTML += `
            <div class="card">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                <div class="card-body">
                    <p class="card-text">${product.productName}</p>
                    <h6 class="card-title">${product.description}</h6>
                    <h6 class="card-text">Amount: R${product.amount}</h6>
                    <h6 class="card-text">Category: ${product.category}</h6>
                    <button class="btn btn-primary" onclick="newProd(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add to cart</button>
                </div>
            </div>
            `;
        });
    }

    function searchProducts() {
        let searchInput = document.querySelector('#searchInput').value.toLowerCase();
        let filteredProducts = products.filter(product =>
            product.productName.toLowerCase().includes(searchInput) ||
            product.category.toLowerCase().includes(searchInput)
        );
        displayProducts(filteredProducts);
    }

    function sortProducts() {
        let sortedProducts = [...products].sort((a, b) => {
            if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
                return -1;
            }
            if (a.productName.toLowerCase() > b.productName.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        displayProducts(sortedProducts);
    }

    displayProducts(products);
} catch (err) {
    console.error(err);
}


